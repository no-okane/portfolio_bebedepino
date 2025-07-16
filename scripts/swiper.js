const follwUs = new Swiper ('#insta',{
    loop:true,
    spaceBetween:10,
    slidesPerView : 6,
    autoplay:{delay:0,},
    //slidesPerGroup: 1,  // 슬라이드를 그룹화하여 한 번에 1개씩 이동
    speed:4000,
    //loopAdditionalSlides: 6,
})

const adBnr = new Swiper ('#ad_bnr',{
    loop:true,
    //spaceBetween:0,
    //slidesPerView : 0,
    autoplay:{
        delay:3500,
        disableOnInteraction: false,
    },
    //slidesPerGroup: 1,  // 슬라이드를 그룹화하여 한 번에 1개씩 이동
    //speed:0,
    //loopAdditionalSlides: 6,
    navigation:{
        nextEl:'#ad_bnr .swiper-button-next',
        prevEl:'#ad_bnr .swiper-button-prev',
    },
    scrollbar:{
        el:'.swiper-controls .swiper-scrollbar'
    },
    pagination: {
        el: ".swiper-controls .swiper-pagination",
        type: "fraction",
        clickable: true,
    },
})