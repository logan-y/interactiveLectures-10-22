let person = {
    firstName: "Chanandler",
    lastName: "Bong",
    age: 34
}
// console.log(person.firstName);
// console.log(person['firstname']);

let meal = {
    appetizer: 'chips & salsa',
    entree: 'al pastor burrito',
    dessert: 'churros',
    drink: 'dr. pepper'
}

const {dessert} = meal;
//console.log(dessert) //logs churros

const {appetizer, entree} = meal;
//console.log(appetizer, entree)
//console.log(entree)

const {drink: bestSodaEver} = meal;     //renames drink to bestSodaEver
//const bestSodaEver = meal.drink;      this does the same thing

//console.log(bestSodaEver, meal)

// const myAppetizer = meal.appetizer;
// const myEntree = meal.entree;
// const myDessert = meal.dessert;
// const myDrink = meal.drink; 
//ORRRR 

const {appetizer: myAppetizer, entree : myEntree, dessert: myDessert, drink: myDrink} = meal;

// for(let key in person){     //iterates through the keys
//     console.log(key)
// } 

// for(key in person){         //iterates through items at each key in obj
//     console.log(person[key])
// }
// for (key in person){
//     console.log(key + "-" + person[key])
// }        Tims combined loop

person.job = "Statistical Analysis and Data Reconfiguration";

person["pets"] = ['Chicken', 'Duck']

// for(key in person){         //iterates through items at each key in obj
//         console.log(key)
//      }

let teams = {
    teamOne: ['ryan', 'alex'],
    teamTwo: ['henry', 'cole', 'charlie'],
    teamThree: ['porter', 'blake'],
    teamFour: ['monique', 'mariko'],
    teamFive: ['shania', 'deepta'] 
}

delete teams.teamTwo
// for(let team in teams){
//     console.log(team)
// }

class Dog {
    constructor(name, breed, age) {
        this.name = name    
        this.breed = breed
        this.age = age
    }

    greeting() {
        console.log(`Hi, my name is ${this.name} and  I am an ${this.age} year old ${this.breed}`)
    }
}

let lassie = new Dog('Lassie', 'Collie', 18)

//console.log(lassie.age)

let beethoven = new Dog('Beethoven', 'St. Bernard', 12)

//console.log(beethoven.breed)
//console.log(beethoven)

// lassie.greeting() //barking!
// beethoven.greeting()

for(key in lassie) {
    console.log(lassie[key])
} //looping through items in lassie