import { NextResponse } from "next/server";

import { buildAdminEmail, buildCustomerEmail } from "@/lib/email-templates";

export const runtime = "nodejs";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

type ContactPayload = {
  name?: string;
  email?: string;
  type?: string;
  date?: string;
  location?: string;
  message?: string;
  website?: string;
};

function clean(value: unknown, maxLength = 2000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    if (clean(body.website)) return NextResponse.json({ ok: true });

    const data = {
      name: clean(body.name, 100),
      email: clean(body.email, 160).toLowerCase(),
      type: clean(body.type, 80),
      date: clean(body.date, 100),
      location: clean(body.location, 160),
      message: clean(body.message, 5000),
    };

    if (!data.name || !data.email || !data.message || !/^\S+@\S+\.\S+$/.test(data.email)) {
      return NextResponse.json({ error: "Completa nombre, email y mensaje correctamente." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.CONTACT_ADMIN_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!apiKey || !adminEmail || !from) {
      console.error("Faltan RESEND_API_KEY, CONTACT_ADMIN_EMAIL o RESEND_FROM_EMAIL.");
      return NextResponse.json({ error: "El servicio de contacto no está configurado todavía." }, { status: 503 });
    }

    const headers = { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" };
    const response = await Promise.all([
      fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers,
        body: JSON.stringify({ from, to: [adminEmail], reply_to: data.email, subject: `Nuevo brief de ${data.name}`, html: buildAdminEmail(data) }),
      }),
      fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers,
        body: JSON.stringify({ from, to: [data.email], subject: "Hemos recibido tu mensaje · Jomade Films", html: buildCustomerEmail(data) }),
      }),
    ]);

    if (response.some((item) => !item.ok)) {
      console.error("Resend error", await Promise.all(response.map((item) => item.text())));
      return NextResponse.json({ error: "No hemos podido enviar el mensaje. Inténtalo de nuevo." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json({ error: "No hemos podido procesar el mensaje." }, { status: 500 });
  }
}
