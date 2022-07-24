import { HOUSING_PRICE } from './constants.js';

class Filter {
  static isMatchByType(offerForCheck, type) {
    if (type !== 'any') {
      return offerForCheck.offer.type === type;
    }
    return true;
  }

  static isMatchByPrice(offerForCheck, price) {
    if (price !== 'any') {
      switch (price) {
        case 'low':
          return offerForCheck.offer.price < HOUSING_PRICE.range.low.to;
        case 'middle':
          return (
            offerForCheck.offer.price >= HOUSING_PRICE.range.middle.from &&
            offerForCheck.offer.price < HOUSING_PRICE.range.middle.to
          );

        case 'high':
          return offerForCheck.offer.price >= HOUSING_PRICE.range.high.from;
      }
    }
    return true;
  }

  static isMatchByRooms(offerForCheck, rooms) {
    if (rooms !== 'any') {
      return offerForCheck.offer.rooms === Number(rooms);
    }
    return true;
  }

  static isMatchByGuests(offerForCheck, guests) {
    if (guests !== 'any') {
      return offerForCheck.offer.guests === Number(guests);
    }
    return true;
  }

  static isMatchByFeatures(offerForCheck, features) {
    if (features.length !== 0) {
      return features.every((feature) => offerForCheck.offer.features?.includes(feature));
    }
    return true;
  }
}

export { Filter };
