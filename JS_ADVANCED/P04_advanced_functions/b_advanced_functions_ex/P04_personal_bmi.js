function personalBMI(name, age, weight, height) {

    let getPersonalBmi = (weight, height) => weight / (Math.pow(height / 100, 2));
    let getStatus = (bmi) => {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25) {
            return 'normal';
        } else if (bmi < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    };

    let bmi = getPersonalBmi(weight, height);

    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: Math.round(weight),
            height: Math.round(height)
        },
        BMI: Math.round(bmi),
        status: getStatus(bmi)
    };

    if (person.status === 'obese') {
        person.recommendation = 'admission required';
    }

    return person;

}

personalBMI("Honey Boo Boo", 9, 57, 137);