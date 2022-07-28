import { deactivateForms } from './form.js';
import { mainMarker, renderMap, map } from './render-map.js';
import { setUserFormSubmit, resetAvatarPreview, resetPhotoPreview } from './form.js';
import { showModalError, showModalSuccess } from './show-modal.js';
import { CITY_CENTER_TOKYO } from './constants.js';
import { setDefaultSlider } from './price-slider.js';
import './validate-form.js';
import './price-slider.js';
import './filter-offers.js';
import './avatar.js';
import './photo.js';

deactivateForms();

renderMap();

setUserFormSubmit({
  onSuccess: () => {
    document.querySelector('.ad-form').reset();
    document.querySelector('.map__filters').reset();
    resetAvatarPreview();
    resetPhotoPreview();
    map.closePopup();
    map.setView(CITY_CENTER_TOKYO, 14);
    mainMarker.setLatLng(CITY_CENTER_TOKYO);
    setDefaultSlider();
    showModalSuccess();
  },
  onFail: showModalError,
});
