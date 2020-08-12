'use strict';

ymaps.ready(function () {
    let
        xSize = 45,
        ySize = 42;
    let myMap = new ymaps.Map(
        'map',
        {
          center: [34.869497, -111.760186],
          zoom: 9,
        },
        {
          searchControlProvider: 'yandex#search',
        }
      ),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          hintContent: 'Sedona',
          balloonContent: 'Sedona',
        },
        {
          iconLayout: 'default#image',
          iconImageSize: [xSize, ySize],
          iconImageOffset: [-xSize / 2, -ySize],
        }
      );

    myMap.geoObjects
        .add(myPlacemark);
});