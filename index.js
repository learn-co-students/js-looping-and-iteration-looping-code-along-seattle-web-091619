// Code your solutions in this file


let nameArray = []
let suprise = "for the wonderful surprise gift!"

function writeCards(array, suprises){
    for(let i = 0; i < array.length; i++){
        let emptyNames = `Thank you, ${array[i]}, ${suprise}`
        nameArray.push(emptyNames)
    }
    return nameArray
}

function countDown(number){
    let i = number
    while(i > -1){
        console.log(i)
        i--
    }
}