// app/api/subscribe/route.ts
import { NextResponse } from "next/server";
import { STRV_EN_LIST_ID, STRV_HU_LIST_ID } from "./const";

export async function POST(req: Request) {
  try {
    const { email, name, locale } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (typeof name !== "string") {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

    if (name.length < 1) {
      NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

    const names = name.split(" ");
    const firstName = names[0];
    const lastName = names.slice(1, names.length).join(" ");

    let listId: number

    if (locale === "hu") {
      listId = STRV_HU_LIST_ID
    } else {
      listId = STRV_EN_LIST_ID
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY || "",
        "accept": "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [Number(listId)],
        updateEnabled: true,
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: lastName,
        },
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return NextResponse.json({ error: "Brevo error", details: err }, { status: res.status });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 });
  }
}

// Optional: respond to GET requests so visiting /api/subscribe in browser works
export async function GET() {
  return NextResponse.json({ ok: true });
}