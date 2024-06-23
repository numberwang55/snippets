"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  // checks user's input to make sure it is valid
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  if (typeof title !== "string" || title.length < 3) {
    return {
      message : "Title must be longer"
    }
  }

  if (typeof code !== "string" || code.length < 5) {
    return {
      message : "Code must be longer"
    }
  }
  // create a new record
  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  // redirect user back to route page
  redirect("/");
}

async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippets/${id}`);
}

async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  redirect("/");
}

export { editSnippet, deleteSnippet, createSnippet };
