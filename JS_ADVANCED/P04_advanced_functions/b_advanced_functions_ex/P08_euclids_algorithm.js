function findGreatestCommonDivisor(num1, num2){

    let greater = Math.max(num1, num2);
    let smaller = Math.min(num1, num2);


    while(Math.max(greater, smaller) % (Math.min(greater, smaller)) !== 0){
        result = Math.max(greater, smaller) % (Math.min(greater, smaller));
        greater = smaller;
        smaller = result;
    }

    return Math.min(greater, smaller);

}

findGreatestCommonDivisor(456789,987654);