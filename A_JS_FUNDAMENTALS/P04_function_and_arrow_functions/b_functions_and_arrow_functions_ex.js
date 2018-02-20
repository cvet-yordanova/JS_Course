
//

function insideVolume(input){
    let checkX = (a) => {
        return (a >= 10) && (a <= 50);
    };

    let checkY = (a) => {
        return (a >= 20) && (a <= 80);
    };

    let checkZ = (a) => {
        return (a >= 15) && (a <= 50);
    };

    for (let i = 0; i < input.length; i += 3) {
        console.log(checkX(input[i]) && checkY(input[i + 1]) && checkZ(input[i + 2]) ? "inside" : "outside");
    }
}


function roadRadar(input){
    let getSpeedLimit = (x) => {
            switch (x){
                case "motorway":
                    return 130;
                    break;
                case "interstate":
                    return 90;
                    break;
                case "residential":
                    return 20;
                    break;
                case "city":
                    return 50;
                    break;
                default: return '';
            }
    };

    let getInfraction = (x) => {
        if(x <= 20){
            return "speeding";
        }else if(x <= 40){
            return "excessive speeding";
        }else {
            return "reckless driving";
        }
    };

    let difference = input[0] - getSpeedLimit(input[1]);

    let result = '';

    if(input[0] > getSpeedLimit(input[1])){
        result = getInfraction(difference);
    }

    console.log(result);

}

//3

function templateFormat(str){


    let result = '<?xml version="1.0" encoding="UTF-8"?>\n';
   result += '<quiz>\n';

    for (let i = 0; i < str.length; i += 2) {
        let question = str[i];
        let answer = str[i + 1];

        result += `  <question>
    ${question}
  </question>
  <answer>
    ${answer}
  </answer>
`;

    }

   result += "</quiz>";
    console.log(result);

}

function cookingByNumbers(input){

    let chop = (x) => { return x/2 };
    let dice = (x) => { return Math.sqrt(x)};
    let spice = (x) => { return x + 1 };
    let bake = (x) => { return x * 3 };
    let fillet = (x) => { return x - (20 * x / 100) };

    let result = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        switch (input[i]){
            case 'chop':
                result = chop(result);
                console.log(result);
                break;
            case "dice":
                result = dice(result);
                console.log(result);
                break;
            case "spice":
                result = spice(result);
                console.log(result);
                break;
            case "bake":
                result = bake(result);
                console.log(result);
                break;
            case "fillet":
                result = fillet(result);
                console.log(result);
                break;
        }
    }

}

//5

function modifyAverage(input){

    let result = input.toString();

    let getAverageDigitsSum = x => {
        let sum = 0;

        for (let i = 0; i < x.length; i++) {
            sum += Number(x[i]);
        }

        return sum / x.length;
    };

    let appendNine = x => {
        return x + '9';
    };

    while(true){

        if(getAverageDigitsSum(result) > 5){
            break;
        } else {
            result = appendNine(result);
        }
    }

    console.log(result);
}

//todo
function validityChecker(input){

    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    let findDistance = (x1, y1, x2, y2) => {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    };

    let checkIfInteger = x => {
       return x === Math.round(x);
    };

    let distanceBetweenPoints = findDistance(x1, y1, x2, y2);
    let distanceBetweenPoint1 = findDistance(x1, y1, 0, 0);
    let distanceBetweenPoint2 = findDistance(x2, y2, 0, 0);

    console.log(checkIfInteger(distanceBetweenPoint1) ? `{${x1}, ${y1}} to {0, 0} is valid` : `{${x1}, ${y1}} to {0, 0} is invalid`);
    console.log(checkIfInteger(distanceBetweenPoint2) ? `{${x2}, ${y2}} to {0, 0} is valid` : `{${x2}, ${y2}} to {0, 0} is invalid`);
    console.log(checkIfInteger(distanceBetweenPoints) ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2} is invalid`);
}

//7

function treasureLocator(input){
    let checkInside = (x, y, x1, x2, y1, y2) => {
        let checkX = x >= x1 && x <= x2;
        let checkY = y <= y2 && y >= y1;

        return checkX && checkY;
    };

    for (let i = 0; i < input.length; i+=2) {
        let checkTuvalu = checkInside(input[i], input[i + 1], 1, 3, 1, 3);

        let checkTokelau = checkInside(input[i], input[i + 1], 8, 9, 0, 1);

        let checkSamoa = checkInside(input[i], input[i + 1], 5, 7, 3, 6);

        let checkTonga = checkInside(input[i], input[i + 1], 0, 2, 6, 8);

        let checkCook = checkInside(input[i], input[i + 1], 4, 9, 7, 8);

        let message = 'On the bottom of the ocean';

        if(checkTuvalu){
            message = 'Tuvalu';
        } else if(checkTokelau){
            message = 'Tokelau';
        } else if(checkSamoa){
            message = 'Samoa';
        } else if(checkTonga){
            message = 'Tonga';
        } else if(checkCook){
            message = 'Cook';
        } else {
            message = 'On the bottom of the ocean';
        }
        console.log(message);
    }
}

//[x1, y1, x2, y2, x3, y3].
//todo
function tripLength(input){
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let x3 = input[4];
    let y3 = input[5];

    let findDistance = (x1, y1, x2, y2) => {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    };


    let distance1_2 = findDistance(x1, y1, x2, y2);
    let distance2_3 = findDistance(x2, y2, x3, y3);
    let distance3_1 = findDistance(x3, y3, x1, y1);

    console.log(distance1_2);
    console.log(distance2_3);
    console.log(distance3_1);

    let point1 = {distance: distance1_2, order: 1};
    let point2 = {distance: distance2_3, order: 2};
    let point3 = {distance: distance3_1, order: 3};

    let arr = [point1, point2, point3];

    while(true) {

        let changedSth = false;
        for (let i = 0; i < arr.length - 1; i++) {
          if(arr[i].distance >= arr[i + 1]){
              if(arr[i].distance == arr[i + 1].distance) {
                  if(arr[i].order > arr[i + 1].order){
                      let temp = arr[i + 1];
                      arr[i + 1] = arr[i];
                      arr[i] = temp;
                      changedSth = true;

                      console.log("minahme");
                  }
              } else {
                  let temp = arr[i + 1];
                  arr[i + 1] = arr[i];
                  arr[i] = temp;
                  changedSth = true;
                  console.log("minahme");
              }
          }
        }

        if(changedSth) {
            changedSth = false;
        } else {
            break;
        }
    }

    let sumDistance = distance1_2 + distance2_3 + distance3_1;

    console.log(arr[0].order + "->" + arr[1].order + "->" + arr[2].order + ": " + sumDistance );


}


//9 todo

//10

function dnaHelix(input){
    let arrLetters = ['A','T','C','G','T','T','A','G','G','G'];

    let idx = -1;

    let reset = () => {
        if(idx == arrLetters.length - 1){
            idx = -1;
        }
    };

    for (let i = 0; i < input; i++) {
        if((i + 1) % 4 == 1) {
            let str = `**${arrLetters[++idx]}`;
            reset();
            str += `${arrLetters[++idx]}**`;
            reset();
            console.log(str);
        }else if(((i + 1) % 4 == 2) || ((i + 1) % 4 == 0)){
            let str = `*${arrLetters[++idx]}-`;
            reset();

            str += `-${arrLetters[++idx]}*`;
            reset();
            console.log(str);
        }else if((i + 1) % 4 == 3){
            let str = `${arrLetters[++idx]}--`;
            reset();

            str += `--${arrLetters[++idx]}`;
            reset();

            console.log(str);
        }
    }
}

dnaHelix(11);




























































