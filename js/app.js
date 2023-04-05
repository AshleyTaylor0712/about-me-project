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
  alert('Yep! Her husbands name is Zach. Thanks for answering our questions ' + userName + '.');
}
if (marriedQuestion === 'N') {
  alert('She is! Her husbands name is Zach. Thanks for answering our questions ' + userName + '.');
}
