import { SIMILAR_OFFERS_COUNT, HOUSING_PRICE } from './constants.js';
import { renderSimilarOffers } from './render-map.js';
import { markerGroup } from './render-map.js';

const filters = {
  'housing-type': 'any',
  'housing-price': 'any',
  'housing-rooms': 'any',
  'housing-guests': 'any',
  'housing-features': [],
};

const filterOffers = (offers) => {
  const mapFilters = document.querySelector('.map__filters');

  const filterByType = (offersForFilter, type) => {
    let filteredByTypeOffers = offersForFilter;
    if (type !== 'any') {
      filteredByTypeOffers = offersForFilter.filter((offer) => offer.offer.type === type);
    }
    return filteredByTypeOffers;
  };

  const filterByPrice = (offersForFilter, price) => {
    let filteredByPriceOffers = offersForFilter;
    if (price !== 'any') {
      switch (price) {
        case 'low':
          filteredByPriceOffers = offersForFilter.filter(
            (offer) => offer.offer.price < HOUSING_PRICE.range.low.to,
          );
          break;
        case 'middle':
          filteredByPriceOffers = offersForFilter.filter(
            (offer) =>
              offer.offer.price >= HOUSING_PRICE.range.middle.from &&
              offer.offer.price < HOUSING_PRICE.range.middle.to,
          );
          break;
        case 'high':
          filteredByPriceOffers = offersForFilter.filter(
            (offer) => offer.offer.price >= HOUSING_PRICE.range.high.from,
          );

          break;
      }
    }
    return filteredByPriceOffers;
  };

  const filterByRooms = (offersForFilter, rooms) => {
    let filteredByRoomsOffers = offersForFilter;
    if (rooms !== 'any') {
      filteredByRoomsOffers = offersForFilter.filter(
        (offer) => offer.offer.rooms === Number(rooms),
      );
    }
    return filteredByRoomsOffers;
  };

  const filterByGuests = (offersForFilter, guests) => {
    let filteredByGuestsOffers = offersForFilter;
    if (guests !== 'any') {
      filteredByGuestsOffers = offersForFilter.filter(
        (offer) => offer.offer.guests === Number(guests),
      );
    }
    return filteredByGuestsOffers;
  };

  const filterByFeatures = (offersForFilter, features) => {
    let filteredByFeaturesOffers = offersForFilter;
    if (features.length !== 0) {
      filteredByFeaturesOffers = offersForFilter.filter((offer) =>
        features.every((feature) => offer.offer.features?.includes(feature)),
      );
    }
    return filteredByFeaturesOffers;
  };

  const onChangeFilter = (evt) => {
    const checkedFeaturesNodes = mapFilters.querySelectorAll('[name=features]:checked');
    filters['housing-features'] = [];
    checkedFeaturesNodes.forEach((node) => {
      filters['housing-features'].push(node.value);
    });
    filters[evt.target.name] = evt.target.value;
    let filteredOffers = offers;
    filteredOffers = filterByType(filteredOffers, filters['housing-type']);
    filteredOffers = filterByPrice(filteredOffers, filters['housing-price']);
    filteredOffers = filterByRooms(filteredOffers, filters['housing-rooms']);
    filteredOffers = filterByGuests(filteredOffers, filters['housing-guests']);
    filteredOffers = filterByFeatures(filteredOffers, filters['housing-features']);
    markerGroup.clearLayers();
    renderSimilarOffers(filteredOffers.slice(0, SIMILAR_OFFERS_COUNT));
  };

  mapFilters.addEventListener('change', onChangeFilter);
};

export { filterOffers };
