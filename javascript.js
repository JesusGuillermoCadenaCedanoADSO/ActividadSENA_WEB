const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation')

function toggleMenu()
{
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

menuToggle.addEventListener("click",toggleMenu);



const SwiperContainer = document.querySelector('.swiper-container');
const SwiperPagination = document.querySelector('.swiper-pagination');


var swiper = new Swiper(SwiperContainer,{
    effect:'coverflow',
    grabCursor: true,
    centeredSlides:true,
    slidesPerView:'auto',
    coverflowEffect:{
        rotate:0,
        stretch:0,
        depth:400,
        modifier:1,
        slideShadows:true,
    },
    pagination:{
        el:SwiperPagination,
    },
    loop: true
});

