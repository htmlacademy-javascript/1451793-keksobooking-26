class Guest {
  static getPlural(n) {
    return new Intl.PluralRules('ru-RU').select(n);
  }

  static format(n) {
    switch (Guest.getPlural(n)) {
      case 'one': {
        return 'гостя';
      }
      case 'few': {
        return 'гостей';
      }
      case 'many': {
        return 'гостей';
      }
      default: {
        return 'гостей';
      }
    }
  }
}

export { Guest };
