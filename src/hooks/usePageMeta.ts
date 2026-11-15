import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageMeta, SITE_URL } from "@/config/seo";

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

/**
 * Keeps <title>, description, canonical and Open Graph tags in sync when
 * visitors click between pages. The pre-rendered HTML already has the right
 * tags for search engines; this just handles in-app navigation.
 */
export const usePageMeta = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = getPageMeta(pathname);
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/+$/, "")}`;
    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('link[rel="canonical"]', "href", url);
  }, [pathname]);
};
