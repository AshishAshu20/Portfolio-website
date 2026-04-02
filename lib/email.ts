import emailjs from '@emailjs/browser';

export const sendEmails = async ({
    name,
    email,
    subject,
    message,
}: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) => {
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ADMIN = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN!;
    const TEMPLATE_USER = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER!;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ADMIN,
        {
            user_name: name,
            user_email: email,
            subject,
            message,
        },
        PUBLIC_KEY
    );

    await emailjs.send(
        SERVICE_ID,
        TEMPLATE_USER,
        {
            user_name: name,
            user_email: email,
            message,
        },
        PUBLIC_KEY
    );
};