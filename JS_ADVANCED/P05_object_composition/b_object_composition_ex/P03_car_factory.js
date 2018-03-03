function getCar(requirementsObj) {

    function getEngine(minHorsePower) {
        if (minHorsePower <= 90) {
            return {power: 90, volume: 1800};
        } else if (minHorsePower <= 120) {
            return {power: 120, volume: 2400};
        } else {
            return {power: 200, volume: 3500};
        }
    }

    function getWheels(wheelSize){
        let size = wheelSize % 2 === 0 ? wheelSize - 1 : wheelSize;
        return [size, size, size, size];
    }

    function getCarriage(type, color){
        return {type: type, color: color};
    }


    return {
        model: requirementsObj['model'],
        engine: getEngine(requirementsObj['power']),
        carriage: getCarriage(requirementsObj['carriage'], requirementsObj['color']),
        wheels: getWheels(requirementsObj['wheelsize'])
    }

}

console.log(getCar({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

));