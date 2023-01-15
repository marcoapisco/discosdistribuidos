import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { T as Typewriter } from "../../../chunks/Typewriter.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Discos Distribuídos</p>
${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "loopRandom" }, {}, {
    default: () => {
      return `<h2>Ajudamos artistas a começar na indústria</h2>
    <h2>Ajudamos artistas com o seu marketing</h2>
    <h2>Ajudamos artistas a publicar os seus primeiro discos</h2>
    <h2>Publicamos músicas de artistas no Spotify™, Apple Music™, e muitos mais...</h2>`;
    }
  })}

<p>Somos uma editora de discos, que tem na ideia ajudar artistas para conseguirem ter sucesso no seu futuro</p>
<p>A nossa missão é ajudar artistas que estão a começar para proceder com uma carreira</p>
${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "scramble" }, {}, {
    default: () => {
      return `<h1>Como é que o fazemos?</h1>`;
    }
  })}
<p>Os nossos serviços são <b>baratos</b></p>
<p>Cobramos apenas <b>1€</b> por canção (os nossos competidores normalmente cobram 2€) devido a apenas ser esse o preço que a nossa distribuidora nos cobra por canções</p>

${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "scramble" }, {}, {
    default: () => {
      return `<h1>Os nossos artistas</h1>`;
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
