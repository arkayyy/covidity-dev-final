mapboxgl.accessToken = 'pk.eyJ1IjoiZW1ibGF6ZXgiLCJhIjoiY2tvZnV0Z2o0MDlhZTJucGx4c3Rtbzc4MiJ9.MDSHvLbfcy9RCKTLd0h1ow';


navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true})

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude,position.coords.latitude])
}

function errorLocation(){
    setupMap([88.263641,22.595770])
}

function setupMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
      });
      const nav=new mapboxgl.NavigationControl();
map.addControl(nav,'top-left')

var directions = new MapboxDirections({
    accessToken: 'pk.eyJ1IjoiZW1ibGF6ZXgiLCJhIjoiY2tvZnV0Z2o0MDlhZTJucGx4c3Rtbzc4MiJ9.MDSHvLbfcy9RCKTLd0h1ow'
  });
  

  
  map.addControl(directions, 'top-left');
}

