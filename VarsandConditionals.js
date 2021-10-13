let jonSnowAttack = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack){
    console.log("Jon Snow has better attack than Jamie Lannister.")
} else if (jonSnowAttack === jamieLannisterAttack){
    console.log("Jon SNow and Jamie Lannister have the same attack.")
}

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

if((jonSnowHealth + 50 >= 100){
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}