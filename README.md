snapchat-map
============

Map of area codes contained in the snapchat leak.

Uses: 
- http://www.snapchatdb.info/ for (censored) data
- http://www.allareacodes.com/area-code-list.htm for area code city information (as well as Google)
- https://github.com/Jxck/html2json for html2json
- https://github.com/pa7/heatmap.js for GMaps heatmap layer

### createArray.html
Parses code from http://www.allareacodes.com/area-code-list.htm to create Area Code -> City, State mapping (though incomplete, must fill in blanks with Google searching). This also fetches long/lat coords from Google Maps API, so you must put your key in apiKey.js. BEWARE: THIS TAKES A LONG TIME AND WILL USE A GOOD CHUNCK OF YOUR DAILY LIMIT.

### /web
Example for the heatmap using the data in snapchatCoords.js.

### goodAreacodes.sql
Table and data of all US area codes, and one city and it's coordinates for each area code.