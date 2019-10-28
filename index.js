const messages = [];

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return messages;
}

function countDown(num){
    let i = 0;
    while (i < 11) {
    console.log(i++);
    }
  }