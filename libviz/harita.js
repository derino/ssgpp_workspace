
var data;
var data_min, data_max;
var map;

$(document).ready(function() {

    setupMap();

    if(window.conf_harita.yerel) {
	if(isAPIAvailable()) {
	    $('#files').bind('change', handleFileSelect);
	}
    }
    else {
	var allText;
	$.ajax({ 'url': window.conf_harita.csvDosyasi,
		 'async': false,
		 'success': function(r){
		     //display to innerDOM here, using r as the file
		     allText = r;
		 }
	       });

	//alert(allText);
	data = $.csv.toArrays(allText);
	plotDataOnMap();
	var html = '';
	for(var row in data) {
	    html += '<tr>\r\n';
	    for(var item in data[row]) {
		html += '<td>' + data[row][item] + '</td>\r\n';
	    }
	    html += '</tr>\r\n';
	}
	$('#result3').html(html);
    }
}); // END ready

function isAPIAvailable() {
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
      return true;
    } else {
      // source: File API availability - http://caniuse.com/#feat=fileapi
      // source: <output> availability - http://html5doctor.com/the-output-element/
      document.writeln('The HTML5 APIs used in this form are only available in the following browsers:<br />');
      // 6.0 File API & 13.0 <output>
      document.writeln(' - Google Chrome: 13.0 or later<br />');
      // 3.6 File API & 6.0 <output>
      document.writeln(' - Mozilla Firefox: 6.0 or later<br />');
      // 10.0 File API & 10.0 <output>
      document.writeln(' - Internet Explorer: Not supported (partial support expected in 10.0)<br />');
      // ? File API & 5.1 <output>
      document.writeln(' - Safari: Not supported<br />');
      // ? File API & 9.2 <output>
      document.writeln(' - Opera: Not supported');
      return false;
    }
  }

  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    var file = files[0];

    // read the file metadata
    var output = ''
        output += '<span style="font-weight:bold;">' + escape(file.name) + '</span><br />\n';
        output += ' - FileType: ' + (file.type || 'n/a') + '<br />\n';
        output += ' - FileSize: ' + file.size + ' bytes<br />\n';
        output += ' - LastModified: ' + (file.lastModifiedDate ? file.lastModifiedDate.toLocaleDateString() : 'n/a') + '<br />\n';

    // read the file contents
    printTable(file);

    // post the results
    $('#list').append(output);
  }

function printTable(file) {
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event){
      var csv = event.target.result;
      data = $.csv.toArrays(csv);
      plotDataOnMap();
      var html = '';
      for(var row in data) {
        html += '<tr>\r\n';
        for(var item in data[row]) {
          html += '<td>' + data[row][item] + '</td>\r\n';
        }
        html += '</tr>\r\n';
      }
      $('#result3').html(html);
    };
    reader.onerror = function(){ alert('Unable to read ' + file.fileName); };
  }

//var data = $.csv.toObjects(allText);
//var html = generateTable(data);
//$('#result3').empty();
//$('#result3').html(html);

// build HTML table data from an array (one or two dimensional)
  function generateTable(data) {
    var html = '';

    if(typeof(data[0]) === 'undefined') {
      return null;
    }

    if(data[0].constructor === String) {
      html += '<tr>\r\n';
      for(var item in data) {
        html += '<td>' + data[item] + '</td>\r\n';
      }
      html += '</tr>\r\n';
    }

    if(data[0].constructor === Array) {
      for(var row in data) {
        html += '<tr>\r\n';
        for(var item in data[row]) {
          html += '<td>' + data[row][item] + '</td>\r\n';
        }
        html += '</tr>\r\n';
      }
    }

    if(data[0].constructor === Object) {
      for(var row in data) {
        html += '<tr>\r\n';
        for(var item in data[row]) {
          html += '<td>' + item + ':' + data[row][item] + '</td>\r\n';
        }
        html += '</tr>\r\n';
      }
    }
    
    return html;
  }






//var min = Math.min.apply(null, arr),
//    max = Math.max.apply(null, arr);

// get color depending on population density value
function getColor(d) {

    var color = d3.scale.log().domain([ data_min, data_max ]).range([ "rgb(255, 255, 229)", "rgb(35, 139, 69)" ]);
    return color(d);
    /*return d >  ? '#800026' :
      d > 4000  ? '#BD0026' :
      d > 1000  ? '#E31A1C' :
      d > 500  ? '#FC4E2A' :
      d > 250   ? '#FD8D3C' :
      d > 100   ? '#FEB24C' :
      d > conf_harita_0   ? '#FED976' :
      '#FFFFA0';*/
    /*			return d > 8000 ? '#800026' :
			d > 4000  ? '#BD0026' :
			d > 1000  ? '#E31A1C' :
			d > 500  ? '#FC4E2A' :
			d > 250   ? '#FD8D3C' :
			d > 100   ? '#FEB24C' :
			d > 0   ? '#FED976' :
			'#FFFFA0';*/
    /*			return d > 1000 ? '#800026' :
			d > 500  ? '#BD0026' :
			d > 200  ? '#E31A1C' :
			d > 100  ? '#FC4E2A' :
			d > 50   ? '#FD8D3C' :
			d > 20   ? '#FEB24C' :
			d > 10   ? '#FED976' :
			'#FFEDA0';*/
}

