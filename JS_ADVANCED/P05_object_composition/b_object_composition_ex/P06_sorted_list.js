let sortList = (function () {

    let arr = [];

    function add(element) {
            arr.push(element);
            arr.sort((a, b) => a - b);
            this.size++;

    }

    function remove(index) {
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1);
            this.size--;
        }
    }

    function get(index) {
        if (index >= 0 && index < arr.length) {
            return arr[index];
        }
    }

    function log() {
        console.log(arr);
    }

    return {
        add,
        remove,
        get,
        size: arr.length,
        log
    }

})();


sortList.add(5);
sortList.add(5);
sortList.add(5);
sortList.add(5);
console.log(sortList.get(0));

sortList.add(3);
console.log(sortList.get(0));

sortList.remove(0);
console.log(sortList.size);


sortList.log();
