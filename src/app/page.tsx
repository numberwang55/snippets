import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map(snippet => {
    return (
      <div key={snippet.id}>
        <div>{snippet.title}</div>
        <div>{snippet.code}</div>
      </div>
    )
  })

  return (
    <div>{renderedSnippets}</div>
  );
}
