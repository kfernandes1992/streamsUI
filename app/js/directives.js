'use strict';

/* Directives */

  angular.module("streams.accordianify",[]).
  	directive("accordianify",[function (){
  		return function(scope, elm, attrs){
  			console.log($(elm));
  			$(elm).accordion({
            	event: "hover",
              heightStyle: "fill" 
        	});
  		}
  	}]);

  angular.module("streams.loadGoogleMap",[]).
  		directive("loadGoogleMap",[function(){
  			return function(scope,elm,attrs){
          console.log($(elm));
  				//config the options of the map
  			  var mapOptions = {
            center: new google.maps.LatLng(-34.397, 150.644),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
				//create map with options and add it to the html element
				var map = new google.maps.Map(document.getElementById("mapCanvas"),mapOptions);
  			  //places marker on user click
        google.maps.event.addListener(map,"click",function(event){
          placeMarker(event.latLng);
        });
            //accessory methods
          function placeMarker(location){
            var marker= new google.maps.Marker({
              position:location,
              map:map
            });
          };
        }  
  }]);
