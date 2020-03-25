//Задание 18 (2)
let a = "https://www.youtube.com";
let reg18 = /http+/.test(a);
let reg181 = /https+/.test(a);
if (reg18 == true || reg181 == true)
	console.log("Cсылка: true");
else 
	console.log('Cсылка: false');

//Задание 18 (4)
let b = 'NeStavte3.jpeg';
let jpg18 = /jpg/.test(b);
let jpg181 = /jpeg/.test(b);
if (jpg18 == true || jpg181 == true)
	console.log("Картинка: true");
else 
	console.log('Картинка: false');

//Задание 18 (6)
let c = '122352363464';
let c1 = /^\d{1,12}$/.test(c);
console.log("Строка от 1 до 12: ", c1);

//Задание 18 (8)
let d = /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.\d{4}$/.test('31.12.2002'); //Проверка на dd.mm.year
console.log('Верный формат даты: ', d);

//Задание 18 (10)
let mail = /[^\s]+@+[^\s\.]+\.+[a-z]+/.test('zhernosek000@gmail.com');
console.log("Корректный адрес мыла: ", mail);

//Задание 19 (1)
let str19 = 'site.ru sss site.com zzz site.net';
let res19 = str19.match(/site\..../g, '!');
console.log(res19);

//Задание 20 (1)
let str20 = 'sss domain.ru zzz';
let res20 = str20.match(/(domain+).(ru+)/);
console.log('Найденное: ',res20[0]);
console.log('1-й карман: ',res20[1]);
console.log('2-й карман: ',res20[2]);

//Задание 21 (1)
let str21 = '12 34 56 78';
let res21 = str21.replace(/([1-9]+)([1-9]+)/g, '$2$1');
console.log(res21);

//Задание 22 (1)
let str22 = 'a1b2c3';
let res22 = str22.replace(/\d+/g, function (match) {
return match + match;
});
console.log(res22);

//Задание 23 (1)
let str23 = 'aaa bbb ccc xyz';
let res23 = str23.replace(/([a-z])\1\1/g, '!');
console.log('23:', res23);

//Задание 25 (1)
let str25 = 'func1() func2() func3()';
let res25 = str25.replace(/func+/g);
console.log(str25);

//Задание 26 (1)
let str26 = 'aaa [2] bbb [3] ccc [12] ddd';
let res26 = str26.replace(/\d+/g, function (match) {
	return match*2; 
});

console.log(res26);

//Задание 27 (1)
let str27 = '1 23 456 789';
let res27 = str27.search(/\d{3}/);
console.log(res27);

//Задание 28 (1)
let str28 = '2025-12-31 12:59:59';
let res28 = str28.split(/[-: ]/);
console.log(res28);
