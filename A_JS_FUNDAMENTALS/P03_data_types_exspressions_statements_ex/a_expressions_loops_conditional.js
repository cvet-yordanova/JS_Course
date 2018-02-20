
//2
function helloJavascript(name){
    console.log(`Hello, ${name}, I am JavaScript!`);
}

//3
function areaAndPerimeter(a, b){
    console.log(a * b);
    console.log(2 * a + 2 * b);
}

function distanceOverTime(input){

    let time = Number(input[2]) / 3600;

    let s1 = Number(input[0]) * time;
    let s2 = Number(input[1]) * time;

    console.log(Math.abs(s1 - s2) * 1000);

}

function distance3D(input){
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let z1 = Number(input[2]);
    let x2 = Number(input[3]);
    let y2 = Number(input[4]);
    let z2 = Number(input[5]);

    let a = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let b = Math.abs(z2 - z1);
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    console.log(c);


}

function gradsToDegrees(grads){
    console.log(400 % (grads * 400 / 360));
}

function rounding(input){
    let number = Number(input[0]);
    let decimalPlace = Number(input[1]);

    let zeros = '';

    for (let i = 0; i < decimalPlace; i++) {

        zeros += '0';

    }

    let multiplier = Number('1' + zeros);

    console.log(Math.round(number * multiplier) / multiplier);
}

function imperialUnits(input){
    let wholePart = Math.floor(Number(input) / 12);
    let left = input % 12;
    console.log(wholePart + "'-" + left + '"' );
}

function nowPlaying(input){
    console.log(`Now Playing: ${input[1]} - ${input[0]} [${input[2]}]`);
}

function composeTag(input){
    console.log(`<img src="${input[0]}" alt="${input[1]}">`)
}

function binaryToDecimal(input) {
    console.log(parseInt(input, 2));
}


function assignProperties(input){
    let obj = null;

    obj = {[input[0]]: input[1], [input[2]]: input[3], [input[4]]: input[5]};

    console.log(obj);

}

function lastMonth(input){
    let day = input[0];
    let month = input[1];
    let year = input[2];

    let oneDay = 60 * 60 * 24 * 1000;
    let removeTime = oneDay * day;

    let date = new Date(year, month - 1, day);
    let newDate = new Date(date.getTime() - removeTime);

    console.log(newDate.getDate())
}

function biggestOfThreeNumbers(input){
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNum = Number(input[2]);

    let firstMax = Math.max(firstNum, secondNum, thirdNum);
    console.log(firstMax);

}

function pointInRectangle(input){
    //x, y, xMin, xMax, yMin,

    let x = input[0];
    let y = input[1];
    let minX = input[2];
    let maxX = input[3];
    let minY = input[4];
    let maxY = input[5];

    let checkX = x >= minX && x <= maxX;
    let checkY = y >= minY && y <= maxY;

    console.log((checkX && checkY) ? "inside" : "outside");
}

function oddNumbersOneToN(number){

    for (let i = 1; i <= number; i++) {
        if(i % 2 !== 0){
            console.log(i);
        }
    }

}

function triangleOfDollars(number){
    for (let i = 1; i <= number; i++) {
        console.log(new Array(i + 1).join("$"))
    }
}

function quadraticEquation(a, b, c){
    let firstNum = Number(a);
    let secondNum = Number(b);
    let thirdNum = Number(c);

    let firstRoot = -1;
    let secondRoot = -1;



    let diskriminanta = Math.pow(secondNum, 2) - 4 * firstNum * thirdNum;

    if(diskriminanta > 0){
        firstRoot = (secondNum * (-1) + Math.sqrt(diskriminanta)) / (2 * firstNum);
        secondRoot = (secondNum * (-1) - Math.sqrt(diskriminanta)) / (2 * firstNum);

        console.log(Math.min(firstRoot, secondRoot));
        console.log(Math.max(firstRoot, secondRoot));
    } else if(diskriminanta == 0){
        firstRoot = (secondNum * (-1) + Math.sqrt(diskriminanta)) / 2 * firstNum;
        console.log(firstRoot)
    } else if (diskriminanta < 0){
        console.log("No");
    }
}

//18

function  moviePrices(input) {
    let movie = input[0].toLowerCase();
    let day = input[1].toLowerCase();



    if(movie == "the godfather"){
        switch (day) {
            case 'monday':
                return 12;
                break;
            case 'tuesday':
                return 10;
                break;
            case 'wednesday':
                return 15;
                break;
            case 'thursday':
                return 12.50;
                break;
            case 'friday':
                return 15;
            case 'saturday':
                return 25;
            case 'sunday':
                return 30;
                break;
            default: return "error";

        }
    } else if(movie == "schindler's list"){
        switch (day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                return 8.50;
            case 'saturday':
            case 'sunday':
                return 15;
                break;
            default: return "error";

        }
    } else if(movie == "casablanca"){
        switch (day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                return 8;
            case 'saturday':
            case 'sunday':
                return 10;
                break;
            default: return "error";

        }
    } else if(movie == "the wizard of oz"){
        switch (day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                return 10;
            case 'saturday':
            case 'sunday':
                return 15;
                break;
            default: return "error";

        }
    } else {
        return "error";
    }

}

console.log(moviePrices(['The Godfather', 'Friday']));


function multiplicationTable(number){

    let firstLine = `<table border="1">`;
    console.log(firstLine);

    let secondLine = "<tr><th>x</th>";

    for (let i = 1; i <= number; i++) {
        secondLine += `<th>${i}</th>`;
    }

    console.log(secondLine + "</tr>");

    for (let i = 1; i <= number; i++) {
        let str = `<tr><th>${i}</th>`;
        for (let j = 1; j <= number; j++) {
            str += `<td>${i * j}</td>`;
        }
        console.log(str + "</tr>")
    }

    console.log("</table>");
}


function figureOfFourSquares(number){
    let dashLine = "+" + "-".repeat(number - 2) + "+" + "-".repeat(number - 2) + "+";

    let hoseLine = "|" + " ".repeat(number - 2) + "|" + " ".repeat(number - 2) + "|";
    let countLines = number % 2 == 0 ? number - 1 : number;

    for (let i = 0; i < countLines; i++) {
        if((i == 0) || (i == Math.floor(countLines / 2)) || (i == countLines - 1)){
            console.log(dashLine);
        }
        else {
            console.log(hoseLine);
        }
    }
}

function gradToDegrees(grad){
    grad = grad % 400;
    let degree = grad * 0.9;
    return degree < 0 ? 360 + degree : degree;
}
























