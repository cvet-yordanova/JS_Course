let solve = (function calculateVectors() {

    let operations = {
        add: (vec1, vec2) => {
            return [Number(vec1[0]) + Number(vec2[0]), Number(vec1[1]) + Number(vec2[1])]
        },
        multiply: (vec1, scalar) => {
            return [Number(vec1[0]) * Number(scalar), Number(vec1[1] * Number(scalar))]
        },
        length: (vec1) => {
            return Math.sqrt(Math.pow(Number(vec1[0]), 2) + Math.pow(Number(vec1[1]), 2))
        },
        dot: (vec1, vec2) => {
            return Number(vec1[0]) * Number(vec2[0]) + Number(vec1[1]) * Number(vec2[1])
        },
        cross: (vec1, vec2) => {
            return Number(vec1[0]) * Number(vec2[1]) - Number(vec1[1]) * Number(vec2[0])
        }
    };

    return operations;

})();

console.log(solve.add([1, 1], [1, 0]));
console.log(solve.multiply([3.5, -2], 2));
console.log(solve.length([3, -4]));
console.log(solve.dot([1, 0], [0, -1]));
console.log(solve.cross([3, 7], [1, 0]));
console.log(solve.dot([2, 3], [2, -1]));