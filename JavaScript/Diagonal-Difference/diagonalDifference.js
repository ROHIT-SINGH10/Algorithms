// [SHORT DESCRIPTION HERE]
//[LANGUAGE] Javascript ES6+
// Author: @Humiditii

/*
    Accepts a square matrix and take the sum of the diagonals then subtracting it
*/


/* Matrix form must be like this
    matrix [ [x11, x12, x3 ] 
            [x21, x22, x23] 
            [x31, x32, x33] ]

    square matrix only

*/
/**
 * 
 * @param {Object} matrix 
 */
const diagonalDifference = ( matrix ) => {

    if (typeof matrix != 'object') {
        const message =  'Matrix format not supported';
        // return message
        console.log(message)
    }else{
        const row = matrix.length;
        const errorShape = []
        for (const index in matrix) {
           if (matrix[index].length != row) {
               errorShape.push(index)
           }
        }
        if (errorShape.length !== 0) {
            const message = 'Mismatch number columns in the following row '+ errorShape
            //return messaged
            console.log(message)
        }else{
            const lrDiagonal = []
            const rlDiagonal = []
        
            for (let key in matrix) {
                rlDiagonal.push(matrix[key][matrix.length-1-key])
                lrDiagonal.push(matrix[key][key++])
                // console.log(matrix[key][matrix.length-1-key], matrix[key][key++])
            }

            const sumLr = lrDiagonal.reduce( (a,b) => a+b, 0 )

            const sumRl = rlDiagonal.reduce( (a,b) => a+b, 0 )

            const difference = sumLr - sumRl
        
            // return difference  
            console.log(difference)   
        }
    }
}

// diagonalDifference( [ 
//                     [21, 33, 19 ], 
//                     [19, 8, 6],
//                     [22,31,10] 
//                      ] )

// diagonalDifference(1,2,3,4)