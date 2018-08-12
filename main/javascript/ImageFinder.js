(function () {

  var ImageFinder = window.CLASSES.ImageFinder = function (staticModule, flickrModule) {
    this._staticModule = staticModule;
    this._flickrModule = flickrModule;
    this._flickrModuleRequestsArr = [];
  };

  /**
  * Look for images in Static DB
  * @param {String} _query - search term to look for
  * @param {String} _module - module name to look in
  * @param {Object} _gallery - gallery that requested the search
  */
  ImageFinder.prototype.search = function(_query, _module, _gallery) {
    switch(_module) {
      case "static":
        return this._staticModule.findImages(_query);
      case "flickr":
        // Checking for pernding requests  from the same gallery and aborting them if not finished
        for (item of this._flickrModuleRequestsArr) {
          if (item.module == _module &&
              item.request.status != 200 &&
              item.request.readyState < 4 &&
              item.gallery == _gallery)
          {
            item.request.abort();
          }
        }
        var xhttp = new XMLHttpRequest();
        this._flickrModuleRequestsArr.push({ request:xhttp, module:_module, gallery:_gallery });
        return this._flickrModule.findImages(_query, xhttp);
      default:
        window.alert("No such module");
        break;
    }
  }
})();