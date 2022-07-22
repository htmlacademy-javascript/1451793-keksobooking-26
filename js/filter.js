import { SIMILAR_OFFERS_COUNT } from './constants.js';
import { renderSimilarOffers } from './render-map.js';
import { markerGroup } from './render-map.js';

const filterOffers = (offers) => {
  const filterByType = document.querySelector('#housing-type');

  const onChangeFilter = (evt) => {
    let filteredByTypeOffers = offers;
    if (evt.target.value !== 'any') {
      filteredByTypeOffers = offers.filter((offer) => offer.offer.type === evt.target.value);
    }
    markerGroup.clearLayers();
    renderSimilarOffers(filteredByTypeOffers.slice(0, SIMILAR_OFFERS_COUNT));
  };

  filterByType.addEventListener('change', onChangeFilter);
};

export { filterOffers };
