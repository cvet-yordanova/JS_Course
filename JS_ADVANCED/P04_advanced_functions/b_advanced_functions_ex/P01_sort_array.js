function sortArray(arr, type){

    let sortingStrategies = {
            'asc': (a, b) => a - b,
            'desc': (a, b) => b - a
        };

   return (arr.sort(sortingStrategies[type]));

}

sortArray([14, 7, 17, 6, 8], 'asc');
