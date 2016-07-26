/*global $*/
$(document).ready(function () {
    'use strict';
    /// slider content-box-question
    $(".regular").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(function () {
        $('.list-items').list({
            visible: 4,
            itemMinWidth: 235,
            itemEqualHeight: 414
        });
    });
});