/*global $*/
$(document).ready(function () {
    'use strict';
   
    /// скрытие-открытие контента
    $(".btn-toggle").on("click", function () {
        $(this).toggleClass("closed-list");
        if ($(this).hasClass("closed-list")) {
            $(this).prev().css("display", "none");
            $(this).empty();
            $(this).html("Подробнее<i class='fa fa-angle-down'></i>");
        } else {
            $(this).prev().css("display", "block");
            $(this).empty();
            $(this).html("Свернуть<i class='fa fa-angle-up'></i>");
        }
    });
});