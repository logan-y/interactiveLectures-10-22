let jonSnowAttack = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack){
    console.log("Jon Snow has better attack than Jamie Lannister.")
} else if (jonSnowAttack === jamieLannisterAttack){
    console.log("Jon SNow and Jamie Lannister have the same attack.")
}
//testing gh

else {
    console.log("Jamie Lannister has better attack than Jon")

}

let jonSnowHealth = 100
let jonSnowDefense = 0


//for(i = 0; i < 2; i++){
if (jonSnowHealth <= jamieLannisterAttack){
    console.log("Jon Snow hath been slain :(")
} else {
    jonSnowHealth -= jamieLannisterAttack
    console.log("Jon Snow is hanging on")

}
console.log(`Jon Snow has ${jonSnowHealth} health remaining`)
//}

jonSnowDefense += 25

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log('Jon Snow hath been slain.')
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow has ${jonSnowHealth} health remaining`)
}

if((jonSnowHealth + 50) >= 100){
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

let coinLandsHead = false

/*if (coinLandsHead = true) {
    console.log("The fight continues!")
} else {
    console.log("Jon has withdrawn to his domicile.")
}
*/
if (coinLandsHead !== false) {
    console.log("The Fight Continues!")
} else{
    console.log("Jon is allowed to run away.")
}

/*for (i = 0; i < 5; i++){
    if (jonSnowHealth <= 0){
        console.log("jon snow been slain")
    } else {
        jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
        console.log(`jon snow has ${jonSnowHealth} health remaining`)
    }   
}

*/
while(jonSnowHealth > 0){
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is ${jonSnowHealth}`)
    if(jonSnowHealth <= 0){
        console.log("Jon snow dead")
    }
}


let backpack = []

backpack.push("Sword")
backpack.push("shield")
backpack.push("Gumbo")

console.log(backpack)

backpack.splice(0, 1,)

let furCoat = "fur coat"

backpack.push(furCoat)

console.log(backpack)

backpack.pop()

console.log(backpack)

let itemCount = backpack.length
console.log(itemCount)

backpack.push("flint", "blanket", "tooth brush", "knife")

console.log(backpack)

var secondPack = backpack.splice(2, 5)

console.log(secondPack[0])

for (let i = 0; i < backpack.length; i++){
    console.log(backpack[i])
}

for (let i = 0; i < secondPack.length; i++){
    console.log(secondPack[i])
}

/*
if (backpack.length >= 3) {
    for (let i = 0; i < backpack.length; i++){
        console.log(backpack[i])
    }
     
} else {
    for (let i = 0; i < backpack.length; i++){
        console.log(backpack[i])
    }
}
*/
let guessMe = 54

while (guessMe < 100){
    console.log("-------")
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        console.log('guessMe is divisible by 4 or 5. Added 25.')
        guessMe += 25
    } else if (guessMe % 3 == 0) {
        console.log("guessMe is divisible by 3")
        guessMe -= 27
    } else {
        console.log('Added 3.')
        guessMe += 3
    }
    guessMe += 22
    console.log(`guessMe is now ${guessMe}.`)
}
