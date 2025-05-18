document.addEventListener('DOMContentLoaded', () => {
  // Menu toggle
  const btn = document.querySelector('.menu-button');
  const nav = document.querySelector('nav ul');
  btn.addEventListener('click', () => nav.classList.toggle('show'));

  // Modal image viewer
  const modal = document.getElementById('modal'); // Match HTML ID
  const modalImg = document.querySelector('.modal-image'); // Match HTML class
  const closeBtn = modal.querySelector('.close');

  // Show modal with clicked image after preloading it
  document.querySelectorAll('.images img').forEach(img => {
    img.addEventListener('click', () => {
      const newImg = new Image();
      newImg.onload = () => {
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modal.style.display = 'block';  // Show modal only after image loads
      };
      newImg.src = img.src; // Start loading
    });
  });

  // Close modal when X is clicked
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Optional: Close modal with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
});
