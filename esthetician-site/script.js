document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    const service = card.dataset.service;
    document.querySelector('select[name="service"]').value = service;
    window.scrollTo({
      top: document.getElementById('booking').offsetTop,
      behavior: 'smooth'
    });
  });
});
