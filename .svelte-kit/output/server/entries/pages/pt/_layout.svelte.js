import { c as create_ssr_component } from "../../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"text"}"><h4><a href="${"/pt/"}">Principal</a> | <a href="${"/pt/fale-conosco"}">Fale Conosco</a> | <a href="${"/"}">🌎</a></h4></div>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
