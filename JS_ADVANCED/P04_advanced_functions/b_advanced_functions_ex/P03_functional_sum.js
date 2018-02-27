let result = (function (){
    let sum = 0;

    return function innerAdd(num){
        sum += num;

        innerAdd.toString = function () {
            return sum
        };

        return innerAdd;
    }

})();

console.log(result(1)(6)(-3).toString());