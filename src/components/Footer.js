export default function Footer() {
  return `
    <footer class="border-t border-white/10 bg-onyx/90 px-6 py-8 text-sm text-white/50 sm:px-8">
      <div class="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 lowendnetwork. Tous droits réservés.</p>
        <div class="flex flex-wrap items-center gap-4">
          <a href="#infra" class="transition hover:text-white">Mentions</a>
          <a href="https://discord.gg/" target="_blank" rel="noreferrer" class="transition hover:text-white">Discord</a>
        </div>
      </div>
    </footer>
  `;
}
