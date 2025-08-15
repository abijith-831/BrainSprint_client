import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an AI that generates JSON test cases for coding problems.",
        },
        {
          role: "user",
          content: `Generate 3 test cases for this problem:\n${question}\nOutput only valid JSON.`,
        },
      ],
      temperature: 0,
    });

    const testCases = completion.choices[0].message?.content || "";
    return NextResponse.json({ testCases });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
