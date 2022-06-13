let wallet = 50;
const paperclip =5;
const pen = 10;
const glue = 12;
const pencil = 15;
const paper = 30; 
//const nullBalance = 0;
if (wallet - paperclip <= 0) {
    console.log('Нет денег');
} else if (paperclip <= wallet) {
    wallet -= paperclip;
    console.log (wallet);  

}

if (wallet - pen <= 0) {
    console.log('Нет денег');
} else if (pen <= wallet) {
    wallet -= pen;
    console.log (wallet);  

}

if (wallet - glue <= 0) {
    console.log('Нет денег');
} else if (glue <= wallet) {
    wallet -= glue;
    console.log (wallet);  

}

if (wallet - pencil <= 0) {
    console.log('Нет денег');
} else if (pencil <= wallet) {
    wallet -= pencil;
    console.log (wallet);  

}

if (wallet - paper <= 0) {
    console.log('Нет денег');
} else if (paper <= wallet) {
    wallet -= paper;
    console.log (wallet);  

}
console.log (wallet);