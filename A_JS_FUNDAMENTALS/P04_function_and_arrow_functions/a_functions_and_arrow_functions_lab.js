
function triangleOfStars(n){
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }

    for (let i = n - 1; i >= 1 ; i--) {
        console.log("*".repeat(i));
    }
}

function squareOfStars(n){
    for (let i = 1; i <= n; i++) {
        console.log("* ".repeat(n));
    }
}

function palindrome(input){

    let isPalindrome = true;

    for (let i = 0; i < input.length / 2; i++) {
        if(input[i] != input[input.length - i - 1]){
            isPalindrome = false;
        }

    }

    console.log(isPalindrome);
}

function dayOfWeek(str){
    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday'];

    console.log(arr.indexOf(str) > -1 ? arr.indexOf(str)+1 : "error");
}


function calculate(a, b, op) {

    let calc = function(a, b, operand) { return operand(a, b) };
    let add = function(a, b) { return a + b };
    let subtract = function(a, b) { return a - b };
    let multiply = function(a, b) { return a * b };

    let divide = function(a, b) { return a / b };
    switch (op) {
        case '+': return calc(a, b, add);
        case '-': return calc(a, b, subtract);
        case '*': return calc(a, b, multiply);
        case '/': return calc(a, b, divide);
    }
}

function aggregateElements(str){
    let sumElements = function(str){
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str[i];
        }

        return sum;
    };

    let concatElements = function(str){
        let result = '';

        for (let i = 0; i < str.length; i++) {
           result += (str[i].toString());
        }
        return result;
    };

    let sumInversed = function(str){
        let sum = 0;

        for (let i = 0; i < str.length; i++) {
            sum += Number(1 / str[i]);
        }

        return sum;
    };

    console.log(sumElements(str));
    console.log(sumInversed(str));
    console.log(concatElements(str));
}

function toUppercase(str){
    let text = str.split(/\W+/);

    text = text.filter(a => a != '');

    for (let i = 0; i < text.length; i++) {
       text[i] = text[i].toUpperCase();
    }

    console.log(text.join(', '));
}

toUppercase('Hi, how are you?');























