function fibonacci(n){

    let counterClosure = function() {
        let firstNum = 0;
        let secondNum = 1;

        let getNext = function () {
            let newNumber = firstNum + secondNum;
            firstNum = secondNum;
            secondNum = newNumber;

            return firstNum;
        };

        return getNext;
    };

    let fibArray = [];
    let func = counterClosure();

    for (let i = 0; i < n; i++) {
        fibArray.push(func());
    }

    return fibArray;

};

console.log(fibonacci(15));