export function initCopyIpButtons(toast) {
  const buttons = document.querySelectorAll('button[data-ip]');
  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const ip = button.getAttribute('data-ip');
      if (!ip) return;
      try {
        await navigator.clipboard.writeText(ip);
        toast.show(`IP copiée : ${ip}`);
      } catch {
        toast.show('Impossible de copier l\'IP.');
      }
    });
  });
}
