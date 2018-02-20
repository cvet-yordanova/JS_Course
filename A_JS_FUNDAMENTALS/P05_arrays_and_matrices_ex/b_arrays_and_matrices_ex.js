//1

function printArrayWithGivenDelimiter(input){
    let delimiter = input[input.length - 1];
    input.pop();

    console.log(input.join(delimiter));
}

//2
function printElementOnGivenStep(input){
    let step = input[input.length - 1];
    input.pop();

    console.log(input.filter((a, ind) => ind % step == 0).join("\n"));
}

//3

function addAndRemoveElements(input){
    let arr = [];

    for (let i = 0; i < input.length; i++) {
       if((input[i] == "add") || i == 0 ){
           let lastNum = arr[arr.length - 1];
           arr.push(i + 1);

       }else if (input[i] == "remove"){
           arr.pop();
       }
    }

    let result = arr.length == 0 ? "Empty" : arr.join("\n");
    console.log(result);

}

//4

function rotateArray(input){
    let countShifts = (input[input.length - 1]) % (input.length - 1) ;
    input.pop();


    for (let i = 0; i < countShifts; i++) {
        input.unshift(input[input.length - 1]);
        input.pop();
    }

    console.log(input.join(" "));
}

//5

function extractNonDecreasingSubsequenceFromArray(input){

    let biggestNumber = input[0];

    for (let i = 0; i < input.length; i++) {
        if(input[i] >= biggestNumber){
            biggestNumber = input[i];
            console.log(input[i]);
        }

    }
}

//6

function sortArray(input){
    console.log(input.sort((a, b) => {
        if(a.length != b.length) {
            if (a.length < b.length){
                return -1;
            }else {
                return 1;
            }
        } else {
            if(a > b ){
                return 1;
            }else {
                return -1;
            }
        }
    }).join("\n"));
}

//7

function magicMatrices(input){

    let areEqual = true;
    let sum = input[0].reduce((a, b) => a + b);

    for (let i = 0; i < input.length; i++) {
        let sumRow = 0;
        let sumCol = 0;

        for (let j = 0; j < input[i].length; j++) {
            sumRow += input[i][j];

            if(j < input.length){
                sumCol += input[j][i];
            }
        }

        if(sumRow != sum || sumCol != sum){
            areEqual = false;
            break;
        }

    }

    console.log(areEqual);
}

//8

function spiralMatrix(rowInput, colInput){

    let matrix = [];
    let counter = 1;

    for (let i = 0; i < rowInput; i++) {
        matrix.push([]);
    }

    let fillRectangle = function (row, row2, col, col2, matrix) {

        for (let i = col; i <= col2; i++) {
            matrix[row][i] = counter++;
        }

        for (let i = row + 1; i <= row2; i++) {
            matrix[i][col2] = counter++;
        }

        for (let i = col2 - 1; i >= col; i--) {
            matrix[row2][i] = counter++;
        }

        for (let i = row2 - 1; i > row; i--) {
            matrix[i][col] = counter++;
        }
    };

    let row = 0;
    let row2 = rowInput - 1;
    let col = 0;
    let col2 = colInput - 1;

    while(true){

        fillRectangle(row, row2, col, col2, matrix);

        if((row === row2) || (col === col2) || (row === matrix.length / 2 - 1) || (col === matrix[0].length / 2 - 1)) break;

        row++;
        row2--;
        col++;
        col2--;
    }


    matrix.forEach(a => console.log(a.join(" ")));

}

//9

function diagonalAttack(input){
    let arr = [];

    for (let i = 0; i < input.length; i++) {
        arr[i] = input[i].split(' ').map(a => Number(a));
    }

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        firstDiagonalSum += arr[i][i];
        secondDiagonalSum += arr[i][arr[i].length - i - 1]
    }

    if(firstDiagonalSum === secondDiagonalSum){
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if((i !== j) && (j !== arr[i].length - i - 1)){
                    arr[i][j] = firstDiagonalSum;
                }
            }
        }
    }

   arr.forEach(a => console.log(a.join(" ")));
}

//10

function orbit(input){

    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];

    let matrix = [];

    for (let i = 0; i < height; i++) {
        matrix.push([]);
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            matrix[i][j] = Math.max(Math.abs(x - i), Math.abs(y - j)) + 1;
        }
    }

    matrix.forEach(a => console.log(a.join(" ")))

}

orbit([3, 3, 2, 2]);
















