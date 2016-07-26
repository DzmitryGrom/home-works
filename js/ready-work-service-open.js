/*global $*/
$(document).ready(function () {
    'use strict';
    
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