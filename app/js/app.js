document.querySelector('.mobile-toggle').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.mobile-overlay').classList.toggle('active');
    document.querySelector('header').classList.toggle('active');
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 3
        }
    }
})

const heroSection = document.querySelector('.hero');

heroSection.addEventListener('mousemove', (e) => {
    heroSection.querySelectorAll('.btn').forEach(btn => {
        const speed = btn.getAttribute('data-speed');
        const percent = 300;
        const x = (window.innerWidth - e.pageX * speed) / percent;
        const y = (window.innerHeight - e.pageY * speed) / percent;
        btn.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
})

// shrink header when scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
})


// Scroll to section parts

const nav__about = document.getElementById("nav__about")
nav__about.addEventListener("click", () => {
    const about = document.getElementById("about").offsetTop;
    window.scrollTo({ top: about, behavior: 'smooth'});
})

const nav__menu = document.getElementById("nav__menu")
nav__menu.addEventListener("click", () => {
    const menu = document.getElementById("menu").offsetTop;
    window.scrollTo({ top: menu, behavior: 'smooth'});
})

const nav__order = document.getElementById("nav__order")
nav__order.addEventListener("click", () => {
    const order = document.getElementById("order").offsetTop;
    window.scrollTo({ top: order, behavior: 'smooth'});
})

//Flip the card

// const card = Array.from(document.querySelectorAll(".product-item"));
// const btnFlip = Array.from(document.querySelectorAll(".btn-small"));

// for (let i = 0; i < card.length; i ++){
//     btnFlip[i].addEventListener("click", function (e) {
//         card[i].classList.toggle('is-flipped');
//       })
// }

// I intend to make the flip the card animation but I decided to use modal box instead lol :D
