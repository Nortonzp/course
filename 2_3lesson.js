const pos1 = 15;
const pos2 = 20;
const pos3 = 25;
let wallet = 40;
let numberOfItems = 0;
let nameOfPurchases = 'Counter of purchases';
let bal = `Balance`;
if (pos1 <= wallet) {
    wallet = wallet - pos1;
    numberOfItems = numberOfItems +1;
    console.log(`${bal}`,wallet, `${nameOfPurchases}`,  numberOfItems);
}

if (pos2 <= wallet) {
    wallet = wallet - pos2;
    numberOfItems = numberOfItems +1;
    console.log(`${bal}`, wallet, `${nameOfPurchases}`, numberOfItems);
}

if (pos3 <= wallet) {
    wallet = wallet - pos3;
    numberOfItems = numberOfItems +1;
    console.log(`${bal}`, wallet,  
    `${nameOfPurchases}`, numberOfItems); 
}