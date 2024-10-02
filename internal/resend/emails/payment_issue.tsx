"use client";

import React from "react";

import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Link } from "@react-email/link";
import { Section } from "@react-email/section";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";

import tailwindConfig from "@v1/ui/tailwind.config.ts";

export type Props = {
  username: string;
  date: string;
};

export function PaymentIssue({ username, date }: Props) {
  return (
    <Tailwind config={tailwindConfig}>
      <Html className="font-sans text-zinc-800">
        <Head />
        <Section className="bg-white">
          <Container className="container mx-auto">
            <Heading className="font-sans text-2xl text-semibold">
              There was an issue with your payment.
            </Heading>
            <Text>Hey {username},</Text>
            <Text>
              We had trouble processing your payment on {date}. Please update
              your payment information below to prevent your account from being
              downgraded.
            </Text>

            <Container className="flex items-center justify-center my-8">
              <Button
                href="https://app-business.solomon-ai.app/app/settings/billing/stripe"
                className="px-4 py-2 text-white bg-black rounded"
              >
                Update payment information
              </Button>
            </Container>

            <Hr />
            <Text>
              Need help? Please reach out to{" "}
              <Link href="mailto:support@inbox.solomon-ai.app">
                support@inbox.solomon-ai.app
              </Link>{" "}
              or just reply to this email.
            </Text>

            <Text>
              Cheers,
              <br />
              Andreas
            </Text>
          </Container>
        </Section>
      </Html>
    </Tailwind>
  );
}

PaymentIssue.PreviewProps = {
  username: "Mr. Pilkington",
  date: "2024 03 08",
} satisfies Props;

export default PaymentIssue;
