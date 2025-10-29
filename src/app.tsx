import { RouterProvider } from "@tanstack/solid-router";
import { router } from "./router";

import "./global.css";

export default function App() {
	return <RouterProvider router={router} />;
}
