const follwUs = new Swiper ('#insta',{
    loop:true,
    spaceBetween:10,
    slidesPerView : 6,
    autoplay:{delay:0,},
    //slidesPerGroup: 1,  // 슬라이드를 그룹화하여 한 번에 1개씩 이동
    speed:4000,
    //loopAdditionalSlides: 6,
})

const newProduct = new Swiper ('#new_product',{
    loop:true,
    scrollbar:{
        el:'#new_product + .swiper-controls .swiper-scrollbar'
    },
    pagination: {
        el: "#new_product + .swiper-controls .pagination_deco .swiper-pagination",
        type: "fraction",
        clickable: true,
    },
})


const adBnr = new Swiper ('#ad_bnr',{
    loop:true,
    autoplay:{
        delay:3500,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl:'#ad_bnr .swiper-button-next',
        prevEl:'#ad_bnr .swiper-button-prev',
    },
    scrollbar:{
        el:'#ad_bnr + .swiper-controls .swiper-scrollbar'
    },
    pagination: {
        el: "#ad_bnr + .swiper-controls .pagination_deco .swiper-pagination",
        type: "fraction",
        clickable: true,
    },
})