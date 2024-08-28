"use server";

import ContactFormEmail from "../email/contact-form-email";
import { Resend } from "resend";
import { validateString } from "../lib/utilities";
import { getErrorMessage } from "../lib/utilities";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
  console.log("running on server");
  console.log(FormData.get("senderEmail"));
  console.log(FormData.get("message"));
  const senderEmail = FormData.get("senderEmail");
  const message = FormData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Kontaktformulär <onboarding@resend.dev>",
      to: "james@adolfssondigital.com",
      subject: "New message from customer via adolfssondigital.com",
      reply_to: senderEmail as string,
      //text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
