import { NextResponse } from "next/server";
import supabase from "../client";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "A valid Email is required" },
      { status: 400 }
    );
  }

  const { data: existing, error: selectError } = await supabase
    .from("subscription")
    .select("id")
    .eq("email", email)
    .single();

    if (existing) {
    return NextResponse.json(
      { error: "This email is already subscribed." },
      { status: 409 }
    );
  }


  const { error } = await supabase.from("subscription").insert([{ email }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(
    { message: "Successfully subscribed to newsletter" },
    { status: 200 }
  );
}
