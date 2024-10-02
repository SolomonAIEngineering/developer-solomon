import type { Client } from "@v1/supabase/types";

import { startOfMonth } from "date-fns";
import { z } from "zod";

import { getMetricsQuery } from "@v1/dbes";

export function getRevenueTool({
  defaultValues,
  supabase,
  teamId,
}: {
  defaultValues: {
    from: string;
    to: string;
  };
  supabase: Client;
  teamId: string;
}) {
  return {
    description: "Get revenue",
    parameters: z.object({
      startDate: z.coerce
        .date()
        .describe("The start date of the revenue, in ISO-8601 format")
        .default(new Date(defaultValues.from)),
      endDate: z.coerce
        .date()
        .describe("The end date of the revenue, in ISO-8601 format")
        .default(new Date(defaultValues.to)),
      currency: z.string().describe("The currency for revenue").optional(),
    }),
    execute: async ({
      currency,
      startDate,
      endDate,
    }: {
      currency?: string;
      startDate: Date;
      endDate: Date;
    }) => {
      const data = await getMetricsQuery(supabase, {
        teamId,
        from: startOfMonth(new Date(startDate)).toISOString(),
        to: new Date(endDate).toISOString(),
        type: "revenue",
        currency,
      });

      if (!data) {
        return "No revenue data found";
      }

      return `Based on the period from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}, the current revenue is ${Intl.NumberFormat(
        "en-US",
        {
          style: "currency",
          currency: data.summary.currency,
        },
      ).format(data.summary.currentTotal)}`;
    },
  };
}
