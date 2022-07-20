import { Attribute, Boolean } from './constants.js';
import { pristine } from './validate-form.js';
import { sendFormData } from './api.js';
import { mainMarker, map } from './render-map.js';
import { CITY_CENTER_TOKYO } from './constants.js';
import { setDefaultSlider } from './price-slider.js';

const adForm = document.querySelector('.ad-form');
const submitButton = adForm.querySelector('.ad-form__submit');
const resetButton = adForm.querySelector('.ad-form__reset');

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

const setAttributeNodes = ({ nodes, attribute }) => {
  const keys = Object.keys(nodes);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const node = nodes[key];
    node.setAttribute(attribute.name, attribute.value);
  }
};

const removeAttributeNodes = ({ nodes, attribute }) => {
  const keys = Object.keys(nodes);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const node = nodes[key];
    node.removeAttribute(attribute.name);
  }
};

const deactivateMapFiltersForm = () => {
  mapFilters.classList.add('map__filters--disabled');

  setAttributeNodes({
    nodes: filterMapFiltersNodes,
    attribute: { name: Attribute.DISABLED, value: Boolean.TRUE },
  });
};

const deactivateAdForm = () => {
  adForm.classList.add('ad-form--disabled');

  setAttributeNodes({
    nodes: filterAdFormNodes,
    attribute: { name: Attribute.DISABLED, value: Boolean.TRUE },
  });
};

const activateMapFiltersForm = () => {
  mapFilters.classList.remove('map__filters--disabled');

  removeAttributeNodes({ nodes: filterMapFiltersNodes, attribute: { name: Attribute.DISABLED } });
};

const activateAdForm = () => {
  adForm.classList.remove('ad-form--disabled');

  removeAttributeNodes({ nodes: filterAdFormNodes, attribute: { name: Attribute.DISABLED } });
};

const deactivateForms = () => {
  deactivateMapFiltersForm();
  deactivateAdForm();
};

const activateForms = () => {
  activateMapFiltersForm();
  activateAdForm();
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setUserFormSubmit = ({ onSuccess, onFail }) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      blockSubmitButton();
      sendFormData({
        onSuccess,
        onFail,
        onFinally: unblockSubmitButton,
        body: formData,
      });
    }
  });
};

resetButton.addEventListener('click', () => {
  adForm.reset();
  map.closePopup();
  map.setView(CITY_CENTER_TOKYO, 14);
  mainMarker.setLatLng(CITY_CENTER_TOKYO);
  setDefaultSlider();
});

export { deactivateForms, activateForms, setUserFormSubmit };
