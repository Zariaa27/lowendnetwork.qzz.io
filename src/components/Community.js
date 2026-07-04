export default function Community() {
  return `
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
  `;
}
