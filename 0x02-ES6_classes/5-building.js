import Building from './5-building';

export default class SkyHighBuilding extends Building {
 constructor(sqft, floors) {
    super(sqft); // Pass sqft to the parent class constructor
    this.floors = floors; // Use the setter to set the floors
 }

 get floors() {
    return this._floors;
 }

 set floors(floors) {
    if (typeof floors !== 'number') throw new TypeError('Floors must be a number');
    this._floors = floors;
 }

 evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
 }
}