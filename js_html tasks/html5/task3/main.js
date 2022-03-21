
let mymap = document.getElementById("map");
let geo = document.getElementById("geoDetails");

function getlocationfun() {
    // check availability
    if (navigator.geolocation) {
      // 2- get permission
      geo.style.display = "none";
      mymap.style.display = "block"
      navigator.geolocation.getCurrentPosition(getposition, errorhandeler);
    } else {
      mymap.innerHTML = "Update Your browser and try Agin !";
    }
}



function getposition(position) {
    // alert("Success");
    // console.log(arguments[0]);
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var time = position.timestamp;
    var accuracy = position.coords.accuracy;
    var date = new Date(time)
    console.log(position, lat, lon)
    //  var latlon = lat + " , " + lon;
    // mymap.innerHTML = latlon;
    // steps to deal with google maps
    //1- create object from google maps. latlng ( lat, ,lon )
    var location = new google.maps.LatLng(lat, lon);
    //2- center : zoom
    var specs = { zoom: 17, center: location };
    //3- display map
    new google.maps.Map(mymap, specs);

    document.getElementById('lat').value = lat;
    document.getElementById('long').value = lat;
    document.getElementById('time').value = date.toUTCString()
    document.getElementById('acc').value =accuracy;

}



function errorhandeler() {
    alert("Error");
}

function getGoeDetails() {
    mymap.style.display = "none"
    geo.style.display = "flex";

}