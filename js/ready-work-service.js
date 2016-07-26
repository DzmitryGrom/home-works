/*global $,jQuery*/
$(document).ready(function () {
    'use strict';
    
    $(function () {
        $('.carousel').carousel({
            interval: false
        });
    });

    
    
    var sliderOne, sliderTwo, sliderFirst, sliderSecond;
    
    
    /// filter
    if ($(window).width() > 768) {
        sliderOne = jQuery("#Slider3").slider({
            from: 0,
            to: 40,
            scale: ['Любое', 'до 10', '20', '30', '40', 'более 45'],
            limits: false,
            step: 1,
            skin: "round_plastic"
        });
        sliderTwo = jQuery("#Slider4").slider({
            from: 0,
            to: 30,
            scale: ['Любое', 'до 5', '10', '20', '30', 'более 30'],
            limits: false,
            step: 1,
            skin: "round_plastic"
        });
        sliderFirst = sliderOne.slider();
        sliderSecond = sliderTwo.slider();
    } else {
        sliderOne = jQuery("#Slider3").slider({
            from: 0,
            to: 40,
            scale: ['Любое', '20', 'более 40'],
            limits: false,
            step: 1,
            skin: "round_plastic"
        });
        sliderTwo = jQuery("#Slider4").slider({
            rom: 0,
            to: 30,
            scale: ['Любое', 'до 15', 'более 30'],
            limits: false,
            step: 1,
            skin: "round_plastic"
        });
        sliderFirst = sliderOne.slider();
        sliderSecond = sliderTwo.slider();
    }
    $(window).on('resize', function () {
       
        sliderOne.next().remove();
        sliderTwo.next().remove();
        if ($(window).width() < 768) {
            sliderFirst.init(sliderOne, {
                from: 0,
                to: 40,
                scale: ['Любое', '20', 'более 40'],
                limits: false,
                step: 1,
                skin: "round_plastic"
            });
            sliderSecond.init(sliderTwo, {
                from: 0,
                to: 30,
                scale: ['Любое', '15', 'более 30'],
                limits: false,
                step: 1,
                skin: "round_plastic"
            });
        }
        if ($(window).width() > 768) {
            sliderFirst.init(sliderOne, {
                from: 0,
                to: 40,
                scale: ['Любое', 'до 10', '20', '30', '40', 'более 40'],
                limits: false,
                step: 1,
                skin: "round_plastic"
            });
            sliderSecond.init(sliderTwo, {
                from: 0,
                to: 30,
                scale: ['Любое', 'до 5', '10', '20', '30', 'более 30'],
                limits: false,
                step: 1,
                skin: "round_plastic"
            });
        }
    });
    ////актив слайдера
    $(".content-box-label-list-item_active-item").on("click", function () {
        $(this).parent().find(".content-box-label-list-item_sub-item").css("display", "block");
    });
    /// Скрытие слайдера актив
    $(document).mouseup(function (e) {
        var toggleMenu = $(".content-box-label-list-item_sub-item");
        if (!toggleMenu.is(e.target) && toggleMenu.has(e.target).length === 0) {
            toggleMenu.css("display", "");
        }
    });
    /// slider content-box-question
    $(".regular").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});