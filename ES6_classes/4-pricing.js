import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be instance of a Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }
  set amount(value){
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value
  }
  get currency() {
    return this._currency;
  }
  set currency(value){
    if (typeof value !== Currency) {
      throw new TypeError('Amount must be an instance of a Currency');
    }
    this._currency = value
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number'){
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}
