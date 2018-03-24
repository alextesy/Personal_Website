jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

$(function(){
	var inputs = $('.input');
	var paras = $('.description-flex-container').find('p');
	$(inputs).click(function(){
		var t = $(this),
				ind = t.index(),
				matchedPara = $(paras).eq(ind);
		
		$(t).add(matchedPara).addClass('active');
		$(inputs).not(t).add($(paras).not(matchedPara)).removeClass('active');
	});
});


$(document).ready(function() {
	// execute
	(function() {
		// map options
		var options = {
			zoom: 3,
			center: new google.maps.LatLng(25.3176339,55.4403953,12), 
			mapTypeId: google.maps.MapTypeId.TERRAIN,
			mapTypeControl: false
		};

		// init map
		var map = new google.maps.Map(document.getElementById('map_canvas'), options);

		var locations = [
			['Sagres, Portugal', 37.0185997,-8.9985485,15],
			['InDnegev', 31.2314422,34.3703113,11.46],
			['Na Trang, Vietnam', 12.2594346,109.1064115,11],
			['Adams Peak', 6.8096503,80.4971999,17],
			['Yangon, Myanmar',16.9036303,95.8892999,10]
		  ];


		// set multiple marker
		for (var i = 0; i < locations.length; i++) {
			// init markers
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[i][1],locations[i][2]),
				map: map,
				title: locations[i][0]
			});

			// process multiple info windows
			(function(marker, i) {
				// add click event
				google.maps.event.addListener(marker, 'click', function() {
					infowindow = new google.maps.InfoWindow({
						content: '      If you like it, you can give me the bonus :)'
					});
					infowindow.open(map, marker);
				});
			})(marker, i);
		}
	})();
});



