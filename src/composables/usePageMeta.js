const SITE_URL = "https://sharyarnaveed.vercel.app";
const DEFAULT_TITLE = "Sharyar Naveed, Web and Creative Developer";
const DEFAULT_DESCRIPTION =
  "Sharyar Naveed is a web and creative developer based in Pakistan. Building full stack web and mobile products with clean code, thoughtful design, and AI powered features.";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function applyPageMeta({ title, description, path = "/" } = {}) {
  const pageTitle = title || DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;

  document.title = pageTitle;

  upsertMeta("name", "description", pageDescription);
  upsertMeta("property", "og:title", pageTitle);
  upsertMeta("property", "og:description", pageDescription);
  upsertMeta("property", "og:url", url);
  upsertMeta("name", "twitter:title", pageTitle);
  upsertMeta("name", "twitter:description", pageDescription);
  upsertLink("canonical", url);
}

export { SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION };
