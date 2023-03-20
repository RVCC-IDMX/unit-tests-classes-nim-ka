/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/*
 * polygon.js
 * Language: javascript
 * Test: tests/geometry.test.js
 * Path: src/polygon.js
 *
 * Create a polygon class
 *
 */
/*
 * Define a Polygon class that has the following properties:
 *  1) A constructor that takes and stores an array describing
 *  the lengths of the polygon’s sides.
 *  2) the property called name  = 'Polygon'
 *  3) A count() method that returns the number of sides.
 *  4) A perimeter() method that returns the polygon’s perimeter.
 *  5) A sayName() method that returns the name of the polygon.
 *
 */

/**
 * Polygon class
 * @class Polygon
 * @constructor Polygon constructor function
 * @param {array} sides - array of integer values describing the
 * @property {string} name - name of the polygon
 */
class Polygon {
  constructor(sides) {
    this.sides = sides;
    this.sum = this.sides.reduce((a, b) => a + b);
  }

  /**
   * @returns {number} - number of sides
   */
  count() {
    return this.sides.length;
  }

  /**
   * @method isValid
   * @returns {boolean} true if all the side lengths are > 0
   */
  isValid() {
    return this.sides.every((e) => e > 0);
  }

  /**
   * @returns {number} - value of the perimeter (sum of all sides)
   */
  perimeter() {
    return this.sum;
  }

  /**
   * @returns {string} - name of the polygon
   */
  sayName() {
    return this.constructor.name;
  }
}

module.exports = {
  Polygon,
};
