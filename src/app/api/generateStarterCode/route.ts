import { NextResponse } from "next/server";
import OpenAI from "openai";

// Check if API key exists before initializing OpenAI
const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("OPENAI_API_KEY environment variable is not set");
}

const openai = apiKey ? new OpenAI({ apiKey }) : null;

export async function POST(req: Request) {
  try {
    // Check if OpenAI client is available
    if (!openai) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured" }, 
        { status: 500 }
      );
    }

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
    console.error("Error in generateStarterCode:", error);
    
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}