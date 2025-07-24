"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  // Toggle del menú hamburguesa
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    toggle.classList.toggle("active");
  });


  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove("show");
      toggle.classList.remove("active");
    });
  });

  
  // Aparecer cajas al hacer scroll
  const cajas = document.querySelectorAll(".caja-transparente");
  const imagenes = document.querySelectorAll(".imagen-centrada");

  const showOnScroll = () => {
    cajas.forEach(caja => {
      const rect = caja.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        caja.classList.add("visible");
      }
    });

    imagenes.forEach(imagen => {
      const rect = imagen.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        imagen.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", showOnScroll);
  showOnScroll();
});

// Mostrar .ambiente con animación al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const elementosAnimados = document.querySelectorAll('.ambiente, .caja-transparente');
  
    const mostrarAlScroll = () => {
      elementosAnimados.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', mostrarAlScroll);
    window.addEventListener('load', mostrarAlScroll);
  });
  