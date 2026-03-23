import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });

  try {
    const { problem } = await req.json();
    if (!problem) {
      return new Response(JSON.stringify({ error: "No problem provided" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            {
              role: "system",
              content: `You are a cybersecurity awareness assistant helping non-technical users understand cyber threats. Use simple, beginner-friendly English. Never blame the user. Be calm, clear, and supportive. Analyze the user's problem and return structured guidance using the provided tool.`,
            },
            {
              role: "user",
              content: `Analyze this cybersecurity problem a user is facing and provide structured guidance: "${problem}"`,
            },
          ],
          tools: [
            {
              type: "function",
              function: {
                name: "analyze_cyber_problem",
                description:
                  "Analyze a cybersecurity problem and return structured guidance for a non-technical user",
                parameters: {
                  type: "object",
                  properties: {
                    title: {
                      type: "string",
                      description: "Short title like 'This looks like an OTP Scam'",
                    },
                    term: {
                      type: "string",
                      description: "The cybersecurity term e.g. 'Vishing / OTP Fraud'",
                    },
                    sections: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          key: {
                            type: "string",
                            enum: [
                              "what_happening",
                              "red_flags",
                              "why_dangerous",
                              "what_to_do",
                              "where_report",
                              "prevention",
                            ],
                          },
                          title: { type: "string" },
                          items: {
                            type: "array",
                            items: { type: "string" },
                          },
                        },
                        required: ["key", "title", "items"],
                        additionalProperties: false,
                      },
                    },
                  },
                  required: ["title", "term", "sections"],
                  additionalProperties: false,
                },
              },
            },
          ],
          tool_choice: {
            type: "function",
            function: { name: "analyze_cyber_problem" },
          },
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please try again shortly." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service credits exhausted." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) throw new Error("No tool call in response");

    const analysis = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify(analysis), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("analyze-problem error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
