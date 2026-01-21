import { createFileRoute } from '@tanstack/solid-router'
import { Button } from "../components/ui/button"

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div class="">Hello <Button>Click</Button></div>
  )
}
