function initMap() {
  'use strict';

  var target = document.getElementById('target');
  var map;
  var tokyo = {lat: 35.681167, lng: 139.767052};

  map = new google.maps.Map(target, {
    center: tokyo,
    zoom: 17
  });
}
