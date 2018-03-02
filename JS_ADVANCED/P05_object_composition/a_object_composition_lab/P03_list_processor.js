function listProcessor(arr) {

    let commandsClosure = (function () {
        let words = [];

        function add(input) {
            words.push(input.split(" ")[1]);
        }

        function remove(input) {
            words = words.filter(a => a !== input.split(" ")[1]);
        }

        function print() {
            console.log(words.join(","));
        }
        return {
            add,
            remove,
            print
        }
    })();

    for (let i = 0; i < arr.length; i++) {
        commandsClosure[arr[i].split(" ")[0]](arr[i]);
    }
}

listProcessor(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);

