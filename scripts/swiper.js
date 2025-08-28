/* const follwUs = new Swiper ('#insta',{
    loop:true,
    spaceBetween:10,
    slidesPerView : 6,
    autoplay:{delay:0,},
    //slidesPerGroup: 1,  // 슬라이드를 그룹화하여 한 번에 1개씩 이동
    speed:4000,
    //loopAdditionalSlides: 6,
    breakpoints: {
        430: {
            slidesPerView: 3,  // 430px 이하에서 1개씩 표시
        }
    },
}) */

// 화면 크기에 따라 slidesPerView를 동적으로 설정
const slidesPerViewValue = window.innerWidth <= 430 ? 3 : 6;  // 430px 이하일 때 3개, 그 이상일 때 6개

const followUs = new Swiper('#insta', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: slidesPerViewValue,  // 동적으로 설정된 값 사용
    autoplay: { delay: 0 },
    speed: 4000,
    on: {
        init: function () {
            this.update();  // 초기화 후 업데이트
        },
        resize: function () {
            // 화면 크기 변경 시 업데이트
            this.params.slidesPerView = window.innerWidth <= 430 ? 3 : 6;
            this.update();
        }
    }
});

// 화면 크기 변경 시 업데이트
window.addEventListener('resize', () => {
    followUs.params.slidesPerView = window.innerWidth <= 430 ? 3 : 6;  // 슬라이드 개수 재설정
    followUs.update();  // Swiper 업데이트
});

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


/* const collabor = new Swiper ('#collabor',{
    loop:true,
    spaceBetween:30,
    slidesPerView : 6,
    scrollbar:{
        el:'#collabor ~ .swiper-controls .swiper-scrollbar'
    },
    pagination: {
        el: "#collabor ~ .swiper-controls .pagination_deco .swiper-pagination",
        type: "fraction",
        clickable: true,
    },
    breakpoints: {
        430: {
            slidesPerView : 6,
            spaceBetween:5,
        }
    },
}) */

// 화면 크기에 따라 slidesPerView와 spaceBetween을 동적으로 설정
const setSwiperParams = () => {
    return {
        slidesPerView: window.innerWidth <= 430 ? 3 : 6,  // 화면이 430px 이하일 때는 3개 슬라이드
        spaceBetween: window.innerWidth <= 430 ? 5 : 30,  // 화면이 430px 이하일 때는 spaceBetween을 5로 설정
    };
};

const collabor = new Swiper('#collabor', {
    loop: true,
    slidesPerView: setSwiperParams().slidesPerView,  // 동적으로 설정된 slidesPerView 값 사용
    spaceBetween: setSwiperParams().spaceBetween,  // 동적으로 설정된 spaceBetween 값 사용
    scrollbar: {
        el: '#collabor ~ .swiper-controls .swiper-scrollbar'
    },
    pagination: {
        el: "#collabor ~ .swiper-controls .pagination_deco .swiper-pagination",
        type: "fraction",
        clickable: true,
    },
    on: {
        init: function () {
            this.update();  // 초기화 후 업데이트
        },
        resize: function () {
            // 화면 크기 변경 시 슬라이드 개수와 spaceBetween 값 업데이트
            const params = setSwiperParams();
            this.params.slidesPerView = params.slidesPerView;
            this.params.spaceBetween = params.spaceBetween;
            this.update();
        }
    }
});

// 화면 크기 변경 시 업데이트
window.addEventListener('resize', () => {
    const params = setSwiperParams();
    collabor.params.slidesPerView = params.slidesPerView;  // 슬라이드 개수 재설정
    collabor.params.spaceBetween = params.spaceBetween;  // spaceBetween 재설정
    collabor.update();  // Swiper 업데이트
});
