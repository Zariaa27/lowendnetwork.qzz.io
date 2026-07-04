export default function Header() {
  return `
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
  `;
}
