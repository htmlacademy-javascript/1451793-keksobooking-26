import { Attribute, Boolean } from './constants.js';

const adForm = document.querySelector('.ad-form');

const filterAdFormNodes = {
  avatar: adForm.querySelector('#avatar'),
  title: adForm.querySelector('#title'),
  address: adForm.querySelector('#address'),
  type: adForm.querySelector('#type'),
  price: adForm.querySelector('#price'),
  timein: adForm.querySelector('#timein'),
  timeout: adForm.querySelector('#timeout'),
  roomNumber: adForm.querySelector('#room_number'),
  capacity: adForm.querySelector('#capacity'),
  features: adForm.querySelector('.features'),
  description: adForm.querySelector('#description'),
  images: adForm.querySelector('#images'),
  submitButton: adForm.querySelector('.ad-form__submit'),
  resetButton: adForm.querySelector('.ad-form__reset'),
};

const mapFilters = document.querySelector('.map__filters');

const filterMapFiltersNodes = {
  type: mapFilters.querySelector('#housing-type'),
  price: mapFilters.querySelector('#housing-price'),
  rooms: mapFilters.querySelector('#housing-rooms'),
  guests: mapFilters.querySelector('#housing-guests'),
  features: mapFilters.querySelector('#housing-features'),
};

function setAttributeNodes(nodes, attribute) {
  const keys = Object.keys(nodes);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const node = nodes[key];
    node.setAttribute(attribute.name, attribute.value);
  }
}

function removeAttributeNodes(nodes, attribute) {
  const keys = Object.keys(nodes);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const node = nodes[key];
    node.removeAttribute(attribute.name);
  }
}

function deactivateMapFiltersForm() {
  mapFilters.classList.add('map__filters--disabled');

  setAttributeNodes(filterMapFiltersNodes, { name: Attribute.DISABLED, value: Boolean.TRUE });
}

function deactivateAdForm() {
  adForm.classList.add('ad-form--disabled');

  setAttributeNodes(filterAdFormNodes, { name: Attribute.DISABLED, value: Boolean.TRUE });
}

function activateMapFiltersForm() {
  mapFilters.classList.remove('map__filters--disabled');

  removeAttributeNodes(filterMapFiltersNodes, { name: Attribute.DISABLED });
}

function activateAdForm() {
  adForm.classList.remove('ad-form--disabled');

  removeAttributeNodes(filterAdFormNodes, { name: Attribute.DISABLED });
}

function deactivateForms() {
  deactivateMapFiltersForm();
  deactivateAdForm();
}

function activateForms() {
  activateMapFiltersForm();
  activateAdForm();
}

export { deactivateForms, activateForms };
