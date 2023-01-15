import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { T as Typewriter } from "../../../../chunks/Typewriter.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "loopRandom" }, {}, {
    default: () => {
      return `<h1>Vamos começar!</h1>
    <h1>Qual é a sua ideia?</h1>
    <h1>A sua primeira música... vamos começar</h1>
    <h1>Vamos trabalhar!</h1>
    <h1>Olá! Vamos conversar!</h1>`;
    }
  })}

<p>Estamos disponíveis para convesar via:</p>
${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "loop" }, {}, {
    default: () => {
      return `<a href="${"https://instagram.com/discosdistribuidos"}">Instagram</a>
    <a href="${"mailto:info@discosdistribuidos.pt"}">info@discosdistribuidos.pt (email)</a>`;
    }
  })}`;
});
export {
  Page as default
};
