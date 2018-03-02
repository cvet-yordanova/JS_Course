function createCars(arr) {
    let closureCreateCars = (function () {
        let map = new Map();
        let car = {};

        function create(input) {
            let args = input.split(" ");

            if (args.length === 2) {
                map.set(input.split(' ')[1], Object.create(car));
                //     map.get(input.split(' ')[1]).name = input.split(' ')[1];
            } else {
                let obj = Object.create(map.get(input.split(' ')[3]));
                map.set(input.split(' ')[1], obj);
                //     map.get(input.split(' ')[1]).name = input.split(' ')[1];
            }
        }

        function set(input) {
            map.get(input.split(" ")[1])[input.split(" ")[2]] = input.split(" ")[3];
        }

        function print(input) {
            let properties = [];

            for (let h in map.get(input.split(" ")[1])) {
                properties.push(h + ":" + map.get(input.split(" ")[1])[h]);
            }

            console.log(properties.join(", "));
        }

        return {
            create,
            set,
            print
        }
    })();

    for (let i = 0; i < arr.length; i++) {
        closureCreateCars[arr[i].split(" ")[0]](arr[i]);
    }

}

createCars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);


