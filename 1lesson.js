const userName = 'Norton';
 let customBased = 30;
 let constantBased = 40;
   console.log (`Hi, ${userName}`);
   console.log (customBased);
   console.log (constantBased);
 customBased = 'ChangeTypeOfData' //Переопределил значение переменной customBased другим типом данных используя присвоение.
   console.log (customBased);
if (userName == 'Norton')  {
    constantBased = 'Changed'     //Переопределил значение переменной constantBase с использованием операторов и объявленной константы. 
    console.log (constantBased)
}   
console.log (constantBased)       //Перепроверил вне блока
