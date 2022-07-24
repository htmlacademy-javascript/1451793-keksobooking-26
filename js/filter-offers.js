import { SIMILAR_OFFERS_COUNT, RENDER_DELAY } from './constants.js';
import { renderSimilarOffers } from './render-map.js';
import { markerGroup } from './render-map.js';
import { debounce } from './utils.js';
import { Filter } from './Filter.js';

const filters = {
  'housing-type': 'any',
  'housing-price': 'any',
  'housing-rooms': 'any',
  'housing-guests': 'any',
  'housing-features': [],
};

const filterOffers = (offers) => {
  const mapFilters = document.querySelector('.map__filters');

  const onChangeFilter = (evt) => {
    const checkedFeaturesNodes = mapFilters.querySelectorAll('[name=features]:checked');
    filters['housing-features'] = [];
    checkedFeaturesNodes.forEach((node) => {
      filters['housing-features'].push(node.value);
    });
    filters[evt.target.name] = evt.target.value;

    const filteredOffers = offers.filter(
      (offer) =>
        Filter.isMatchByType(offer, filters['housing-type']) &&
        Filter.isMatchByPrice(offer, filters['housing-price']) &&
        Filter.isMatchByRooms(offer, filters['housing-rooms']) &&
        Filter.isMatchByGuests(offer, filters['housing-guests']) &&
        Filter.isMatchByFeatures(offer, filters['housing-features']),
    );

    markerGroup.clearLayers();
    renderSimilarOffers(filteredOffers.slice(0, SIMILAR_OFFERS_COUNT));
  };

  mapFilters.addEventListener('change', debounce(onChangeFilter), RENDER_DELAY);
};

export { filterOffers };
