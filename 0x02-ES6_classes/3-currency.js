class Currency {
   constructor(code, name) {
      if (typeof code !== 'string') {
         throw new TypeError('Code must be a string');
      }
      if (typeof name !== 'string') {
         throw new TypeError('Name must be a string');
      }
      
      this._code = code;
      this._name = name;
   }
   
   get code() {
      return this._code;
   }

 // Setter for code
   set code(value) {
      if (typeof value !== 'string') {
         throw new TypeError('Code must be a string');
      }
      this._code = value;
   }

 // Getter for name
   get name() {
      return this._name;
   }

 // Setter for name
   set name(value) {
      if (typeof value !== 'string') {
         throw new TypeError('Name must be a string');
      }
      this._name = value;
   }
   
   // Method to display full currency information
   displayFullCurrency() {
      return `${this._name} (${this._code})`;
   }
}

module.exports = Currency;
