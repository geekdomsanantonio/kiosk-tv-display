// change number of mins to whatever you want

// currently set at 1 min (60 seconds)
var minsBeforePageRefresh = 1;
 
$(document).ready(function() {
	setInterval(function() {
		window.location.reload(true);
	}, minsBeforePageRefresh * 60 * 1000);
});