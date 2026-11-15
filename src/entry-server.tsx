import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppShell } from "./App";
import { getPageMeta, ALL_ROUTES, SITE_URL } from "./config/seo";

export { getPageMeta, ALL_ROUTES, SITE_URL };

export const render = (url: string) =>
  renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>,
  );
