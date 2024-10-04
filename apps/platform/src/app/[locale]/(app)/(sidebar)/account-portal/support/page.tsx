import { SupportForm } from "@/components/support-form";
import config from "@/config";
import { getUser } from "@v1/db/cached-queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Support | ${config.company}`,
};

export default async function Support() {
  const { data: userData } = await getUser();

  return (
    <div className="space-y-12">
      <div className="max-w-[450px]">
        <SupportForm
          email={userData.email}
          avatarUrl={userData.avatar_url}
          fullName={userData.full_name}
          teamName={userData.team.name}
        />
      </div>
    </div>
  );
}
