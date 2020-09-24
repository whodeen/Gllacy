"use strict";

function initMap() {
  const markerCoordinates = { lat: 59.938789, lng: 30.323069 };
  const centerCoordinates = { lat: 59.939194, lng: 30.329530 };

  let map = new google.maps.Map(document.getElementById("map"), {
    center: centerCoordinates,
    zoom: 15.9,
    clickableIcons: false,
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: false,
  });

  let marker = new google.maps.Marker({
    position: markerCoordinates,
    map: map,
    icon: 'img/map_pin.svg',
  });
}

//,


//59.939194, 30.329530