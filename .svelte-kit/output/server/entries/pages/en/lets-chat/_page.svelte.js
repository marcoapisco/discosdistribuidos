import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { T as Typewriter } from "../../../../chunks/Typewriter.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "loopRandom" }, {}, {
    default: () => {
      return `<h1>Let&#39;s get started!</h1>
    <h1>What&#39;s your idea?</h1>
    <h1>Your first song... let&#39;s get started...</h1>
    <h1>Let&#39;s work together!</h1>
    <h1>Hi! Let&#39;s chat.</h1>`;
    }
  })}

<p>We&#39;re available to chat via:</p>
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
