"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippets/${id}`);
}

export { editSnippet };
