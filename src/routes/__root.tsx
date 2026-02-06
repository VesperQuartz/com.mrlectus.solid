import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import { Suspense } from "solid-js";

import { HydrationScript } from "solid-js/web";
import styleCss from "../globals.css?url";
import TanStackQueryProvider from "../integrations/tanstack-query/provider.tsx";

export const Route = createRootRouteWithContext()({
	head: () => ({
		links: [{ rel: "stylesheet", href: styleCss }],
	}),
	shellComponent: RootComponent,
});

function RootComponent() {
	return (
		<html lang="en">
			<head>
				<HydrationScript />
			</head>
			<body>
				<HeadContent />
				<Suspense>
					<TanStackQueryProvider>
						<Outlet />
						<TanStackRouterDevtools position="bottom-left" />
					</TanStackQueryProvider>
				</Suspense>
				<Scripts />
			</body>
		</html>
	);
}
