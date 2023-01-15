import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../chunks/index.js";
import { T as Typewriter } from "../../chunks/Typewriter.js";
let portugueseflag = "/portuguese.png";
let usaflag = "/usa.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "loopRandom" }, {}, {
    default: () => {
      return `<p>Welcome to Discos Distribuídos</p>
    <p>Bem vindo à Discos Distribuídos</p>
    <p>Bienvenido a Discos Distribuídos</p>
    <p>Willkommen bei Discos Distribuídos</p>
    <p>Bienvenue à Discos Distribuídos</p>`;
    }
  })}

<p>Select your language:</p>
<div class="${"language"}"><div class="${"flag"}"><img${add_attribute("src", portugueseflag, 0)} style="${"width: 5em"}" alt="${"Português or Portuguese"}"></div>
    <div class="${"languageextense"}"><a href="${"/pt/"}">Português</a></div></div>
<p>‌</p>
<div class="${"language"}"><div class="${"flag"}"><img${add_attribute("src", usaflag, 0)} style="${"width: 5em"}" alt="${"English or Inglês"}"></div>
    <div class="${"languageextense"}"><a href="${"/en/"}">English</a></div></div>`;
});
export {
  Page as default
};
