import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview> New message from Adolfsson Digital website</Preview>
      <Tailwind>
        <body className="text-black bg-slate-700">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                {" "}
                You recived the following message
              </Heading>
              <Hr />
              <Text>{message}</Text>
              <Hr />
              <text> Sent from: {senderEmail} </text>
            </Section>
          </Container>
        </body>
      </Tailwind>
    </Html>
  );
}
