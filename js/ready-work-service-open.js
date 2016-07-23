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
    /// скрытие текста
    $(".show-content").on("click", function () {
        $(this).toggleClass("open-list");
        if ($(this).hasClass("open-list")) {
            $(this).next().css("display", "none");
            $(this).parent().css("padding", "0");
        } else {
            $(this).next().css("display", "block");
            $(this).parent().css("padding", "");
        }
    });
});