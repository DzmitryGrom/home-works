/*global $*/
$(document).ready(function () {
    'use strict';
    
    /* открытие топ-панели*/
    $(".btn-open-top-panel").on("click", function () {
        $(".top-panel").css("transform", "translateY(0%)");
    });
    /* закрытие топ-панели*/
    $(".panel-closet").on("click", function () {
        $(".top-panel").css("transform", "");
    });
    /// Кнопки Pop-up
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
    /// Скрытие Pop-up
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
    
    
     /// slider
    $(function () {
        $('.crsl-items').cacheli({
            visible: 4,
            itemMinWidth: 285,
            itemEqualHeight: 414
        });
    });
    $(function () {
        $('.carousel').carousel({
            interval: false
        });
    });
    
    
      /// суб-меню breadcrumb   
    $(".content-box-breadcrumb-sub-menu_btn").on("click", function () {
        $(".content-box-breadcrumb-sub-menu").toggleClass("show");
    });
    if ($(window).width() < 768) {
        $(".content-box-breadcrumb-sub-menu").addClass("hidden");
    }
    if ($(window).width() > 768) {
        $(".content-box-breadcrumb-sub-menu").removeClass("hidden");
    }
    $(window).on('resize', function () {
        if ($(window).width() < 768) {
            $(".content-box-breadcrumb-sub-menu").addClass("hidden");
        }
        if ($(window).width() > 768) {
            $(".content-box-breadcrumb-sub-menu").removeClass("hidden");
        }
    });
    /// Скрытие Pop-up и суб-меню breadcrumb
    $(document).mouseup(function (e) {
        var toggleMenu = $(".pop-up"),
            toggleSubMenuBreadcrumb = $(".content-box-breadcrumb-sub-menu");
        if (!toggleMenu.is(e.target) && toggleMenu.has(e.target).length === 0) {
            toggleMenu.removeClass("show");
        }
        if (!toggleSubMenuBreadcrumb.is(e.target) && toggleSubMenuBreadcrumb.has(e.target).length === 0) {
            toggleSubMenuBreadcrumb.removeClass("show");
        }
    });
   
    
});