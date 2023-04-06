'use strict';

let userName = prompt('Welcome! Please tell us your name!');
alert ('Thanks for stopping by ' + userName + '. Please answer the following questions about Ashley.');

let readingQuestion = prompt('Does Ashley enjoy reading? Y/N').toUpperCase();
//if (readingQuestion === 'Y') {
//console.log('Absolutely! Reading is her favorite thing.');
//}
if (readingQuestion === 'Y') {
  alert('Absolutely! Reading is her favorite thing.');
}
if (readingQuestion === 'N') {
  alert('Reading actually is one her favorite things.');
}

let catQuestion = prompt('Does Ashley own cat? Y/N').toUpperCase();
//if (catQuestion === 'Y') {
//console.log('You bet! His name is Oswald.');
//}
if (catQuestion === 'Y') {
  alert('You bet! His name is Oswald.');
}
if (catQuestion === 'N') {
  alert('Actually, she does! His name is Oswald.');
}

let dogQuestion = prompt('Does own a dog? Y/N').toUpperCase();
//if (dogQuestion === 'Y') {
//console.log('She sure does! His name is Atlas');
//}
if (dogQuestion === 'Y') {
  alert('She sure does! His name is Atlas');
}
if (dogQuestion === 'N') {
  alert('She lover her dog. His name is Atlas');
}

let momQuestion = prompt('Is she a mom? Y/N').toUpperCase();
//if (momQuestion === 'Y') {
//console.log('You got it! She has three daughters and a son.');
//}
if (momQuestion === 'Y') {
  alert('You got it! She has three daughters and a son.');
}
if (momQuestion === 'N') {
  alert('She actually has three daughters and a son.');
}

let marriedQuestion  = prompt('Is Ashley married?Y/N').toUpperCase();
//if (marriedQuestion === 'Y') {
//console.log('Yep! Her husbands name is Zach. Thanks for answering our questions ' + userName);
//}
if (marriedQuestion === 'Y') {
  alert('You got it ' + userName + '! Her husbands name is Zach.');
}
if (marriedQuestion === 'N') {
  alert('She is! Her husbands name is Zach. ');
}

let maxInput = 5;

while(maxInput >1){
  maxInput--;
  let georgiaYears = parseInt(prompt('How many years do you think has Ash lived in GA?'));
  if (georgiaYears >= 14){
    alert('Not that many!');
  }
  if (georgiaYears <= 12){
    alert('More than that!');
  }
  if (georgiaYears === 13){
    alert('Spot on!');
    break;
  }
  if (maxInput === 1 && georgiaYears !== 13){
    alert('Thanks for guessing! GA has been home for 13 years.');
    break;
  }
}

let ashDrinks = ['wine','water','coffee'];
let firstGuess = prompt('Can you guess her favorite beverages?');
let maxGuess = 7;
let correctGuess = false;

while(correctGuess != true) {
  for (let i = 0;i<ashDrinks.length;i++){
if (firstGuess === [i].toLowerCase()){
alert('How did you know?! Here are all of my faves ${ashDrinks}');
correctGuess = true;
break;
  }
  }
};

else {
  maxGuess--;
  firstGuess = prompt('guess something else');
}

if (maxGuess === 0){
  alert('game over');
}
