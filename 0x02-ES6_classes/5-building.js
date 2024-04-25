// Import the Building class
import Building from './5-building.js';

class SkyHighBuilding extends Building {
 constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor with sqft
    this._floors = floors; // Store floors in an underscore-prefixed attribute
 }

 // Getter for sqft
 get sqft() {
    return this._sqft;
 }

 // Setter for sqft
 set sqft(value) {
    if (typeof value !== 'number') throw new TypeError('Sqft must be a number');
    this._sqft = value;
 }

 // Getter for floors
 get floors() {
    return this._floors;
 }

 // Override the evacuationWarningMessage method
 evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
 }
}

// Export the SkyHighBuilding class
export default SkyHighBuilding;