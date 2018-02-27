function makeRecipe() {

    let result;

    let closure = (function (command) {

        if(command === 'prepare') {

        }

        let products = {
            protein: 0,
            carbohydrates: 0,
            fat: 0,
            flavours: 0
        };

        let recipes = {
            Apple: {
                protein: 0,
                carbohydrates: 1,
                fat: 0,
                flavours: 2
            },
            Coke: {
                protein: 0,
                carbohydrates: 10,
                fat: 0,
                flavours: 20
            },
            Burger: {
                protein: 0,
                carbohydrates: 5,
                fat: 7,
                flavours: 3
            },
            Omelet: {
                protein: 5,
                carbohydrates: 0,
                fat: 1,
                flavours: 1
            },
            Cheverme: {
                protein: 10,
                carbohydrates: 10,
                fat: 10,
                flavours: 10
            }
        };

        function checkAllIngredientsAvailable(recipeName){
            let available = false;

            for (let ing in products) {
                 if(products[ing] < recipes[recipeName][ing]){
                     available = false;
                 }
            }

            return false;

        }


    })();
}