
const fs = require('fs');

let storage = {};

function put(key, value) {

    // try {

    throwErrorIfArgumentNotValid(key, "Key value should be string!");
    throwErrorIfKeyExists(key, "Key already exists!", storage);
    storage[key] = value;

    // } catch (err) {
    //     console.log("Error Message");
    // }

}

function get(key) {

    throwErrorIfArgumentNotValid(key, "Key value should be string!");
    throwErrorIfKeyNotExists(key, "Invalid Key", storage);

    return storage[key];

}

function getAll() {
    if (isStorageEmpty) {
        console.log("Storage empty!");
    } else {
        return storage;
    }
}

function update(key, newValue) {
    throwErrorIfArgumentNotValid(key, "Key value should be string!");
    throwErrorIfKeyNotExists(key, "Invalid key!", storage);

    storage[key] = newValue;
}

function deletE(key) {
    throwErrorIfArgumentNotValid(key, "Key value should be string!");
    throwErrorIfKeyNotExists(key, "Invalid key!", storage);

    delete storage[key];
}

function clear() {

    for (let key in storage) {
        delete storage[key];
    }
}

function save() {

    let file = fs.createWriteStream('storage.txt');
    file.write(JSON.stringify(storage));
    file.end();
}

function load() {

    let file = fs.createReadStream('storage.txt');
    let text = file.read();
    file.end(); 
    return JSON.parse(text);
}

module.exports = [
    put,
    get,
    getAll,
    update,
    deletE,
    clear,
    save,
    load
]


console.log(typeof {});

put({}, 'value');
console.log(storage)


function throwErrorIfArgumentNotValid(stringCheck, errorMessage) {
    if (typeof stringCheck !== "string") {
        throw new Error(errorMessage);
    }
    //todo
}

function throwErrorIfKeyExists(arg, errorMessage, storage) {
    if (storage.hasOwnProperty(arg)) {
        throw new Error(errorMessage);
    }
    //todo
}

function throwErrorIfKeyNotExists(arg, errorMessage, storage) {
    if (!storage.hasOwnProperty(arg)) {
        throw new Error(errorMessage);
    }
    //todo
}

function isStorageEmpty(storage) {
    let empty = true;

    for (let key in storage) {
        empty = false;
        break;
    }

    return empty;
}