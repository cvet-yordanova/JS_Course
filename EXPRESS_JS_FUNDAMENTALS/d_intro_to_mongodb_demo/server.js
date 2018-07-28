const mongoose = require('mongoose');

let catSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    color: { type: String }
})

catSchema.methods.sayHello = function(){
    return `Hello from ${this.name}`;
}

catSchema.virtual('desctiption').get(function() {
    return `${this.name} - ${this.age}`
})

catSchema.path('age').validate(function () {
    return this.age >= 1 && this.age <= 20
}, 'Age must be between 1 and 20!')

let Cat = mongoose.model('Cat', catSchema);

let Owner = mongoose.model('Owner', {
    firstName: { type: String, required: true },
    lastName: { type: String, requried: true },
    cats: [Cat.schema]
});

mongoose
    .connect('mongodb://localhost:27017/cats')
    .then(() => {
        // let newCat = new Cat({
        //     name: 'Pesho',
        //     age: 8,
        //     color: 'black'
        // })

        // newCat.save();

        Cat.find({}).then(cats => {
            let owner = new Owner({
                firstName: 'Ivan',
                lastName: 'Ivanov',
                cats
            })

            owner.save();
        });
    });

