import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { questionTitle, questionDescription, language } = await req.json();

    const prompt = `
    You are a code generator.
    Write ONLY the function definition in ${language} for the problem:
    "${questionTitle}".
    Problem description: ${questionDescription}
    
    Rules:
    - Function name must be based on the problem title.
    - Parameters should be generic but meaningful (e.g., nums1, nums2, l1, l2).
    - Include a single comment "// Your code here" inside the body.
    - Do NOT include explanations, imports, test cases, extra text, or markdown formatting.
    - Output ONLY raw code, no backticks.
    `;
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You generate starter code for coding challenges." },
        { role: "user", content: prompt }
      ],
      temperature: 0,
    });

    const code = completion.choices[0].message.content || "";
    return NextResponse.json({ code });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
