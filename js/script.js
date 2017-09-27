'use strict';
window.initMap = function() {
  var myLatLng = {lat: 59.938800, lng: 30.3229900};

        // Карта
  var map = new google.maps.Map(document.querySelector('.contacts__map'), {
    center: {lat: 59.939400, lng: 30.3229900},
    scrollwheel: true,
    zoom: 16
  });

        // Маркер
  var image = '';
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    icon: image,
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: 'MishkaShop'
  });
}


// // slider
// var sliderArray = new Array(document.querySelector("#slide_1"),document.querySelector("#slide_2"),document.querySelector("#slide_3"));
// sliderArray[1].style.display="none";
// sliderArray[2].style.display="none";
// var currentSlide = 1;
// function nextSlide() {
//   currentSlide++;
//   if(currentSlide === sliderArray.length)
//   currentSlide = 1;
//       sliderArray[currentSlide].style.display="block";
//       sliderArray[currentSlide--].style.display="none";
// };

// document.querySelector(".reviews__paginator-next").onclick = nextSlide;



