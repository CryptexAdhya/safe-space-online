const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const today = new Date().toISOString().split("T")[0];

    const response = await fetch("https://lovable-ai-gateway.lovable.dev/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `You are a cybersecurity awareness expert. Today's date is ${today}. Return ONLY valid JSON, no markdown, no code fences. Your task is to list the 12 most active and trending cybercrimes happening RIGHT NOW in the real world. Base your response on the latest real-world cybercrime trends, news, and reports from 2024-2025. Include specific recent incidents, named campaigns, or real statistics where possible. Write for everyday, non-technical people.

Return a JSON object with this exact structure:
{
  "last_updated": "${today}",
  "threats": [
    {
      "rank": 1,
      "name": "Short threat name",
      "description": "2-3 sentence simple explanation of this threat",
      "real_world_example": "A specific, real recent incident or campaign (mention real company names, countries, dates, or statistics when possible)",
      "how_it_works": "Step-by-step how criminals carry out this attack, in simple words",
      "warning_signs": ["sign 1", "sign 2", "sign 3"],
      "what_to_do": ["action 1", "action 2", "action 3"],
      "risk_level": "Very High" or "High" or "Medium",
      "trend": "Rising Fast" or "Rising" or "Most Common" or "Very Common",
      "affected_countries": ["list of most affected countries/regions"],
      "victims_profile": "Who is most targeted (e.g. elderly, students, job seekers)"
    }
  ]
}

Requirements:
- Use REAL recent incidents and data, not generic examples
- Mention actual company names, campaign names, or statistics from real reports
- Include threats relevant globally but especially in India, US, UK, Southeast Asia
- Cover different categories: financial fraud, social engineering, malware, identity theft, AI-powered attacks
- Order by how actively these are happening RIGHT NOW (most active first)
- Keep language very simple and beginner-friendly`
          },
          {
            role: "user",
            content: `List the 12 most trending and actively happening cybercrimes in the world right now as of ${today}. Include real recent incidents, statistics, and named campaigns. Focus on what everyday people are actually falling victim to.`
          }
        ],
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("AI Gateway error:", errText);
      throw new Error(`AI request failed: ${response.status}`);
    }

    const aiData = await response.json();
    let content = aiData.choices?.[0]?.message?.content || "";

    // Strip markdown code fences if present
    content = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();

    const parsed = JSON.parse(content);

    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching trending threats:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to fetch trending threats" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
