(function () {
	var Static = window.MODULES.Static = function () {};

	Static.prototype.findImages = function(_query) {
		return new Promise((resolve, reject) => {
			console.log("STATIC QUERY " + _query);
			let data = window.DATA.staticImagesDb;
			let filteredData = { query:_query, images:[] };
			data.forEach(function(image) {
				if (image.title.indexOf(_query) > -1) {
					filteredData.images.push({
						id: image.id,
						url: image.url,
						title: image.title,
					});
				}
			});
			resolve(filteredData);
		});
	};
})();