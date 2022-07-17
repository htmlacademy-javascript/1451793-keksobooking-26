import { activateForms } from './form.js';
import { CITY_CENTER_TOKYO } from './constants.js';
import { formatCoordinates } from './utils.js';
import { createCard } from './create-card.js';
import { getSimilarOffers } from './api.js';

const address = document.querySelector('#address');

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(CITY_CENTER_TOKYO, { draggable: true, icon: mainPinIcon });

const map = L.map('map-canvas');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  address.value = formatCoordinates({ objectCoordinates: evt.target.getLatLng() });
});

const pinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderSimilarOffers = (similarOffers) => {
  similarOffers.forEach(({ location, offer, author }) => {
    const marker = L.marker({ lat: location.lat, lng: location.lng }, { icon: pinIcon });
    marker.addTo(map).bindPopup(createCard({ offer, author }));
  });
};

const renderMap = () => {
  map.on('load', activateForms).setView(CITY_CENTER_TOKYO, 14);

  getSimilarOffers((offers) => {
    renderSimilarOffers(offers);
  });
};

export { renderMap, mainMarker, map };
