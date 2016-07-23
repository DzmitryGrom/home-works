/*global $*/ 
$(document).ready(function () {
    'use strict'; 
    //// Кнопки Pop-up
    $('.navbar-toggle').on("click", function () {
        $(".btn-togle-list").toggleClass("show");
        $("#show_button").toggleClass("hidden");
    });
    $(".btn-call-me").on("click", function () {
        $(".pop-up-call_me").toggleClass("show");
    });
    $(".btn-login").on("click", function () {
        $(".pop-up-login").toggleClass("show");
    });
    /// Скрытие Pop-up и суб-меню breadcrumb
    $(document).mouseup(function (e) {
        var toggleMenu = $(".pop-up");
        if (!toggleMenu.is(e.target) && toggleMenu.has(e.target).length === 0) {
            toggleMenu.removeClass("show");
        }
    });
    $(".btns-send-pop-up").on("click", function () {
        $(".pop-up").removeClass("show");
    });
    ///Кнопка Up
    $('#btn-up').mouseover(function () {
        $(this).animate({
            opacity: 0.65
        }, 100);
    }).mouseout(function () {
        $(this).animate({
            opacity: 1
        }, 100);
    }).click(function () {
        window.scroll(0, 0);
        return false;
    });
     //Кнопка up
    $(document).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $('#btn-up').fadeIn('fast');
        } else {
            $('#btn-up').fadeOut('fast');
        }
    });
    $(function () {
        $('.carousel').carousel({
            interval: false
        });
    });
    $(function () {
        $('.list-items').list({
            visible: 4,
            itemMinWidth: 235,
            itemEqualHeight: 414
        });
    });
    $(function () {
        $('.crsl-items').cacheli({
            visible: 4,
            itemMinWidth: 285,
            itemEqualHeight: 414
        });
    });
    /// filter
    if (screen.width > 768) {
        var sliderOne = jQuery("#Slider3").slider({
            from: 0,
            to: 40,
            scale: ['Любое', 'до 10', '20', '30', '40', 'более 45'],
            limits: false,
            step: 1,
            skin: "round_plastic"
        }),
            sliderTwo = jQuery("#Slider4").slider({
                from: 0,
                to: 30,
                scale: ['Любое', 'до 5', '10', '20', '30', 'более 30'],
                limits: false,
                step: 1,
                skin: "round_plastic"
            }),
            sliderFirst = sliderOne.slider(),
            sliderSecond = sliderTwo.slider();
    } else {
        var sliderOne = jQuery("#Slider3").slider({
                from: 0,
                to: 40,
                scale: ['Любое', '20', 'более 40'],
                limits: false,
                step: 1,
                skin: "round_plastic",
            }),
            sliderTwo = jQuery("#Slider4").slider({
                rom: 0,
                to: 30,
                scale: ['Любое', 'до 15', 'более 30'],
                limits: false,
                step: 1,
                skin: "round_plastic"
             })
             , sliderFirst = sliderOne.slider()
             , sliderSecond = sliderTwo.slider();
     }
     $(window).on('resize', function () {
             sliderOne.next().remove();
             sliderTwo.next().remove();
             if (screen.width < 768) {
                 sliderFirst.init(sliderOne, {
                     from: 0
                     , to: 40
                     , scale: ['Любое', '20', 'более 40']
                     , limits: false
                     , step: 1
                     , skin: "round_plastic"
                 })
                 sliderSecond.init(sliderTwo, {
                     from: 0
                     , to: 30
                     , scale: ['Любое', '15', 'более 30']
                     , limits: false
                     , step: 1
                     , skin: "round_plastic"
                 })
             }
             if (screen.width > 768) {
                 sliderFirst.init(sliderOne, {
                     from: 0
                     , to: 40
                     , scale: ['Любое', 'до 10', '20', '30', '40', 'более 40']
                     , limits: false
                     , step: 1
                     , skin: "round_plastic"
                 })
                 sliderSecond.init(sliderTwo, {
                     from: 0
                     , to: 30
                     , scale: ['Любое', 'до 5', '10', '20', '30', 'более 30']
                     , limits: false
                     , step: 1
                     , skin: "round_plastic"
                 })
             }
         })
         ////актив слайдера
     $(".content-box-label-list-item_active-item").on("click", function () {
             $(this).parent().find(".content-box-label-list-item_sub-item").css("display", "block");
         })
         /// Скрытие слайдера актив
     $(document).mouseup(function (e) {
         var toggleMenu = $(".content-box-label-list-item_sub-item");
         if (!toggleMenu.is(e.target) && toggleMenu.has(e.target).length === 0) {
             toggleMenu.css("display", "");
         }
     });
     /// slider content-box-question
     $(".regular").slick({
         infinite: true
         , slidesToShow: 1
         , slidesToScroll: 1
     });
 });