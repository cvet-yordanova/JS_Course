function constructionCrew(worker) {

    if (worker['handsShaking']) {
        let weight = worker['weight'];
        let experience = worker['experience'];

        worker['bloodAlcoholLevel'] += 0.1 * weight * experience;
        worker['handsShaking'] = false;
    }

    return worker;
}

console.log(constructionCrew({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
));