import { NextRequest, NextResponse } from "next/server";

export default function handler(req: NextRequest) {
  return NextResponse.json({ message: "Hello World" });
}