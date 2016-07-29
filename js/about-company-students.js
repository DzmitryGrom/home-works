/*global $*/
$(document).ready(function () {
    'use strict';
    
    /// скрытие-открытие контента
    $(".btn-toggle-text").on("click", function () {
        $(this).toggleClass("closed-list");
        if ($(this).hasClass("closed-list")) {
            $(this).prev().css("display", "none");
            $(this).empty();
            $(this).html("<i class='fa fa-angle-down'></i>");
        } else {
            $(this).prev().css("display", "block");
            $(this).empty();
            $(this).html("<i class='fa fa-angle-up'></i>");
        }
    });
});