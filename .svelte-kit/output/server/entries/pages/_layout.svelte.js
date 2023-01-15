import { c as create_ssr_component, b as add_attribute } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".nav.svelte-1jgbw1v{display:flex;align-items:center;justify-content:center\n    }img.svelte-1jgbw1v{width:40%}.text.svelte-1jgbw1v{font-size:20px}",
  map: null
};
let src = "/logo.jpg";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav><div class="${"nav svelte-1jgbw1v"}"><div class="${"logo"}"><img${add_attribute("src", src, 0)} alt="${"Logo"}" class="${"svelte-1jgbw1v"}"></div>
        <div class="${"text svelte-1jgbw1v"}"><p>Discos Distribuídos</p></div></div></nav>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
