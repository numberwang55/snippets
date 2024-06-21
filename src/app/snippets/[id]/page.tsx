import { notFound } from "next/navigation";
import { db } from "@/db";
import Link from "next/link";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}
export default async function SnippetShowPage(props: SnippetShowPageProps) {
  await new Promise((r) => setTimeout(r, 2000));

  const snippet = await db.snippet.findFirst({
    where: {
      id: +props.params.id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link className="p-2 border rounded" href={`/snippets/${snippet.id}/edit`}>Edit</Link>
          <Link className="p-2 border rounded" href={`/snippets/${snippet.id}/delete`}>Delete</Link>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
