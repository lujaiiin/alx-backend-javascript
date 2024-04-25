import Building from './5-building.js';

class SkyHighBuilding extends Building {
 constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
 }

 // Getter for sqft
 get sqft() {
    return this._sqft;
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