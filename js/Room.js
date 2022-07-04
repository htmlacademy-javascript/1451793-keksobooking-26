class Room {
  static getPlural(n) {
    return new Intl.PluralRules('ru-RU').select(n);
  }

  format(n) {
    switch (Room.getPlural(n)) {
      case 'one': {
        return 'комната';
      }
      case 'few': {
        return 'комнаты';
      }
      case 'many': {
        return 'комнат';
      }
      default: {
        return 'комнаты';
      }
    }
  }
}

export { Room };
