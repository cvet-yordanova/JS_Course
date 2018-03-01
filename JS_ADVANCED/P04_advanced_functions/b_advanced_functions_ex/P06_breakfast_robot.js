let solve = function () {
    let products = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};

    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    return function (input) {

        let command = input.split(" ");
        let result = "";

        if (command[0] === 'report') {
            result = `protein=${products['protein']} carbohydrate=${products['carbohydrate']} fat=${products['fat']} flavour=${products['flavour']}`;
        } else if (command[0] === 'prepare') {
            if (checkAllIngredientsAvailable(command[1], Number(command[2]))) {
                prepareFood(command[1], Number(command[2]));
            }
        } else if (command[0] === 'restock') {
            products[command[1]] += Number(command[2]);
            result = "Success"
        }

        function checkAllIngredientsAvailable(recipeName, quantity) {
            let available = true;
            for (let ing in recipes[recipeName.toLowerCase()]) {
                if (products[ing] * quantity < recipes[recipeName.toLowerCase()][ing]) {
                    available = false;
                    result = `Error: not enough ${ing} in stock`;
                    break;
                }
            }

            return available;
        }

        function prepareFood(recipeName, quantity) {
            result = "Success";

            for (let ing in recipes[recipeName]) {
                products[ing] -= recipes[recipeName.toLowerCase()][ing] * quantity;
            }
        }

        return result;
    };
};

let r = solve();
r('prepare cheverme 1');
r('restock protein 10');
r('prepare cheverme 1');
r('restock carbohydrate 10');
r('prepare cheverme 1');
r('restock fat 10');
r('prepare cheverme 1');
r('restock flavour 10');
r('prepare cheverme 1');
r('report');


