// Code your solutions in this file
let greetings = []
function writeCards(array, eventName){
    for (let i = 0; i < array.length; i++){
        greetings.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return greetings
}
console.log("hellllllooooo")

function countDown(number){
    let count = number
    console.log(count)
    while (count !== 0){
        count--
        console.log(count)
    }
}

countDown(5)
