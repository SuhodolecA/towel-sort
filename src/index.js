
// First solution

// module.exports = function towelSort(matrix) {
//     if (!matrix || matrix.length === 0) {
//         return [];
//     }

//     let result = matrix[0];
//     for (let i = 1; i < matrix.length; i++) {
//         if (i % 2 !== 0) {
//             matrix[i].reverse()
//         }
//         for (let j = 0; j < matrix[i].length; j++) {
//             result.push(matrix[i][j])
//         }
//     }

//     return result;
// }

// Second solution
module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }
    return matrix.map((item, index) => {
        return index % 2 ? item.reverse() : item;
    }).flat();
}
