import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,     // teu Gmail (ex: marco@gmail.com)
      pass: process.env.EMAIL_PASS,     // palavra-passe de app
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,            // ← remetente visível será o que o utilizador colocou
      to: process.env.EMAIL_USER,              // ← destinatário (tu)
      subject: subject,
      text: message,
      html: `
        <h2>Mensagem de ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Erro ao enviar email:', err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
