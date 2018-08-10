(function () {
	var Flickr = window.MODULES.Flickr = function () {};

	Flickr.prototype.findImages = function (_query) {
		console.log("FLICKR QUERY " + _query);
		let filteredData = { query:_query, images:[] };

		var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&api_key=b394136d5dde8d9d0d4f8fc6685386e2&text=" + _query;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				let dataObj = JSON.parse(this.responseText.substring(15, this.responseText.length - 1));
				if (dataObj.items) {
					dataObj.items.forEach(function(image) {
						filteredData.images.push({
							id: image.author_id,
							url: image.link,
							title: image.title,
						});
					});
				} else {
					return filteredData.images = [];
				}
				console.log(filteredData);
				return filteredData;
			}
		};
		xhttp.open("GET", flickerAPI, true);
		xhttp.send();
	};
})();