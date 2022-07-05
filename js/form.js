const adForm = document.querySelector('.ad-form');

const avatar = adForm.querySelector('#avatar');
const title = adForm.querySelector('#title');
const address = adForm.querySelector('#address');
const type = adForm.querySelector('#type');
const price = adForm.querySelector('#price');
const timein = adForm.querySelector('#timein');
const timeout = adForm.querySelector('#timeout');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const features = adForm.querySelector('.features');
const description = adForm.querySelector('#description');
const images = adForm.querySelector('#images');
const submitButton = adForm.querySelector('.ad-form__submit');
const resetButton = adForm.querySelector('.ad-form__reset');

const mapFilters = document.querySelector('.map__filters');

const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelector('#housing-features');

function deactivateMapFiltersForm() {
  mapFilters.classList.add('map__filters--disabled');

  housingType.setAttribute('disabled', 'true');
  housingPrice.setAttribute('disabled', 'true');
  housingRooms.setAttribute('disabled', 'true');
  housingGuests.setAttribute('disabled', 'true');
  housingFeatures.setAttribute('disabled', 'true');
}

function deactivateAdForm() {
  adForm.classList.add('ad-form--disabled');

  avatar.setAttribute('disabled', 'true');
  title.setAttribute('disabled', 'true');
  address.setAttribute('disabled', 'true');
  type.setAttribute('disabled', 'true');
  price.setAttribute('disabled', 'true');
  timein.setAttribute('disabled', 'true');
  timeout.setAttribute('disabled', 'true');
  roomNumber.setAttribute('disabled', 'true');
  capacity.setAttribute('disabled', 'true');
  features.setAttribute('disabled', 'true');
  description.setAttribute('disabled', 'true');
  images.setAttribute('disabled', 'true');
  submitButton.setAttribute('disabled', 'true');
  resetButton.setAttribute('disabled', 'true');
}

function activateMapFiltersForm() {
  mapFilters.classList.remove('map__filters--disabled');

  housingType.removeAttribute('disabled');
  housingPrice.removeAttribute('disabled');
  housingRooms.removeAttribute('disabled');
  housingGuests.removeAttribute('disabled');
  housingFeatures.removeAttribute('disabled');
}

function activateAdForm() {
  adForm.classList.remove('ad-form--disabled');

  avatar.removeAttribute('disabled');
  title.removeAttribute('disabled');
  address.removeAttribute('disabled');
  type.removeAttribute('disabled');
  price.removeAttribute('disabled');
  timein.removeAttribute('disabled');
  timeout.removeAttribute('disabled');
  roomNumber.removeAttribute('disabled');
  capacity.removeAttribute('disabled');
  features.removeAttribute('disabled');
  description.removeAttribute('disabled');
  images.removeAttribute('disabled');
  submitButton.removeAttribute('disabled');
  resetButton.removeAttribute('disabled');
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
