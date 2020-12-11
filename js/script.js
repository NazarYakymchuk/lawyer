var swiper = new Swiper('.sl_001', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    loop: true
});

new Swiper('.sl_002', {
    //slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    //centeredSlides: true,
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 80
        },
    }
});

var swiper = new Swiper('.sl_003', {
    //slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 3,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 5,
            spaceBetween: 40
        },
        990: {
            slidesPerView: 3,
            spaceBetween: 40
        },
    }
});

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-hamburger');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});


const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', event => {

        accordionItemHeader.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});