import { g as getContext, a as attr, b as attr_class, e as ensure_array_like, s as store_get, c as escape_html, u as unsubscribe_stores, d as stringify, f as slot } from "../../chunks/renderer.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/url.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/exports.js";
import "../../chunks/state.svelte.js";
import { b as base } from "../../chunks/server.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let menuOpen = false;
    const navLinks = [
      { href: `${base}/`, label: "Home" },
      { href: `${base}/educazione-civica`, label: "Ed. Civica" },
      { href: `${base}/chi-sono`, label: "Chi sono" }
    ];
    $$renderer2.push(`<nav class="navbar svelte-rfuq4y"><div class="container nav-inner svelte-rfuq4y"><a${attr("href", `${stringify(base)}/`)} class="logo svelte-rfuq4y"><span class="logo-icon svelte-rfuq4y">◈</span> <span class="logo-text svelte-rfuq4y">Il Mio Portfolio</span></a> <button class="hamburger svelte-rfuq4y" aria-label="Menu"><span${attr_class("svelte-rfuq4y", void 0, { "open": menuOpen })}></span></button> <ul${attr_class("nav-links svelte-rfuq4y", void 0, { "open": menuOpen })}><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", link.href)}${attr_class("svelte-rfuq4y", void 0, {
        "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === link.href
      })}>${escape_html(link.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></nav>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer) {
  $$renderer.push(`<footer class="svelte-jz8lnl"><div class="container footer-inner svelte-jz8lnl"><p class="footer-brand svelte-jz8lnl">◈ Portfolio Scolastico</p> <p class="footer-copy svelte-jz8lnl">Anno Scolastico 2025–2026</p></div></footer>`);
}
function _layout($$renderer, $$props) {
  Navbar($$renderer);
  $$renderer.push(`<!----> <main class="svelte-12qhfyh"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _layout as default
};
