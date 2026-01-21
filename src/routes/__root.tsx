import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/solid-router'
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools'
import TanStackQueryProvider from '../integrations/tanstack-query/provider.tsx'

import { HydrationScript } from 'solid-js/web'
import { Suspense } from 'solid-js'

import styleCss from '../globals.css?url'

export const Route = createRootRouteWithContext()({
  head: () => ({
    links: [{ rel: 'stylesheet', href: styleCss }],
  }),
  shellComponent: RootComponent,
})

function RootComponent() {
  return (
    <html>
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
  )
}
