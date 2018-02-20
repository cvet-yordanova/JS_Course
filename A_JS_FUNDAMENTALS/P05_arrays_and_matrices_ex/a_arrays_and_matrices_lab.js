//1

function sumFirstLast(input){
    console.log(Number(input[0]) + Number(input[input.length - 1]));
}

//2
function evenPositionElements (input){
    console.log(input.filter((element, index) => {
        return index % 2 == 0;
    }).join(" "));
}

//3

function negativePositiveNumbers (input){
    let resultArr = [];

    for (let i = 0; i < input.length; i++) {

        if(Number(input[i]) >= 0) {
            resultArr.push(Number(input[i]));
        }else {
            resultArr.unshift(Number(input[i]));
        }

    }

    console.log(resultArr.join('\n'));

}

//4

function firstAndLastKElements(input){
    console.log(input.slice(1, input[0] + 1).join(' '));
    console.log(input.slice(input.length - input[0]).join(' '));
}

//5

function lastKNumbersSequence(n, k){
    let result = [];
    result.length = n;
    result[0] = 1;

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let counter = 1;

        for (let j = 0; j < k; j++) {
            let ind = i - counter;
            if(ind == -1) break;

            sum += result[ind];
            counter++;
        }

        result[i] = sum;
    }

    console.log(result.join(" "));
}

//6


function processOddNumbers(input){
    console.log(input.filter((a, ind) => ind % 2 !== 0).map(a => a * 2).reverse().join(" "));;
}

// 7

function smallestTwoNumbers(input){
        console.log(input.sort((a,b) => a - b).slice(0, 2).join(" "));
}

// 8

function biggestElement(input){

    console.log(
        input.map(arr => arr.sort((a, b) => b - a)[0])
            .sort((a, b) => b - a)[0]
    );
}


function diagonalSum(input){

    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    for ( i = 0; i < input.length; i++) {
        sumFirstDiagonal += input[i][i];
        sumSecondDiagonal += input[i][input.length - i - 1];
    }

    console.log(sumFirstDiagonal + " " + sumSecondDiagonal);

}

//todo

function equalNeighbors(input){
    let countPairs = 8;

    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 0; j < input[i].length - 1; j++) {
            if(input[i][j] === input[i][j + 1]){
                countPairs++;
            }

            if(input[i + 1][j] === input[i + 1][j + 1]){
                countPairs++;
            }

        }

    }

    console.log(countPairs);
}

equalNeighbors([[['test', 'test', 'test', 'test'],
        ['well', 'done', 'yo', '6'],
        ['not', 'done', 'yet', '5']]
    ]
);




































