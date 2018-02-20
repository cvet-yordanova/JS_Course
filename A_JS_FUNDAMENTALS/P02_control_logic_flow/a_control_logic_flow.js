
//1
function multiplyNumbers(a, b){
    console.log(a * b);
}

//2
function boxesAndBottles(bottles, boxes){
    console.log(Math.ceil(bottles / boxes));

}

//3
function leapYear(year){
    let leapYear = false;

    if((year % 2 == 0 && year % 100 != 0) || (year % 400 == 0)){
        leapYear = true;
    }

    let result = leapYear === false ? 'no' : 'yes';
    console.log(result);
}

//4

function circleArea(r){
    let area = Math.PI * Math.pow(r, 2);
    console.log(area);
    console.log(Math.round(area * 100) / 100);
}


//5

function triangleArea(a, b, c){
    let semiPerimeter = (a + b + c) / 2;

    let perimeter = Math.sqrt(semiPerimeter*(semiPerimeter - a)*(semiPerimeter - b)*(semiPerimeter - c));
    console.log(perimeter)
}

//6 cone

function cone(radius, height){
    let baseSurface = Math.PI * Math.pow(radius, 2);
    let volume = baseSurface / 3 * height;
    let lateralSurface = Math.PI * radius * Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));

    console.log(volume);
    console.log(lateralSurface + baseSurface);

}

//7
function oddEvenChecker(number){

    let result = 'invalid';
    if(number === Number.parseInt(number, 10)){
        if(number % 2 == 0){
            result = 'even';
        }else {
            result = 'odd';
        }
    }

    console.log(result);
}


//8

function fruitsOrVegetables(input){
    let result = 'unknown';

    switch (input){
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach': result = 'fruit';
        break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley': result = 'vegetable';
        break;
        default: result = 'unknown';
    }

    console.log(result);
}


//9

function colorfulNumbers(number){

    console.log('<ul>\n');
    for (let i = 1; i <= number; i++) {

        let color = i % 2 == 0 ? 'blue' : 'green';
        console.log(` <li><span style='color:${color}'>${i}</span></li>\n`)

    }

    console.log('</ul>\n');
}

//11

function binaryLogarithm(nums) {


    for (let x of nums) {


        console.log(Math.log2(x));


    }


}

function primeChecker(number) {

    let result = true;

    let divisibleByTwo = number % 2 == 0;
    let divisibleByThree = number % 3 == 0;
    let divisibleByFive = number % 5 == 0;

    if((divisibleByTwo || divisibleByThree || divisibleByFive) && number != 2 && number != 3 && number != 5 && number != 1){
        result = false;
    }

    console.log(result)
}

primeChecker(1);

function isPrime(num) {


    let prime = true;


    for (let d = 2; d <=


    Math.sqrt(num); d++) {


        if (num % d == 0) {


            prime = false;


            break;


        }


    }


    return prime && (num > 1);


}








