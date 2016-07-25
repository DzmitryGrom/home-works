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
});