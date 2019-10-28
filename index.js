// Code your solutions in this file
function writeCards(array_of_strings, event_name){
let handler_array = []
    for (let i = 0; i < array_of_strings.length; i++){
        handler_array.push(`Thank you, ${array_of_strings[i]}, for the wonderful ${event_name} gift!`)
    }
    return handler_array
}

function countDown(number){


    while(number >= 0){
            console.log(number)
            number-=1
    }

}