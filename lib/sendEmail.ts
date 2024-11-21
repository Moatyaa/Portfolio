'use server'
import { Resend } from "resend";
import { getError, validateForm } from "@/lib/validateForm";
import ContactEmail from "@/components/Email";
import React from "react";

// Initialize Resend service with environment variable
const resend = new Resend(process.env["RESEND_API_KEY"]);

export const sendEmail = async (formDate: FormData) => {
    const senderEmail = formDate.get('senderEmail')?.toString() ?? '';
    const message = formDate.get('message')?.toString() ?? '';
    // Validate email and message
    if (!validateForm(senderEmail)) {
        return {
            error: 'Invalid email address',
        };
    }
    if (!validateForm(message)) {
        return {
            error: 'Invalid message content',
        };
    }

    try {
        // Send email using Resend API
        const data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",  // Use your email for testing
            to: "muhammadatyaa66@gmail.com",  // Also send it to your own address
            subject: "Message from contact form",
            react: React.createElement(ContactEmail, {
                message: message,
                senderEmail: senderEmail,
            }),
        });

        // Return successful data
        return {
            data,
            isLoading: false
        };

    } catch (err: unknown) {
        // Catch any errors and return the error message
        return {
            error: getError(err),
            isLoading: false
        };
    }
};
