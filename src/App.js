import Header from './components/Header.js';
import Hero from './components/Hero.js';
import ServerStatus from './components/ServerStatus.js';
import Infra from './components/Infra.js';
import Community from './components/Community.js';
import Footer from './components/Footer.js';

export default function App() {
  return `
    <div class="min-h-screen">
      ${Header()}
      <main class="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16">
        ${Hero()}
        ${ServerStatus()}
        ${Infra()}
        ${Community()}
      </main>
    </div>
    ${Footer()}
    <div id="toast" class="pointer-events-none fixed bottom-6 right-6 hidden rounded-2xl border border-vapor/30 bg-onyx/95 px-4 py-3 text-sm text-white shadow-glow" aria-live="polite"></div>
  `;
}
