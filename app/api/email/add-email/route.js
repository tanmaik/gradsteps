import prisma from "@/lib/prisma";

export async function POST(req, res) {
  const { email } = await req.json();

  try {
    await prisma.user_emails.create({
      data: {
        email,
      },
    });

    return new Response({
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response({
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
