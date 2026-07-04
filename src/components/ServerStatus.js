const servers = [
  { name: 'Rust', status: 'En ligne', players: '42 / 100', host: 'rust.lowendnetwork.io', ip: 'play.rust.lowendnetwork.io' },
  { name: 'BeamNG.drive', status: 'En développement', players: '18 / 60', host: 'beamng.lowendnetwork.io', ip: 'play.beamng.lowendnetwork.io' },
  { name: "Garry's Mod", status: 'En ligne', players: '27 / 80', host: 'gmod.lowendnetwork.io', ip: 'play.gmod.lowendnetwork.io' },
  { name: 'FiveM', status: 'En ligne', players: '35 / 90', host: 'fivem.lowendnetwork.io', ip: 'play.fivem.lowendnetwork.io' },
  { name: 'Minecraft', status: 'En ligne', players: '20 / 70', host: 'mc.lowendnetwork.io', ip: 'play.mc.lowendnetwork.io' },
];

function serverCard(server) {
  const badgeClass = server.status === 'En ligne'
    ? 'border-vapor/20 bg-vapor/10 text-vapor'
    : 'border-white/10 bg-white/5 text-white/60';

  return `
    <article class="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-vapor/30 hover:bg-white/10">
      <div class="flex items-center justify-between gap-3">
        <h3 class="text-lg font-semibold text-white">${server.name}</h3>
        <span class="rounded-full border ${badgeClass} px-3 py-1 text-xs uppercase tracking-normal">${server.status}</span>
      </div>
      <p class="mt-5 text-sm text-white/60">${server.players} joueurs</p>
      <div class="mt-6 flex items-center justify-between gap-3">
        <div class="rounded-2xl bg-white/5 px-3 py-2 text-xs uppercase tracking-normal text-white/60">${server.host}</div>
        <button
          data-ip="${server.ip}"
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
  `;
}

export default function ServerStatus() {
  return `
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
        ${servers.map(serverCard).join('')}
      </div>
    </section>
  `;
}
