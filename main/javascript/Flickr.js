(function () {
	var Flickr = window.MODULES.Flickr = function () {};

	Flickr.prototype.findImages = function (_query) {
		return new Promise((resolve, reject) => {
			console.log("FLICKR QUERY " + _query);
			let filteredData = { query:_query, images:[] };

			var flickerAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b394136d5dde8d9d0d4f8fc6685386e2&format=json&nojsoncallback=1&extras=url_s&tags=" + _query;
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					let dataObj = JSON.parse(this.responseText);
					if (dataObj.photos) {
						dataObj.photos.photo.forEach(function(image) {
							filteredData.images.push({
								id: image.id,
								url: image.url_s,
								title: image.title,
							});
						});
					} else {
						resolve(filteredData);
					}
					resolve(filteredData);
				}
			};
			xhttp.open("GET", flickerAPI, true);
			xhttp.send();
		});
	};
})();