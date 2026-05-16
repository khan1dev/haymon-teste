// Lucide Icons

lucide.createIcons();

// Modal de imagem

const previewImage = document.getElementById("previewImage");
const imageModal = document.getElementById("imageModal");

previewImage.addEventListener("click", () => {
  imageModal.style.display = "flex";
});

imageModal.addEventListener("click", () => {
  imageModal.style.display = "none";
});

// Animação ao aparecer

const cards = document.querySelectorAll('.card, .staff, .launch-box');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.animate([
        {
          opacity:0,
          transform:'translateY(40px)'
        },
        {
          opacity:1,
          transform:'translateY(0)'
        }
      ],{
        duration:700,
        easing:'ease',
        fill:'forwards'
      });

    }

  });
});

cards.forEach(card=>{
  card.style.opacity='0';
  observer.observe(card);
});

// Bloquear botão direito

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Bloquear atalhos

document.addEventListener('keydown', function(e) {

  // F12
  if (e.key === 'F12') {
    e.preventDefault();
  }

  // Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
  }

  // Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey && e.key === 'J') {
    e.preventDefault();
  }

  // Ctrl+U
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
  }

  // Ctrl+S
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
  }

});