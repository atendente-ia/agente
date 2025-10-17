// Lightbox simples
(function(){
  const overlay = document.getElementById('lightboxOverlay');
  const imgEl = document.getElementById('lightboxImage');
  const captionEl = document.getElementById('lightboxCaption');
  const closeBtn = overlay ? overlay.querySelector('.lightbox-close') : null;

  function openLightbox(src, caption) {
    imgEl.src = src;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    imgEl.src = '';
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a.lightbox');
    if (a) {
      e.preventDefault();
      const src = a.getAttribute('href');
      openLightbox(src, caption);
    }
    if (e.target === overlay) closeLightbox();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
})();
