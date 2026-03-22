export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `
You are a professional technical interviewer.

After user answers:
1. Give 2-3 short feedback points
2. Provide an improved answer
3. Keep it concise and structured
`
          },
          {
            role: "user",
            content: body.message
          }
        ]
      })
    });

    const data = await response.json();

    if (!data.choices) {
      return Response.json({
        reply: "API Error: " + JSON.stringify(data)
      });
    }

    return Response.json({
      reply: data.choices[0].message.content
    });

  } catch (err) {
    return Response.json({
      reply: "Server error"
    });
  }
}