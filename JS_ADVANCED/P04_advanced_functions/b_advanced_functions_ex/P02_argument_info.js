//todo
function getArgumentInfo(){

    let statistics = {};

    for (let argument of arguments) {
        console.log(`${typeof argument}: ${argument}`);

        if(!statistics[typeof argument]){
            statistics[typeof argument] = 1;
        }else{
            statistics[typeof argument]++;
        }
    }

    let arr = [];

    for (let currentType in statistics) {
        arr.push([currentType, statistics[currentType]]);
    }

    arr.sort((a, b) => b[1] - a[1])
        .forEach((a) => console.log(`${a[0]} = ${a[1]}`));
}

getArgumentInfo({ name: 'bob'}, 3.333, 9.999);