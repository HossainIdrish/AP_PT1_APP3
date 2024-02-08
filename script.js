require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/widgets/Home",
  "esri/widgets/Legend",
  "esri/widgets/Search",
  "dojo/domReady!"
], function(WebScene, SceneView, Home, Legend, Search) {

  var scene = new WebScene({
    portalItem: {
      id: "fb1274b466d443a682a2822bc0366591"
    }
  });
  
  var view = new SceneView({
    container: "viewDiv",
    map: scene,
    viewingMode: "global",
    environment: {
      lighting: {
        date: new Date(),
        directShadowsEnabled: true,
        cameraTrackingEnabled: false
      }
    }
  });
  
  var homeBtn = new Home({
    view: view
  });
  view.ui.add(homeBtn, "top-left");
  
  // Assuming MO and FL are previously defined HTML buttons
  [MO, FL].forEach(function(button) {
    button.style.display = 'flex';
    view.ui.add(button, 'top-right');
  });
  
  var searchWidget = new Search({
    view: view
  });
  view.ui.add(searchWidget, "top-right");
  
  MO.addEventListener('click', function() {
    view.goTo({
      position: {
        x: -91.83,
        y: 37.96,
        z: 2500000
      },
      tilt: 0,
      heading: 0
    });
  }); 

  FL.addEventListener('click', function() {
    view.goTo({
      position: {
        x: -81.51,
        y: 27.66,
        z: 2500000
      },
      tilt: 0,
      heading: 0
    });
  });

  view.when(function() {
    // Add the Legend widget with automatic layer inclusion
    var legend = new Legend({
      view: view
      // Omitting layerInfos will automatically include all layers
    });

    // Add widget to the bottom right corner of the view
    view.ui.add(legend, "bottom-right");
  });

});
