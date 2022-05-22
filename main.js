/* ========== abre e facha o menu ==========*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/* ========== esconder o menu ==========*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/* ========== sombrear o header ==========*/
const header = document.querySelector('#header')
const navHeight =header.offsetHeight

window.addEventListener('scroll', function() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/* ========== testimonials carousel ==========*/
const swiper = new Swiper('.swiper-container', {
  slidesPerview: 1,  //quantos slides aparecem
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,  //passar com o scroll do mouse
  keyboard: true  //passar com as "setas" do teclado
})