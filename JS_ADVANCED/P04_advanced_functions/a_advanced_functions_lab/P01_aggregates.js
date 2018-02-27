function aggregate(arr){

    console.log("Sum = " + reduce(arr, (a, b) => a + b));
    console.log("Min = " + reduce(arr, (a, b) => Math.min(a, b)));
    console.log("Max = " + reduce(arr, (a, b) => Math.max(a, b)));
    console.log("Product = " + reduce(arr, (a, b) => a * b));
    console.log("Join = " + reduce(arr, (a, b) => "" + a + b));

    function reduce(arr, func){
        let result = arr[0];

        for (let num of arr.slice(1)) {
            result = func(result, num);
        }

        return result;
    }

}


aggregate([2,3,10,5]);