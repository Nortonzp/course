const numberOfPurchases = 10; //Кол-во покупок
const primeCost = 10;  //Себестоимость единицы товара
const deliveryCost = 5; //Стоимость доставки
const productPrice = 20; //Цена за товар
const month = 'июнь';
const userName = 'Иннокентий Аникеенко';



let income; //Доходы
let expenses; // Расходы
let profit;  //Чистая прибыль
//console.log(typeof primeCost && typeof deliveryCost && typeof productPrice && typeof numberOfPurchases );
//console.log(!isNaN (primeCost) && !isNaN (deliveryCost) && !isNaN (productPrice) && !isNaN (numberOfPurchases));
if (!isNaN (primeCost) && !isNaN (deliveryCost) && !isNaN (productPrice) && !isNaN (numberOfPurchases)) {
    income = numberOfPurchases*productPrice;
    expenses = (primeCost+deliveryCost)*numberOfPurchases;
    profit = income-expenses;
    console.log(`Добрый день ${userName}.  Высылаю отчёт за ${month}. 
    В этом месяце доходы составили - ${income},
    расходы составили - ${expenses},
    прибыль составила - ${profit}.`);
    
}
else {
    console.log('Введите только числовые значения');
}
 


    //if ( typeof primeCost && deliveryCost && productPrice && numberOfPurchases === Number)