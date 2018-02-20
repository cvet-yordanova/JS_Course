
//1
function sumNumbers(a, b, c){
    console.log(a + b + c);
}

//2
function sumVat(input){
    let sum = 0;
    for (let obj of input) {
        sum += obj;
    }

    console.log("sum = " + sum);
    console.log("VAT = " + sum*0.20);
    console.log("total = " + sum*1.20);

}

//3
function letterOccurences(text, toFind) {

    let counter = 0;

    for (let letter of text) {
        if(letter === toFind){
            counter++;
        }
    }

    console.log(counter);

}

//4
function filterByAge(minAge, firstName, firstAge, secondName, secondAge){

    let firstObj = {name: firstName, age: firstAge};
    let secondObj = {name: secondName, age: secondAge};

    if(firstObj.age >= minAge) {
        console.log(firstObj);
    }

    if(secondObj.age >= minAge) {
        console.log(secondObj);
    }
}

//5
function stringOfNumbers(input){
    let number = Number(input);

    let string = '';

    for (let i = 1; i <= number; i++) {
        string += i;
    }

    console.log(string);
}


function figureArea(w, h, W, H) {
    let [s1, s2, s3] = [w * h, W * H,
        Math.min(w, W) * Math.min(h, H)];
    return s1 + s2 - s3;
}

function nextDate(year, month, day){
    let oneDay = 60 * 60 * 24 * 1000;
    let date = new Date(year, month - 1, day);
    let newDate = new Date(date.getTime() + oneDay);
    console.log(newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate());
}

function calcNextDay(year, month, day)  {
    let date = new Date(year, month-1, day);
    let oneDay = 24 * 60 * 60 * 1000; // milliseconds in 1 day
    let nextDate = new Date(date.getTime() + oneDay);
    return nextDate.getFullYear() + "-" +
        (nextDate.getMonth() + 1) + '-' +
        nextDate.getDate();
}

function distanceBetweenTwoPoints(x1, y1, x2, y2){

    let pointA = {x:x1, y:y1};
    let pointB = {x:x2, y:y2};

    let distanceX = Math.pow(pointB.x - pointA.x, 2);
    let distanceY = Math.pow(pointB.y - pointA.y, 2);
    console.log(Math.sqrt(distanceX + distanceY));
}


distanceBetweenTwoPoints(2.34, 15.66, -13.55, -2.9985);


















