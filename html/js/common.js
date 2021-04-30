var ClassNames$4 = {
  EXPANDED: 'expand',
  OPENED: 'opened',
  SHOW: 'show',
  ISMOBILE: 'is-mobile-mode'
};
var width;
MobileNav();

//加入Scroll to top按鈕 +
$(function () {
  $('.wrapper').append('<a href="javascript: void(0)" class="scrollToTop"><i class="fas fa-chevron-up"></i></a>');
  $(document).off("scroll").on("scroll", function () {

    if ($(window).scrollTop() > 20) {
      $('.scrollToTop').addClass('show');
    } else {
      $('.scrollToTop').removeClass('show');
    }
  }).scroll();;

  $('.scrollToTop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});


$(window).on('load', function () {
  AOS.init({
    duration: 1200,
  })

});

// 導覽列樣式
$(function () {
  //區塊動態效果
  var timer = null;
  $(window).resize(function () {

    width = $(window).width();
    window.clearTimeout(timer);
    timer = window.setTimeout(function () {
      if (width > 992) {
        // 桌機版導覽列hover效果
        $("html").removeClass("Mobile");

      } else {
        $("html").addClass("Mobile");
      }
    }, 500);
  }).trigger("resize");
})





//手機版導覽列控制
function MobileNav() {
  var iWinScroll = $(window).scrollTop();
  var timer;

  $(window).on("scroll", function () {
    window.clearTimeout(timer)

    timer = window.setTimeout(function () {
      iWinScroll = $(window).scrollTop();
      width = $(window).width();
      if (width < 992) {
        if ($(window).scrollTop() > 20) {
          $('.header').addClass('scrolling');
        } else {
          $('.header').removeClass('scrolling');
        }
      }

    }, 100)
  })


  //手機導覽列展開
  $('.menu-toggle').on("click", function () {
    $('.header, .main-nav').toggleClass(ClassNames$4.EXPANDED);
    $("html").toggleClass(ClassNames$4.ISMOBILE);
    $("body").scrollTop(iWinScroll);
  })
}

// Banner
$(function () {
  var slickOptions = {
    slidesToShow: 1,
    autoplay: true,
    speed: 5000,
    fade: true,
    dots: false,
    arrows: false,
    // cssEase: 'ease-in-out',

  }
  $('.banner-block').slick(slickOptions);


  //fancybox
  $('[data-fancybox]').fancybox({
    toolbar: true,
    smallBtn: false,
    iframe: {
      preload: false
    }
  })

  $(".grid-box").on("click", function () {
    width = $(window).width();
    if(width>992){
      $(".fancybox-block").before('<div class="img-box"><img src="images/bottle.png" alt=""></div>');
      console.log("web")

    }
    else{
      $(".fancybox-block").append('<div class="img-box"><img src="images/bottle.png" alt=""></div>');
      console.log("mobile")
    }

  })
})


//判斷手機行動裝置
function isMobile() {
  return (
    (navigator.userAgent.match(/Android/i)) ||
    (navigator.userAgent.match(/webOS/i)) ||
    (navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPod/i)) ||
    //  (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/BlackBerry/))
  );
}
