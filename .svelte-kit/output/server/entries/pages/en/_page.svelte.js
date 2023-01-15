import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { T as Typewriter } from "../../../chunks/Typewriter.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Discos Distribuídos</p>
${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "loopRandom" }, {}, {
    default: () => {
      return `<h2>We help artists get started in the music industry</h2>
    <h2>We help artists with their marketing</h2>
    <h2>We help artists publish their first albums</h2>
    <h2>We publish Artist&#39;s songs to Spotify™, Apple Music™, and many more</h2>`;
    }
  })}

<p>We&#39;re a label, whos objective is to help artists get started with their carrer </p>
<p>Our mission is to help everyone get started</p>
${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "scramble" }, {}, {
    default: () => {
      return `<h1>How do we do it?</h1>`;
    }
  })}
<p>Our services are <b>cheap</b></p>
<p>We charge only <b>1€</b> per song (our competitors charge 2€) due to that being what our distributor charges us per song</p>

${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "scramble" }, {}, {
    default: () => {
      return `<h1>Our artists</h1>`;
    }
  })}
${validate_component(Typewriter, "Typewriter").$$render(
    $$result,
    {
      mode: "loopRandom",
      unwriteInterval: "100",
      wordInterval: "1500"
    },
    {},
    {
      default: () => {
        return `<h2><a href="${"https://youtube.com/@KingDripMusic"}">King Drip</a></h2>
    <h2><a href="${"https://youtube.com/@TheDemise"}">The Demise</a></h2>
    <h2><a href="${"https://youtube.com/@osguitarristas"}">Os Guitarristas</a></h2>
    <h2><a href="${"https://www.youtube.com/@coversgabitiger7845"}">King Drip</a></h2>
    <h2><a href="${"https://www.youtube.com/channel/UCD2crgL5sEiwn6lysGyQdTA"}">A Antiga Turma do Oitavo Ano</a></h2>`;
      }
    }
  )}

<p>(C) 2023 <a href="${"https://marcopisco.com/"}">Marco Pisco</a>, Discos Distribuídos</p>`;
});
export {
  Page as default
};
