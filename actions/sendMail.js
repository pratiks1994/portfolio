"use server";

import { Resend } from "resend";
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (formData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");
    let data;
    try {
        data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "pratiksavaliya071994@gmail.com",
            reply_to: senderEmail,
            subject: "inquiry",
            html: `<p>${message}</p>`,
        });

        return { data };
    } catch (error) {
        return {
            error,
        };
    }
};
