(function () {

  var ImageFinder = window.CLASSES.ImageFinder = function (staticModule, flickrModule) {
    this._staticModule = staticModule;
    this._flickrModule = flickrModule;
  };

  // ImageFinder.prototype.search = function(_query) {
  //   let data = window.DATA.staticImagesDb;
  //   let filteredData = {
  //     query: _query,
  //     images: [],
  //   };
  //   data.forEach(function(image) {
  //     if (image.title.indexOf(_query) > -1) {
  //       filteredData.images.push({
  //         id: image.id,
  //         url: image.url,
  //         title: image.title,
  //       });
  //     }
  //   });
  //   return filteredData;
  // }

  ImageFinder.prototype.searchModules = function(_query, module) {
    switch(module) {
      case "static":
        return this._staticModule.findImages(_query);
      case "flickr":
        return this._flickrModule.findImages(_query);
      default:
        console.log("GOT TO DEFAULT");
        break;
    }
  }
})();