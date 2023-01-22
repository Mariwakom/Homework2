let a = 10;
alert(a);
a = 20;
alert(a);

let year = 2007;
alert(`Год выпуска первого iPhone - ${year}`);

let creator = "Брендан Эйх";
alert(`Создатель языка JavaScript -  ${creator}`);

let number1 = 10;
let number2 = 2;
alert(number1 + number2);
alert(number1 - number2);
alert(number1 * number2);
alert(number1 / number2);

let c = 2;
let result = c**5;
alert(`2 в 5-й степени равняется ${result}`);

let d = 9;
let e = 2;
let remainder = d % e;
alert(`остаток от деления d на e равен ${remainder}`);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++ ;
num -- ;
alert(num);

let age = prompt("Сколько вам лет");
alert(age);

let user = {
   name: 'Леся',
   age: 1, 
   isAdmin: true
};
user["city of Residence"] = "Reutov";
user.age = 3;
delete user["city of Residence"];
let info = prompt("Какую информацию хотите узнать о пользователе? (name, age or isAdmin?)");
alert(user[info]);


let userName = prompt("Как твое имя?");
userName = "Марина";
alert("Привет Марина!");