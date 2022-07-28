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

const resetFilters = () => {
  filters['housing-type'] = 'any';
  filters['housing-price'] = 'any';
  filters['housing-rooms'] = 'any';
  filters['housing-guests'] = 'any';
  filters['housing-features'] = [];
};

const filterOffers = (offers) => {
  const mapFilters = document.querySelector('.map__filters');

  const onFilterChange = (evt) => {
    const checkedFeaturesNodes = mapFilters.querySelectorAll('[name=features]:checked');
    const filteredOffers = [];

    resetFilters();
    checkedFeaturesNodes.forEach((node) => {
      filters['housing-features'].push(node.value);
    });
    filters[evt.target.name] = evt.target.value;

    for (const offer of offers) {
      if (filteredOffers.length >= SIMILAR_OFFERS_COUNT) {
        break;
      }

      if (
        Filter.isMatchByType(offer, filters['housing-type']) &&
        Filter.isMatchByPrice(offer, filters['housing-price']) &&
        Filter.isMatchByRooms(offer, filters['housing-rooms']) &&
        Filter.isMatchByGuests(offer, filters['housing-guests']) &&
        Filter.isMatchByFeatures(offer, filters['housing-features'])
      ) {
        filteredOffers.push(offer);
      }
    }

    markerGroup.clearLayers();
    renderSimilarOffers(filteredOffers);
  };

  mapFilters.addEventListener('change', debounce(onFilterChange), RENDER_DELAY);
  mapFilters.addEventListener('reset', debounce(onFilterChange), RENDER_DELAY);
};

export { filterOffers };
