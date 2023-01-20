
let map;

function initMap() {

var contentString = [];
 contentString[0] =
'<div id="content">' +
'   <div id="siteNotice">' +
'   </div>' +
'   <h3 id="firstHeading" class="firstHeading">The Central Fire Station - Kyauktada, Sule Pagoda Road, Yangon</h3>' +
'   <div id="bodyContent">' +
'       <p>Address “: မြန်မာနိုင်ငံမီးသတ်တပ်ဖွဲ့ဌာနချုပ်၊ အမှတ်(၅) ရပ်ကွက်၊ အုတ်ပုံဆိပ်လမ်း၊ မရမ်းကုန်းမြို့နယ်။ </p>' +
'       <p>Phone : 01 666912, 01 666913, 01 663904</p>'+
'   </div>' +
'</div>';

contentString[1] =
'<div id="content">' +
'   <div id="siteNotice">' +
'   </div>' +
'   <h3 id="firstHeading" class="firstHeading">Hlaingtharya Fire Station</h3>' +
'   <div id="bodyContent">' +
'       <p></p>' +
'       <p></p>'+
'   </div>' +
'</div>';

contentString[2] =
'<div id="content">' +
'   <div id="siteNotice">' +
'   </div>' +
'   <h3 id="firstHeading" class="firstHeading">Myanmar Fire Force </h3>' +
'   <div id="bodyContent">' +
'       <p></p>' +
'       <p>Phone : 01 666912, 01 666913, 01 663904</p>'+
'   </div>' +
'</div>';

contentString[3] =
'<div id="content">' +
'   <div id="siteNotice">' +
'   </div>' +
'   <h3 id="firstHeading" class="firstHeading">Myanmar Fire Force (North Oakkalapa)</h3>' +
'   <div id="bodyContent">' +
'       <p>Address : North Oakkalapa Roundabout, Yangon</p>' +
'       <p>Phone : 01 666 912</p>'+
'   </div>' +
'</div>';

// Myanmar Fire Force
console.log(contentString);
var locations = [
    ['', 16.7760156,96.1585973],
    ['', 16.872042,96.04363],
    ['', 16.869758,96.153303],
    ['', 16.895233, 96.157107],
  ];

  const iconBase = "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(16.7760156,96.1585973),
    
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
  var infowindow = new google.maps.InfoWindow();
//  var infowindow = new google.maps.InfoWindow({
//     content: contentString,
//   });

  var marker, i;
  
  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      icon: icons[features[i].type].icon,
      map: map
    });
    
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        // infowindow.setContent(locations[i][0]);
        infowindow.setContent(contentString[i]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}


