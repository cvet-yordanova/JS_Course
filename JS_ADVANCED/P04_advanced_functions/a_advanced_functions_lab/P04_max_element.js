function maxElement1(arr){
    return (Math.max(...arr))
}
function maxElement2(arr){
    return (Math.max.apply('', arr))
}


console.log(maxElement2([10, 20, 5]));