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

        var sMap = new google.maps.Map($("#map-canvas")[0], myOptions);
        var sHeatmap = new HeatmapOverlay(sMap, {
          "radius":25,
          "visible":true, 
          "opacity":70
        });
        google.maps.event.addListenerOnce(sMap, "idle", function() {
          sHeatmap.setDataSet({
            max: 50000,
            data: snapchatCoords
          });
        });

        var uMap = new google.maps.Map($("#map-canvas2")[0], myOptions);
        var uHeatmap = new HeatmapOverlay(uMap, {
          "radius":25,
          "visible":true, 
          "opacity":70
        });
        google.maps.event.addListenerOnce(uMap, "idle", function() {
          uHeatmap.setDataSet({
            max: 1500000,
            data: uspopCoords
          });
        });

      } else {
        alert("Google Maps error: " + status);
      }
    });
  });
}(window.jQuery)