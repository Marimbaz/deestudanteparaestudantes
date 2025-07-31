const form = document.getElementById("form-inscricao");
const sucesso = document.getElementById("sucesso");
const botao = document.getElementById("btn-enviar");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Previne envio duplicado
    botao.disabled = true;
    botao.innerText = "Enviando...";

    const dados = new FormData(form);

    fetch(form.action, {
    method: "POST",
    body: dados
    })
    .then(res => res.text())
    .then(() => {
    form.reset();
    sucesso.classList.remove("hidden");
    botao.innerText = "Inscrição enviada ✔";
    })
    .catch(() => {
    alert("Ocorreu um erro. Tente novamente.");
    botao.disabled = false;
    botao.innerText = "Enviar Inscrição";
    });
});




// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Modal functionality
const modal = document.getElementById('modal');

function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

const swiper = new Swiper('.slider-wrapper', {

    spaceBetween: 10,
    grabCursor: true,
    
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        620:{
            slidesPerView: 1
        },
        1024:{
            slidesPerView: 1
        },   
    }
  });
        