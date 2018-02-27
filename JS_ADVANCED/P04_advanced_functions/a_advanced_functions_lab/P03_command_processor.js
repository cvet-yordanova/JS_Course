function commandProcessor(arr){

    let result = '';

    let closure = (function(){
        return{
            append: (str) => result += str,
            removeStart: (n) => result = result.substring(n),
            removeEnd: (n) => result  = result.substring(0, result.length - n),
            print: () => console.log(result)
        }
    })();

    for (let str of arr) {
        let [operation, arg] = str.split(" ");
        closure[operation](arg);
    }

}

commandProcessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
)