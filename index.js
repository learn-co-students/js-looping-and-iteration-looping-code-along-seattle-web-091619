// Code your solutions in this file
let names = [ 'Lisa', 'Kaitlin', 'Jan' ];
let occaison = 'surprise';

function writeCards(names, occasion) {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push(`Thank you, ${names[i]}, for the wonderful ${occaison} gift!`);
  }
  return arr;
}

function countDown(count) {
  while (count >= 0) {
    console.log(count);
    count--;
  }
}