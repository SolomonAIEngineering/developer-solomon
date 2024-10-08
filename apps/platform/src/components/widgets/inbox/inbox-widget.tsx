import { CopyInput } from "@/components/copy-input";
import { getInboxEmail } from "@v1/inbox";
import { getUser } from "@v1/db/cached-queries";
import { getInboxQuery } from "@v1/db/queries";
import { createClient } from "@v1/db/server";
import { inboxData } from "./data";
import { InboxList } from "./inbox-list";

export async function InboxWidget({ filter, disabled }) {
  const user = await getUser();
  const supabase = createClient();

  const { data } = disabled
    ? inboxData
    : await getInboxQuery(supabase, {
        to: 15,
        from: 0,
        teamId: user.data.team_id,
        done: filter === "done",
        todo: filter === "todo",
      });

  if (!data?.length) {
    return (
      <div className="flex flex-col space-y-4 items-center justify-center h-full text-center">
        <div>
          <CopyInput value={getInboxEmail(user?.data?.team?.inbox_id)} />
        </div>

        <p className="text-sm text-[#606060]">
          Use this email for online purchases to seamlessly
          <br />
          match invoices againsts transactions.
        </p>
      </div>
    );
  }

  return <InboxList data={data} />;
}
