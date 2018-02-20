//1

function printLetters(str){
    let idx = 0;
    str.split('').forEach(a => console.log(`str[${idx}] -> ${str[idx++]}`))
}

//2

function concatenateAndReverse(str){
    console.log(str.join('').split('').reverse().join(''));
}

//3

function countOccurrences(target, str) {
    let count = 0;
    let idx = 0;

    while(str.indexOf(target, idx) > -1){
        idx = str.indexOf(target, idx);
        count++;
        idx++;
    }

    console.log(count);

}

//4

function extractText(str){
    let arr = [];
    let searchIdx = 0;

    for (let i = 0; i < str.length; i++) {
        let string = '';
        if(str[i - 1] === "("){
            while(str[i] !== ")"){
                string = string + str[i];
                i++;
            }
        }

        if(string !== ''){
            arr.push(string);
        }
    }

    console.log(arr.join(", "));
}

//4

function extractText2(str){

    let result = [];
    let startIdx = 0;
    let endIdx = 0;
    let startSearch = 0;

    while(startIdx > -1 && endIdx > -1){
        startIdx = str.indexOf("(", startSearch);
        endIdx = str.indexOf(")", startSearch);

        if(startIdx < endIdx){
            result.push(str.substring(startIdx + 1, endIdx));
        }

        startSearch = Math.max(startSearch, endIdx) + 1;
    }

    console.log(result.join(", "))

}

//5

function aggregateTable(input){
    let sum = 0;
    let arr = [];

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i].split('|');
        currentLine = currentLine.filter(a => a !== '');
        arr.push(currentLine[0].trim());
        sum += Number(currentLine[1].trim());
    }

    console.log(arr.join(", "));
    console.log(sum);

}

//6

function restaurantBill(input){

    let food = [];
    let bill = 0;

    for (let i = 0; i < input.length; i+=2) {
        food.push(input[i]);
        bill += Number(input[i + 1])
    }

    console.log(`You purchased ${food.join(", ")} for a total sum of ${Math.round(bill * 100) / 100}`);

}

//7

function usernames(input){

    let usernames = [];

    for (let i = 0; i < input.length; i++) {
        let username = '';
        let tokens = input[i].split("@");
        username += tokens[0]+".";

        tokens[1].split(".").forEach(a => {username += a[0]});
        usernames.push(username);
    }

    console.log(usernames.join(", "));
}

//8

function censorship(string, array){
   array.forEach(a => {
       let newStr = "-".repeat(a.length);

       while(string.indexOf(a) > -1){
           string = string.replace(a, newStr);
       }
   });

    console.log(string);
}

//9

function escaping(str){
    let result = '<ul>\n';

    String.prototype.htmlEscape = function() {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    for (let i = 0; i < str.length; i++) {
        result += `    <li>${str[i].htmlEscape()}</li>\n`
    }

    result += '</ul>';

    console.log(result)

}

//10

function matchAllWords(str){
    let result = str.match(/[a-zA-Z0-9_]+/g);
    console.log(result.join('|'));
}

//11


function simpleEmailValidation(str){
    
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/g;

    console.log(regex.test(str) ? "Valid" : "Invalid");
}

//12

function expressionSplit(str) {
    str.split(/[(),;.\s]+/g).forEach(a => console.log(a));
}

//13

function matchTheDates(input){
   let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2,2})-([0-9]{4,4})\b/g;
   let resultArray = [];
   let match = '';

    for (let str of input) {
         while(match = pattern.exec(str)){
            resultArray.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
         }
    }

    console.log(resultArray.join("\n"));
}


//14

function employeeData(input) {
    let regex = /^([A-Z][a-zA-Z]*)\s-\s([1-9][0-9]*)\s-\s([a-zA-Z0-9- ]+)$/g;
    let result = [];

    for (let data of input) {
        let tokens = [];
        while(tokens = regex.exec(data)){
             result.push(`Name: ${tokens[1]}\nPosition: ${tokens[3]}\nSalary: ${tokens[2]}`);
        }
    }

    console.log(result.join("\n"));
}

//15

function formFiller(username, email, phoneNumber, textArray){

    textArray.forEach(line => {
        line = line.replace(/<![a-zA-Z]+!>/g, username);
        line = line.replace(/<@[a-zA-Z]+@>/g, email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g, phoneNumber);
        console.log(line);
    });

}

//16


