interface SnippetEditPageProps {
  params: {
    id: string
  }
}

export default function SnippetEditPage(props: SnippetEditPageProps) {
  const id = +props.params.id

  return (
    <div>
      Editing snippet with id {id}
    </div>
  )
}