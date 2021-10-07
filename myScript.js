// Map//
let map;
const myLatLng = { lat: -25.363, lng: 131.044 };
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 4,
  center: myLatLng,
});
function initMap() {
  
  
  map.setOptions({draggable: false})

  let infoWindow = new google.maps.InfoWindow({
    content: "CLick the map to get Lat/Lng!",
    position: myLatLng
  })

  infoWindow.open(map)

  map.addListener('click', (mapsMouseEvent) => {
    infoWindow.close()
    console.log(mapsMouseEvent.latLng)
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    })
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    )
    infoWindow.open(map)
    new google.maps.Marker({
      position:mapsMouseEvent.latLng,
      map,
      title: "Some Text",
      label: {text: 'hello world', color: 'black'}
    });
    console.log('pushed code')
    
  })

  map.addListener
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Some Text",
    label: {text: 'hello world', color: 'black'}
  });
}

//document.getElementById("hi").style.background = 'white'

//Cursor//
const src = "/images/pin-icon.png";
const docStyle = document.body.style;
document.querySelector('img').addEventListener('click', () => {
  if (!docStyle.cursor) docStyle.cursor = `url('${src}'), default`;
  else docStyle.cursor = null;
});

//Text box//
function selectText() {
  const input = document.getElementById('text-box');
  input.focus();
  input.select();
}