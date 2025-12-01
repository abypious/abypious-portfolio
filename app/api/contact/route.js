import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "abypious3@gmail.com",   
      subject: `New Message from ${name}`,
      html: `
        <div style="font-family:sans-serif;font-size:16px;padding:20px;">
          <h2>📩 New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    console.log(error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
