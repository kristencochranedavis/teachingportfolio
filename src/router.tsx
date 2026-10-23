import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { Nav } from "./components/Nav";
import { useLang, useT } from "./i18n/lang";
import { useBalancedColumns } from "./lib/balance";
import { useGalleryMotion } from "./lib/gallery-motion";
import { isMotionEnabled } from "./lib/motion";
import { SmoothScroll } from "./lib/scroll";
import { isCovered } from "./lib/sweep";
import { useWallDriver } from "./lib/wall-driver";
import { Home } from "./routes/Home";
import { NotFound } from "./routes/NotFound";
import { ResourcePage } from "./routes/ResourcePage";
import { Room } from "./routes/Room";

function Layout() {
  const t = useT();
  const lang = useLang();
  useWallDriver();
  useGalleryMotion();
  useBalancedColumns();
  return (
    <SmoothScroll>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        {/* A language switch re-mounts the page: split headlines and pinned walls are
            rebuilt in the new language instead of patched in place. */}
        <div key={lang} className="lang-root">
          <Outlet />
        </div>
      </main>
    </SmoothScroll>
  );
}

const rootRoute = createRootRoute({ component: Layout, notFoundComponent: NotFound });

const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: "/", component: Home });

const roomRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/rooms/$n",
  component: function RoomRoute() {
    const { n } = roomRoute.useParams();
    return <Room n={n} />;
  },
});

const resourceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reading-room/$code",
  component: function ResourceRoute() {
    const { code } = resourceRoute.useParams();
    return <ResourcePage code={code} />;
  },
});

const routeTree = rootRoute.addChildren([homeRoute, roomRoute, resourceRoute]);

/**
 * Browser back/forward: a short version of the colour sweep, as a view transition
 * (styles/transitions.css: the new page wipes in from the left over the old one).
 * In-site links already sweep under their own cover (sweep.ts), so they're skipped
 * here, as are the first load, motion off, and browsers without view-transition types
 * (those just cut).
 */
function historyWipe() {
  const typed =
    typeof document.startViewTransition === "function" &&
    typeof CSS !== "undefined" &&
    CSS.supports("selector(:active-view-transition-type(a))");
  return typed
    ? {
        types: ({ fromLocation, pathChanged }: { fromLocation?: unknown; pathChanged: boolean }) =>
          fromLocation && pathChanged && !isCovered() && isMotionEnabled() ? ["history"] : (false as const),
      }
    : false;
}

export const router = createRouter({
  routeTree,
  scrollRestoration: true,
  defaultNotFoundComponent: NotFound,
  defaultViewTransition: historyWipe(),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
