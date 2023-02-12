
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let sortedMatrix = []
    if (matrix === undefined) {
        return sortedMatrix
    }
    for (i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            sortedMatrix = sortedMatrix.concat([...matrix[i]])
        } else {
            sortedMatrix = sortedMatrix.concat([...matrix[i]].reverse())
        }
    }
    return sortedMatrix
};
