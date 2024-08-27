import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { firstname, lastname, email, subject, message } = await request.json();

    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL!; // Store your Discord Webhook URL in .env

    // Constructing a rich Discord embed message
    const payload = {
        content: `**New Contact Form Submission**`,
        embeds: [
            {
                fields: [
                    {
                        name: "Name",
                        value: `${firstname} ${lastname}`,
                        inline: true,
                    },
                    {
                        name: "Email",
                        value: email,
                        inline: true,
                    },
                    {
                        name: "Subject",
                        value: subject,
                        inline: false,
                    },
                    {
                        name: "Message",
                        value: message,
                        inline: false,
                    },
                ],
                footer: {
                    text: "Health Sync - Contact Form",
                },
                timestamp: new Date().toISOString(), // Adds a timestamp to the embed
            },
        ],
    };

    try {
        const response = await fetch(discordWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Error sending message to Discord: ${response.statusText}`);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        let errorMessage = 'An unknown error occurred.';
        // Type guard to check if error is an instance of Error
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        console.error(errorMessage);
        return NextResponse.json({ success: false, error: errorMessage });
    }
}
