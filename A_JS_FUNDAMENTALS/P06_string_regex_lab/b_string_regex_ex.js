//1

function splitStringWithDelimiter(string, delimiter){
    string.split(delimiter).forEach(a => console.log(a));
}

//2

function repeatStringNTimes(string, n){
    console.log(string.repeat(n));
}

//3

function checkStartString(string, substring){
    console.log(string.startsWith(substring));
}

//4

function checkEndString(string, substring){
    console.log(string.endsWith(substring));
}

//5

function capitalizeWords(string){
    console.log(string.split(' ')
        .map(a =>
        a.substr(0, 1).toUpperCase() + a.substring(1).toLowerCase())
        .join(" "));
}

//6

function captureTheNumbers(string){
    let result = [];

    let pattern = /[0-9]+/g;

    for (let str of string) {
        let currentResult = str.match(pattern);

        if(currentResult != null){
            for (let i = 0; i < currentResult.length; i++) {
                result.push(currentResult[i]);
            }
        }
    }

    console.log(result.join(" "))

}

function findVariableNames(string) {

    let pattern = /\b_([a-zA-Z0-9]+)\b/g;
    let result = [];

    let matches = [];

    while(matches = pattern.exec(string)){
        result.push(matches[1]);
    }

    console.log(result.join(","));
}

//8

function findOccurrencesOfWord(string, word){
    let pattern = new RegExp('\\b'+word+'\\b', 'ig');
    console.log(string.match(pattern) == null ? 0 : string.match(pattern).length);
}

//9

function extractLinks(strings){
    let pattern = new RegExp('www\\.[a-zA-Z0-9-]+(?:\\.[a-z]+)+', 'g');

    for (let data of strings) {
        let result = [];
        while(result = pattern.exec(data)){
            console.log(result[0]);
        }
    }
}

//10
//todo

function secretData(text) {
    let namesPattern = new RegExp('\\*[A-Z][a-z]+\\b', 'g');
    let phone = new RegExp('\\+[0-9-]{10, 10}\\b', 'g');
    let id = new RegExp('\\![0-9A-Za-z]+\\b', 'g');
    let secretBase = new RegExp('_[0-9A-Za-z]+\\b', 'g');

    for (let data of text) {

    }
}








