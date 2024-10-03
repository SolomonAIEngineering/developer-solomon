"use server";

import { updateUser } from "@v1/db/mutations";
import { revalidateTag } from "next/cache";
import { authActionClient } from "./safe-action";
import { updateUserSchema } from "./schema";

export const updateUserAction = authActionClient
  .schema(updateUserSchema)
  .metadata({
    name: "update-user",
  })
  .action(async ({ parsedInput: data, ctx: { user, supabase } }) => {
    await updateUser(supabase, data);

    if (data.full_name) {
      await supabase.auth.updateUser({
        data: { full_name: data.full_name },
      });
    }

    revalidateTag(`user_${user.id}`);

    return user;
  });
