/*Реализовать класс RangeValidator
У него будет только два свойства, два числа:
from,
to

От и до. Оба числа. "До" не может быть меньше, чем "от".

Задание:
1. Реализовать геттеры и сеттеры для обоих свойств
2. Реализовать геттер range, который будет возвращать массив всех целых чисел в заданном этими from-to диапазоне
3. Реализовать метод validate, который будет принимать число и проверять, входит ли оно в указанный диапазон чисел, если нет - кидать ошибку.
*/

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  set from(value) {
    if (typeof value !== 'number') {
      throw new TypeError('from must be a number');
    }
    if (value > this._to) {
      throw new RangeError('from must be lower a to');
    }
    this._from = value;
  }

  get from() {
    return this._from;
  }

  set to(value) {
    if (typeof value !== 'number') {
      throw new TypeError('to must be a number');
    }
    if (value < this._from) {
      throw new RangeError('to must be bigger a from');
    }
    this._to = value;
  }

  get to() {
    return this._to;
  }

  get range() {
    const rangeArray = [];
    for (let i = this._from; i <= this._to; i++) {
      rangeArray.push(i);
    }
    return rangeArray;
  }

  validate(number) {
    if (typeof number !== 'number') {
      throw new RangeError('input value must be a number');
    }
    if (number < this._from || number > this._to) {
      throw new RangeError(`input number is out range`);
    }
    return `input number is IN range`;
  }
}
