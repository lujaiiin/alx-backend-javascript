import Currency from './3-currency.js';

class Pricing {
 constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }

    this._amount = amount;
    this._currency = currency;
 }

 // Getter for amount
 get amount() {
    return this._amount;
 }

 // Setter for amount
 set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
 }

 // Getter for currency
 get currency() {
    return this._currency;
 }

 // Setter for currency
 set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
 }

 // Method to display full price information
 displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
 }

 // Static method to convert price
 static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
 }
}

// Export the Pricing class
module.exports = Pricing;
