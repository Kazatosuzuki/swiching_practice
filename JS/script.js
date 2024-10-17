// swiper用グローバル変数
const slideper_view = 4; //スライドの枚数
// swiperの実装(鬼に金棒 梅田芝田店)
// サムネイル
document.addEventListener("DOMContentLoaded", (event) => {
    const sliderThumbnail = new Swiper(".slider-thumbnail", {
        slidesPerView: slideper_view, // サムネイルの枚数
    });
      // スライダー
    const slider = new Swiper(".slider", {
        loop: true,
        // 前後の矢印
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: sliderThumbnail,
        },
    });
    
    //swiperの実装(鬼に金棒 梅田茶屋町店)
    const sliderThumbnail2 = new Swiper(".slider-thumbnail2", {
        slidesPerView: slideper_view, // サムネイルの枚数
    });
      // スライダー
    const slider2 = new Swiper(".slider2", {
        loop: true,
        // 前後の矢印
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: sliderThumbnail2,
        },
    });
    // swiperの実装(鬼に金棒 福島店)
    const sliderThumbnail3 = new Swiper(".slider-thumbnail3", {
        slidesPerView: slideper_view, // サムネイルの枚数
    });
      // スライダー
    const slider3 = new Swiper(".slider3", {
        loop: true,
        // 前後の矢印
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: sliderThumbnail3,
        },
    });
     // swiperの実装(鷺州パープル 福島店)
    const sliderThumbnail4 = new Swiper(".slider-thumbnail4", {
    slidesPerView: slideper_view, // サムネイルの枚数
    });
      // スライダー
    const slider4 = new Swiper(".slider4", {
        loop: true,
        // 前後の矢印
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: sliderThumbnail4,
        },
    });
});

