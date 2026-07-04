const infraItems = [
  {
    title: 'Matériel dédié',
    description: 'Processeurs récents, mémoire haute fréquence et stockage NVMe pour un hébergement stable des communautés.',
    icon: 'server',
  },
  {
    title: 'Hébergement localisé',
    description: 'Points de présence alignés sur les communautés européennes pour une latence maîtrisée.',
    icon: 'map-pin',
  },
  {
    title: 'Protection Anti-DDoS',
    description: 'Filtration en amont et mitigation automatique pour garder les serveurs accessibles.',
    icon: 'shield',
  },
];

function iconSvg(type) {
  const icons = {
    server: '<path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M12 18v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    'map-pin': '<path d="M12 21s5-4.5 5-9a5 5 0 1 0-10 0c0 4.5 5 9 5 9z" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="11" r="2" fill="currentColor"/>',
    shield: '<path d="M12 3l8 4v5c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V7l8-4z" stroke="currentColor" stroke-width="2" fill="none"/>',
  };
  return icons[type] || '';
}

export default function Infra() {
  return `
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
          ${infraItems.map((item) => `
            <article class="rounded-3xl border border-white/10 bg-onyx/80 p-5">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-vapor">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-current">${iconSvg(item.icon)}</svg>
              </div>
              <h3 class="mt-5 text-lg font-semibold text-white">${item.title}</h3>
              <p class="mt-3 text-sm leading-6 text-white/60">${item.description}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
