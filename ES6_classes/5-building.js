export default class Building {
  constructor(sqft){
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;

    let proto = this.constructor.prototype;
    while (proto && proto !== Building.prototype) {
      if (Object.getOwnPropertyNames(proto).includes('evacuationWarningMessage')) {
      return;
      }
      proto = Object.getPrototypeOf(proto);
    }
    if (this.constructor !== Building) {
      throw new Error('Classes extending Building must override evacuationWarningMessage')
    }
  }

  get sqft() {
    return this._sqft;
  }
}
