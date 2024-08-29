import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { firstname, lastname, email, subject, message } = await request.json();

  const payload = {
    content: '**New Contact Form Submission**',
    embeds: [
      {
        fields: [
          { name: 'Name', value: `${firstname} ${lastname}`, inline: true },
          { name: 'Email', value: email, inline: true },
          { name: 'Subject', value: subject },
          { name: 'Message', value: message },
        ],
        footer: { text: 'Health Sync - Contact Form' },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    const response = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok)
      throw new Error(`Discord API error: ${response.statusText}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 },
    );
  }
}
