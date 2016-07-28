/*global $*/
$(document).ready(function () {
    'use strict';
    
   ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [56.315695,44.017063],
            zoom: 10,
            controls: []
            },{
            suppressMapOpenBlock: true,
            searchControlProvider: 'yandex#search'
        }),
        ButtonLayout = ymaps.templateLayoutFactory.createClass(
            "<div class=map-pop-up><h2>{{data.header}}</h2><p><i class='fa fa-map-marker'></i><span class='map-pop-up-text-bottom-city'>{{data.city}}</span><i class='navbar-header-top_box-location-text fa fa-angle-down'></i>{{data.strit}}</p><p><span class='map-pop-up-text-bottom-number'><i class='fa fa-phone'></i>{{data.phoneOne}}</span><span class='map-pop-up-text-bottom-number'>{{data.phoneTwo}}</span></p><p><span><i class='fa fa-envelope'></i>{{data.mail}}</span></p><p><span><i class='fa fa-calendar-check-o'></i>{{data.work}}</span></p><p><span><i class='fa fa-clock-o'></i>{{data.time}}</span></p></div>"
        ),            
        button = new ymaps.control.Button({
            data: {
                content: "Жмак-жмак"
            },
            options: {
                layout: ButtonLayout
            }
        }),  
        placemark = new ymaps.Placemark(
            [56.315695,44.017063],{
            header: 'Работаем по все России',
            city: 'г.Москва',
            strit: 'ул.Красных Маевщиков 148а, строение 3, офис 298 (на углу возле "ТЦ Мир")',
            phoneOne: '+7 (495) 777 55 77',
            phoneTwo: '+7 (495) 777 55 77',
            mail: 'example@mail.ru',
            work: 'Понедельник - Воскресение',
            time: 'с 09:00 до 00:00'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/i_map.png',
                // Размеры метки.
                iconImageSize: [23, 35],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-3, -42]
        });
        
        

        placemark.events.add('click', function (e) {
            var placemark = e.get('target');
            button.data.set({
                header: placemark.properties.get('header'),
                city: placemark.properties.get('city'),
                strit: placemark.properties.get('strit'),
                phoneOne: placemark.properties.get('phoneOne'),
                phoneTwo: placemark.properties.get('phoneTwo'),
                mail: placemark.properties.get('mail'),
                work: placemark.properties.get('work'),
                time: placemark.properties.get('time'),
                footer: placemark.properties.get('footer')
            });
             $(".map-pop-up").toggleClass("show");
        });
        
           
        myMap.geoObjects.add(placemark);
        myMap.controls
            .add(button, { position: { left: 0, top: 0 } })
        

    });
    
   
});
