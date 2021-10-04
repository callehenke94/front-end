// Map//
let map;

function initMap() {
  const myLatLng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

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