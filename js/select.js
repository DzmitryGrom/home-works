/*global $*/
$(document).ready(function () {
    'use strict';
    //// Кнопки Pop-up
    $('#show_button').on("click", function () {
        $(document).find(".btn-togle-list").toggleClass("show");
        $(document).find("#show_button").toggleClass("hidden");
    });
    $('#closet-button').on("click", function () {
        $(document).find(".btn-togle-list").removeClass("show");
        $(document).find("#show_button").toggleClass("hidden");
    });
    $(".btn-call-me").on("click", function () {
        $(".pop-up-call_me").toggleClass("show");
    });
    $(".btn-login").on("click", function () {
        $(".pop-up-login").toggleClass("show");
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
    /// Скрытие Pop-up
    $(document).mouseup(function (e) {
        var toggleMenu = $(".pop-up");
        if (!toggleMenu.is(e.target) && toggleMenu.has(e.target).length === 0) {
            toggleMenu.removeClass("show");
        }
        $(".btn-pop-up").on("click", function () {
            toggleMenu.removeClass("show");
        });
    });
    ///Кнопка Up
    $(document).ready(function () {
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
        $(window).scroll(function () {
            if ($(document).scrollTop() > 0) {
                $('#btn-up').fadeIn('fast');
            } else {
                $('#btn-up').fadeOut('fast');
            }
        });
    });
    /// slider
    $(function () {
        $('.crsl-items').cacheli({
            visible: 4,
            itemMinWidth: 285,
            itemEqualHeight: 414
        });
    });
});