export function initToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;

  return {
    show(message) {
      toast.textContent = message;
      toast.classList.remove('hidden');
      window.clearTimeout(window.toastTimer);
      window.toastTimer = window.setTimeout(() => toast.classList.add('hidden'), 2200);
    },
  };
}
