// [SHORT DESCRIPTION HERE]
//[LANGUAGE] Javascript ES6+
// Author: @Humiditii

/*
    Solving two unknown simultaneous equation
*/

/**
 * 
 * @param {Number} y1 
 * @param {Number} z1 
 * @param {Number} x2 
 * @param {Number} y2 
 * @param {Number} z2 
 * @returns {Object}
 */

const simult = (x1, y1, z1, x2, y2, z2) => {
    if (x1 == NaN && x2 == NaN && y1 == NaN && y2 == NaN && z1 == NaN && z2 == NaN){
        const err = new Error('Parameters must be number')
        throw err;
    }else{
       let determinant,xdeterminant,ydeterminant, x, y;

       determinant = (x1 * y2) - (y1 * x2);

       xdeterminant = (z1* y2) - (y1 * z2);

       ydeterminant = (x1 * z2) - ( z1 *  x2);

       x = xdeterminant/determinant;

       y = ydeterminant/determinant

       const solution = {
           X: x,
           Y: y
       }

       return solution;
    }
}
