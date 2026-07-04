(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function a(){return`
    <header class="border-b border-white/10">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 sm:px-8">
        <a href="#top" class="text-sm font-semibold tracking-normal text-white/90 uppercase">lowendnetwork</a>
        <nav class="hidden items-center gap-8 text-sm text-smoke md:flex">
          <a href="#servers" class="transition hover:text-white">Serveurs</a>
          <a href="#infra" class="transition hover:text-white">Infra</a>
          <a href="#discord" class="transition hover:text-white">Discord</a>
        </nav>
        <a
          href="#discord"
          class="rounded-full border border-vapor/20 bg-white/5 px-4 py-2 text-sm text-vapor transition hover:border-vapor hover:text-white"
          >Rejoindre</a
        >
      </div>
    </header>
  `}function l(){return`
    <section class="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center" id="top">
      <div class="space-y-8">
        <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-normal text-white/70">
          <span class="h-2 w-2 rounded-full bg-vapor shadow-glow"></span>
          Réseau de serveurs communautaires pour jeux PC
        </div>
        <div class="space-y-6">
          <h1 class="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Hébergement de communautés Rust, BeamNG.drive, Garry's Mod, FiveM et Minecraft.
          </h1>
          <p class="max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
            lowendnetwork offre un environnement stable pour vos communautés de serveurs, avec monitoring, protection et localisations optimisées.
          </p>
        </div>
        <div class="flex flex-col gap-4 sm:flex-row">
          <a
            href="#discord"
            class="inline-flex items-center justify-center rounded-full bg-vapor px-5 py-3 text-sm font-semibold text-white transition hover:bg-vapor-soft"
            >Rejoindre le Discord</a
          >
          <a
            href="#servers"
            class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/90 transition hover:border-vapor hover:text-vapor"
            >Explorer les serveurs</a
          >
        </div>
      </div>

      <div class="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow sm:p-8">
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="text-xs uppercase tracking-normal text-white/50">Statut réseau</p>
            <p class="text-2xl font-semibold text-white">Infra stable 24/7</p>
          </div>
          <div class="rounded-2xl border border-vapor/20 bg-vapor/10 px-3 py-2 text-xs uppercase tracking-normal text-vapor">Bêta technique</div>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-3xl border border-white/10 bg-onyx/80 p-4">
            <p class="text-xs uppercase tracking-normal text-white/50">Ping cible</p>
            <p class="mt-3 text-3xl font-semibold text-white"><span class="text-vapor">12</span> ms</p>
          </div>
          <div class="rounded-3xl border border-white/10 bg-onyx/80 p-4">
            <p class="text-xs uppercase tracking-normal text-white/50">Serveurs actifs</p>
            <p class="mt-3 text-3xl font-semibold text-white">5 / 5</p>
          </div>
          <div class="rounded-3xl border border-white/10 bg-onyx/80 p-4">
            <p class="text-xs uppercase tracking-normal text-white/50">Communautés actives</p>
            <p class="mt-3 text-3xl font-semibold text-white">142</p>
          </div>
          <div class="rounded-3xl border border-white/10 bg-onyx/80 p-4">
            <p class="text-xs uppercase tracking-normal text-white/50">Protection</p>
            <p class="mt-3 text-3xl font-semibold text-white">DDoS Premium</p>
          </div>
        </div>
      </div>
    </section>
  `}const d=[{name:"Rust",status:"En ligne",players:"42 / 100",host:"rust.lowendnetwork.io",ip:"play.rust.lowendnetwork.io"},{name:"BeamNG.drive",status:"En développement",players:"18 / 60",host:"beamng.lowendnetwork.io",ip:"play.beamng.lowendnetwork.io"},{name:"Garry's Mod",status:"En ligne",players:"27 / 80",host:"gmod.lowendnetwork.io",ip:"play.gmod.lowendnetwork.io"},{name:"FiveM",status:"En ligne",players:"35 / 90",host:"fivem.lowendnetwork.io",ip:"play.fivem.lowendnetwork.io"},{name:"Minecraft",status:"En ligne",players:"20 / 70",host:"mc.lowendnetwork.io",ip:"play.mc.lowendnetwork.io"}];function c(e){const s=e.status==="En ligne"?"border-vapor/20 bg-vapor/10 text-vapor":"border-white/10 bg-white/5 text-white/60";return`
    <article class="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-vapor/30 hover:bg-white/10">
      <div class="flex items-center justify-between gap-3">
        <h3 class="text-lg font-semibold text-white">${e.name}</h3>
        <span class="rounded-full border ${s} px-3 py-1 text-xs uppercase tracking-normal">${e.status}</span>
      </div>
      <p class="mt-5 text-sm text-white/60">${e.players} joueurs</p>
      <div class="mt-6 flex items-center justify-between gap-3">
        <div class="rounded-2xl bg-white/5 px-3 py-2 text-xs uppercase tracking-normal text-white/60">${e.host}</div>
        <button
          data-ip="${e.ip}"
          class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-normal text-white/80 transition hover:border-vapor hover:text-vapor"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
            <path d="M8 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="8" y="3" width="13" height="13" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
          Copier l'IP
        </button>
      </div>
    </article>
  `}function p(){return`
    <section id="servers" class="mt-20 space-y-8">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm uppercase tracking-normal text-white/50">Serveurs</p>
          <h2 class="mt-3 text-3xl font-semibold text-white sm:text-4xl">Etat des communautés par jeu</h2>
        </div>
        <p class="max-w-xl text-sm text-white/60 sm:text-right">
          Chaque instance héberge une communauté, avec optimisation des ressources et suivi permanent.
        </p>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        ${d.map(c).join("")}
      </div>
    </section>
  `}const u=[{title:"Matériel dédié",description:"Processeurs récents, mémoire haute fréquence et stockage NVMe pour un hébergement stable des communautés.",icon:"server"},{title:"Hébergement localisé",description:"Points de présence alignés sur les communautés européennes pour une latence maîtrisée.",icon:"map-pin"},{title:"Protection Anti-DDoS",description:"Filtration en amont et mitigation automatique pour garder les serveurs accessibles.",icon:"shield"}];function x(e){return{server:'<path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M12 18v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',"map-pin":'<path d="M12 21s5-4.5 5-9a5 5 0 1 0-10 0c0 4.5 5 9 5 9z" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="11" r="2" fill="currentColor"/>',shield:'<path d="M12 3l8 4v5c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V7l8-4z" stroke="currentColor" stroke-width="2" fill="none"/>'}[e]||""}function m(){return`
    <section id="infra" class="mt-20 rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-10">
      <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div class="space-y-4">
          <p class="text-sm uppercase tracking-normal text-white/50">Specs / Infra</p>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">
            Infrastructure pensée pour les communautés et l'hébergement de serveurs.
          </h2>
          <p class="max-w-xl text-sm text-white/60 sm:text-base">
            lowendnetwork repose sur du matériel dédié, un monitoring permanent et des points de présence localisés pour garantir un service stable, performant et sécurisé.
          </p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          ${u.map(e=>`
            <article class="rounded-3xl border border-white/10 bg-onyx/80 p-5">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-vapor">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-current">${x(e.icon)}</svg>
              </div>
              <h3 class="mt-5 text-lg font-semibold text-white">${e.title}</h3>
              <p class="mt-3 text-sm leading-6 text-white/60">${e.description}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `}function h(){return`
    <section id="discord" class="mt-20 rounded-3xl border border-vapor/15 bg-white/5 px-6 py-10 text-center sm:px-10">
      <p class="text-sm uppercase tracking-normal text-white/50">Communauté</p>
      <h2 class="mt-4 text-3xl font-semibold text-white">Rejoins notre Discord et structure ta communauté.</h2>
      <p class="mx-auto mt-4 max-w-2xl text-sm text-white/60 sm:text-base">
        Bêta, annonces de capacité, support direct et accès anticipé aux nouvelles configurations de serveurs communautaires.
      </p>
      <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="https://discord.gg/"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center justify-center rounded-full bg-vapor px-6 py-3 text-sm font-semibold text-white transition hover:bg-vapor-soft"
        >Accéder au Discord</a
        >
        <a
          href="#servers"
          class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/80 transition hover:border-vapor hover:text-vapor"
        >Voir les serveurs</a
        >
      </div>
    </section>
  `}function w(){return`
    <footer class="border-t border-white/10 bg-onyx/90 px-6 py-8 text-sm text-white/50 sm:px-8">
      <div class="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 lowendnetwork. Tous droits réservés.</p>
        <div class="flex flex-wrap items-center gap-4">
          <a href="#infra" class="transition hover:text-white">Mentions</a>
          <a href="https://discord.gg/" target="_blank" rel="noreferrer" class="transition hover:text-white">Discord</a>
        </div>
      </div>
    </footer>
  `}function v(){return`
    <div class="min-h-screen">
      ${a()}
      <main class="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16">
        ${l()}
        ${p()}
        ${m()}
        ${h()}
      </main>
    </div>
    ${w()}
    <div id="toast" class="pointer-events-none fixed bottom-6 right-6 hidden rounded-2xl border border-vapor/30 bg-onyx/95 px-4 py-3 text-sm text-white shadow-glow" aria-live="polite"></div>
  `}function f(e){document.querySelectorAll("button[data-ip]").forEach(i=>{i.addEventListener("click",async()=>{const o=i.getAttribute("data-ip");if(o)try{await navigator.clipboard.writeText(o),e.show(`IP copiée : ${o}`)}catch{e.show("Impossible de copier l'IP.")}})})}function g(){const e=document.getElementById("toast");if(e)return{show(s){e.textContent=s,e.classList.remove("hidden"),window.clearTimeout(window.toastTimer),window.toastTimer=window.setTimeout(()=>e.classList.add("hidden"),2200)}}}const b=document.getElementById("app");b.innerHTML=v();const y=g();f(y);
