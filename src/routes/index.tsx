import { createFileRoute } from "@tanstack/solid-router";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main class="">
			<Button variant={"secondary"} class="">
				Hello
			</Button>
		</main>
	);
}
