!function($){
  $(function(){
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': 'United States of America'}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var myOptions = {
          zoom: 3,
          maxZoom: 6,
          minZoom: 3,
          center: results[0].geometry.location,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: false,
          scrollwheel: true,
          draggable: true,
          navigationControl: true,
          mapTypeControl: false,
          scaleControl: true,
          disableDoubleClickZoom: false
        };
        var map = new google.maps.Map($("#map-canvas")[0], myOptions);

        var heatmap = new HeatmapOverlay(map, {
          "radius":25,
          "visible":true, 
          "opacity":70
        });

        // this is important, because if you set the data set too early, the latlng/pixel projection doesn't work
        google.maps.event.addListenerOnce(map, "idle", function() {
          heatmap.setDataSet({
            max: 50000,
            data: snapchatCoords
          });
        });

      } else {
        alert("Google Maps error: " + status);
      }
    });
  });
}(window.jQuery)