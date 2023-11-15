import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  private conditions = {
    letters: /[a-zA-Z]/gm,
    digits: /[0-9]/gm,
    symbols: /[_\W]/gm,
  };

  constructor() {}

  private matchValue(value: string): number | 'empty' {
    let count = 0;
    if (value === '') return 'empty';
    if (value.length < 8) return 0;

    Object.values(this.conditions).forEach(item => {
      if (value.match(item)) {
        count += 1;
      }
    });
    return count;
  }

  validatePassword(value: string) {
    const conditionsCount = this.matchValue(value);
    let message: string;

    switch (conditionsCount) {
      case 'empty':
        message = 'empty';
        break;
      case 0:
        message = 'short';
        break;
      case 3:
        message = 'strong';
        break;
      case 2:
        message = 'medium';
        break;
      case 1:
        message = 'easy';
        break;
    }
    return message;
  }

  validateLanguage(value: string) {
    const reg = /[^\P{L}a-z][^a-z]*/giu;
    const test = value.match(reg);
    if (!!test) {
      alert('You can use only latin characters!');
      return false;
    }
  }
}
