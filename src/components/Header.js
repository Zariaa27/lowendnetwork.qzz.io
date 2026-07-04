export default function Header() {
  return `
    <header class="border-b border-white/10">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 sm:px-8">
        <a href="#top" class="flex items-center transition-opacity duration-200 hover:opacity-80">
          <span class="text-base font-black uppercase tracking-[0.2em] text-white sm:text-lg" style="font-family: 'Segoe UI', 'Inter', 'Arial Black', sans-serif; letter-spacing: 0.2em;">
            LOWENDNETWORK
          </span>
        </a>
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
  `;
}
