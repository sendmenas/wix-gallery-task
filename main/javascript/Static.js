(function () {
	var Static = window.MODULES.Static = function () {};

	Static.prototype.findImages = function (data, _query) {
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
		return filteredData;
	};
})();