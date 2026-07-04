export default function Hero() {
  return `
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
  `;
}
