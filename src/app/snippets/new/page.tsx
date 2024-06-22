import { redirect } from "next/navigation";
import { db } from "@/db";

export default function SnippetsCreatePage() {
  async function createSnippet(formData: FormData) {
    // Needs to be a server action
    "use server";

    // checks user's input to make sure it is valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
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

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Code Snippet!</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
