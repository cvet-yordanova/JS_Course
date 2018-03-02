function orderRectangles(input) {

    function createRectangle(width, height) {
        let rect =  {
            width: width,
            height: height,
            area: () => rect.height * rect.width,
            compareTo: (other) => {
                let compareAreas = other.area() - rect.area();

                return compareAreas || (other.width - rect.width);
            }
        };

        return rect;
    }

    function orderArray(array) {
        let arr = [];

        for (let [width, height] of array) {
            let newRectangle = createRectangle(width, height);
            arr.push(newRectangle);
        }

        arr.sort((a, b) => a.compareTo(b));
        return  arr;
    }

    return orderArray(input);

}

console.log(orderRectangles([[10,5], [3,20], [5,12]]));