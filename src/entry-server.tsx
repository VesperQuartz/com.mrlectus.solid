// @refresh reload
import { createHandler, FetchEvent, StartServer } from "@solidjs/start/server";
import { createMemoryHistory } from "@tanstack/solid-router";
import { Hono } from "hono";
import { isServer } from "solid-js/web";
import { router } from "./router";

const app = new Hono().get("/", (c) => c.json({ hello: crypto.randomUUID() }));

if (isServer) {
	const ogFetch = globalThis.fetch;

	globalThis.fetch = (input, init) => {
		console.log("Hono");
		if (input instanceof URL || input instanceof Request)
			return ogFetch(input, init);
		return Promise.resolve(
			app.fetch(new Request(new URL(input, "http://localhost")), init),
		);
	};
}

const routerLoad = async (event: FetchEvent) => {
	const url = new URL(event.request.url);
	const path = url.href.replace(url.origin, "");

	router.update({
		history: createMemoryHistory({
			initialEntries: [path],
		}),
	});

	await router.load();
};

export default createHandler(
	() => (
		<StartServer
			document={({ assets, children, scripts }) => (
				<html lang="en">
					<head>
						<meta charset="utf-8" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
						<link rel="icon" href="/favicon.ico" />
						{assets}
					</head>
					<body>
						<div id="app">{children}</div>
						{scripts}
					</body>
				</html>
			)}
		/>
	),
	undefined,
	routerLoad,
);
