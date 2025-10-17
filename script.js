function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Obrigado! Entraremos em contato em breve.';
  // Para envio real, conecte a um endpoint (ex: Formspree, Firebase Functions ou API própria)
  e.target.reset();
  return false;
}

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const menu = document.getElementById('menu');
  const toggle = document.getElementById('menuToggle');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const visible = menu.style.display === 'block';
      menu.style.display = visible ? 'none' : 'block';
    });
  }
});