function style(feature) {
    return {
	weight: 2,
	opacity: 1,
	color: 'white',
	dashArray: '3',
	fillOpacity: 0.7,
	fillColor: getColor(feature.properties.density)
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
	weight: 5,
	color: '#666',
	dashArray: '',
	fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
	layer.bringToFront();
    }

    info.update(layer.feature.properties);
}

var geojson;

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
	mouseover: highlightFeature,
	mouseout: resetHighlight,
	click: zoomToFeature
    });
}

var info;
function setupMap() {

map = L.map('map').setView([39, 36.8], 6);

/*var cloudmade = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
  key: '5f3fcffad44b4f468fea19bd3ef6b546', //   BC9A493B41014CAABB98F0471D759707
  styleId: 22677
  }).addTo(map);*/


// control that shows state info on hover
info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = '<h4>' + window.conf_harita.baslik + '</h4>' +  (props ?
								    '<b>' + props.NAME_1 + '</b><br />' + props.density
								    : window.conf_harita.altbaslik); // Detaylar için imleci kullanın.
};

info.addTo(map);



}


function plotDataOnMap() {

// for getColor()
    data_min = 1.0e+10;
    data_max = 0;
    for(var row in data) {
	item = parseFloat(data[row][1]);
	if(item  < data_min)
	    data_min = item;
	if(item > data_max)
	    data_max = item;	
    }
    //alert(data_min);
    //alert(data_max);

//    setupMap();

    for(var i=0;i<statesData.features.length;i++)
    {
	statesData.features[i].properties.density = 0;

	for(var row in data)
	{
	    if( data[row][0].toLocaleLowerCase() == statesData.features[i].properties.NAME_1.toLocaleLowerCase() )
		statesData.features[i].properties.density = data[row][1];
	}
	/*for(var j = 0; j<res.cityresults.length; j++)
	  {
	  if( res.cityresults[j].city.toLocaleLowerCase() == statesData.features[i].properties.NAME_1.toLocaleLowerCase() )
	  statesData.features[i].properties.density = res.cityresults[j].val;
	  }*/
	/*for(var key in obj){
	  var attrName = key;
	  var attrValue = obj[key];
	  }*/
    }

    geojson = L.geoJson(statesData, {
	style: style,
	onEachFeature: onEachFeature
    }).addTo(map);

    //map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');
    map.attributionControl.addAttribution('ssg++ &copy; <a href="http://ssgpp.sourceforge.net">http://ssgpp.sourceforge.net</a>');


    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {

	var dataValCopy = new Array(data.length);
	for(var row in data)
	    dataValCopy[row] = parseFloat(data[row][1]);
	dataValCopy.sort(function(a,b){return a-b});


	if(window.conf_harita.auto_dereceler) {
	    var dereceler = new Array(7);
	    dereceler[0] = 0;
	    for(var i=1; i<7; i++) {
		var p = dataValCopy[Math.floor(i*dataValCopy.length/7)];
		dereceler[i] = (p-dataValCopy[0]>1)? Math.floor(p): p; // degerler cok kucukse ondaliklar onemli. ideal bir cozum degil.
	    }
	    
	    dereceler[7] = (data_max-data_min>1)? Math.floor(data_max): data_max;
	    //dereceler[i] = Math.floor(data_min + i*(data_max-data_min)/6);
	    window.conf_harita.dereceler = dereceler;
	}


	var div = L.DomUtil.create('div', 'info legend'),
	//grades = [0, 10, 20, 50, 100, 200, 500, 1000],
	//grades = [0, 100, 250, 500, 1000, 4000, 8000], // window.conf_harita.dereceler kullaniliyor.
	labels = [],
	from, to;

	for (var i = window.conf_harita.dereceler.length-1; i>-1; i--) {
	    from = window.conf_harita.dereceler[i];
	    //to = window.conf_harita.dereceler[i + 1];

	    labels.push(
		'<i style="background:' + getColor(from) + '"></i> ' + // from+1
		    from + (to ? '&ndash;' + to : ''));
	    /*
	    labels.push(
		'<i style="background:' + getColor(from + 1) + '"></i> ' +
		    from + (to ? '&ndash;' + to : ''));
	    */
	}

	div.innerHTML = labels.join('<br>');
	return div;
    };

    legend.addTo(map);


} // END plotDataOnMap

