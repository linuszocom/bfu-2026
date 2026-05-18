# Övningar: JavaScript

1. [Funktioner](#1-funktioner)
1. [Objekt](#2-objekt)
1. [Listor](#3-listor)

+ Syftet med övningarna är att träna på att skriva kod, snarare än att hitta exakt rätt lösning. Försök att arbeta med så många övningar som möjligt.
+ Det går att lösa de flesta uppgifter på flera sätt. Gå gärna tillbaka till tidigare uppgifter och se om du kan lösa dem på något annat sätt.
+ Innan du kör fast: diskutera din kod med klasskamrater på Discord, eller be AI förklara / ge ledtrådar.

Ett bra sätt att lära sig programmera är att:
1. försöka själv först
1. läsa någon annans kod
1. diskutera kod med någon annan

---

## 1 Funktioner

1 Skriv en funktion och anropa den. Funktionen ska skriva ut strängen "Hello" när man anropar den. Utgå från följande exempel:

```js
function greeting() {
    // skriv din kod här
}

// glöm inte att anropa funktionen
```

2 Läsförståelse. Vad skrivs ut?
```js
function mystery(x) {
	return x - 1
}
console.log( mystery(1338) )
```

3 Skriv en funktion: `function increase(x)`. När den anropas ska den returna nästa tal, alltså ett större än x.

4 Vilket värde får variablerna a och b?
```js
function mystery(x, y) {
	if( x < 10 ) {
		return x * y
	} else {
		return x + y
	}
}
let a = mystery(1, 2)
let b = mystery(10, 20)
```

5 Vad gör följande kod?
```js
function toCelsius(fahrenheit) {
	let temperature = (fahrenheit - 32) / 1.8
	return temperature
}

let x = toCelsius(50)
console.log(x)
```

6 Vad gör funktionen?
```js
function amazing(first, second) {
	let max
	if( first < second ) {
		max = second
	} else {
		max = first
	}
	return max
}
```

7 Skriv en funktion med namnet "cheer", som skriver ut "Bra jobbat!" på konsolen 3 gånger när den anropas. (Tips: börja med enklast möjliga sätt att lösa uppgiften, försök inte använda en loop direkt.)

---

10 Vad skriver programmet ut i konsolen? Varför?
```js
const a = foo(3);
console.log(a);

function foo(i){
    return i * i;
}
```

11 Vad skriver programmet ut i konsolen? Varför?
```js
const a = foo(3,5);
console.log(a);

function foo(x,y){
    return x * y;
}
```

12 Vad skriver programmet ut i konsolen? Varför?
```js
const x = 2;
const y = 3
const a = foo(foo(x) + foo(y));
console.log(a);

function foo(i){
    return 5 * i;
}
```

13 Vad skriver programmet ut i konsolen? Varför?
```js
function foo(x){
   return x > 10;
}

const a = 12;

console.log(foo(a));
```

14 Vad skriver programmet ut i konsolen? Varför?
```js
function foo(){
   console.log("test");
}

foo("hej");
```

15 Vad skriver programmet ut i konsolen? Varför?
```js
let a = 5;

function foo(a){
    a++;
}

a += 2;
console.log(a);
```

16 Vad skriver programmet ut i konsolen? Varför?
```js
const foo = function(i){
	return 2*i*i;
};
const a = foo(2);
console.log(a);

```

17 Vad skriver programmet ut i konsolen? Varför?
```js
let foo = function(i){
	return 2*i*i;
};

let goo = function(x, y){
	return x(y);
};

let a = goo(foo, 3);
console.log(a);
```

18 Vad skriver programmet ut i konsolen? Varför?
```js
let a = 5;

function foo() {
    return ++a;
}

a += foo() * 2;
console.log(a);
```

---

20 Följande kod räknar ut medelvärdet av två tal. Flytta in koden i en funktion. Gör två varianter: en som skriver ut medelvärdet direkt, och en som returnerar medelvärdet i stället. Testa funktionen med två värden som du hittar på, för att kontrollera att den fungerar.

```js
let x, y  // dessa variabler ska bli parametrar
let average = (x + y) / 2
console.log('Medelvärdet är: ', average)
```

21 Utöka funktionen från förra uppgiften, så att den tar tre parametrar (x,y,z) i stället för två.

22 Bygg en funktion med namnet "avoid". Den ska ta ett tal som parameter. Funktionen ska skriva ut talen 1 till 10 med hjälp av en upprepning. (for-loop) Men om den kommer till parameterns värde ska den hoppa över det. Till exempel, om parametern är `5` ska funktionen skriva ut alla tal utom `5`.

23 Bygg en funktion med namnet "sum". Den ska ta två tal som parametrar, from och to. Funktionen ska returnera resultatet om man lägger ihop alla tal mellan from och to. (Använd en for-loop.) Till exempel, om funktionen anropas med from=3 och to=5 ska funktionen returnera: 3+4+5 = 12.

24 Gör så att funktionen fungerar även om man råkar byta plats på from och to, till exempel om from=25 och to=20.


---

## 2 Objekt

30 Läsförståelse. Vad skriver programmet ut på konsolen? Varför blir det så?
```js
const cat = {
    name: 'Kisse',
    age: 9,
    color: 'brown',
};

console.log(cat.name)
```

31 Vad skriver programmet ut på konsolen? Varför?
```js
const cat = {
    name: 'Kisse',
    age: 9,
    color: 'brown',
}

console.log('My cat ' + cat.name + ' is ' + cat.color)
```

32 Vad skriver programmet ut på konsolen?
```js
const house = {
    color: 'red',
    street: 'Red Street',
    number: 12,
    hasGarage: false,
    residents: ['Bob', 'Lisa', 'Joe', 'Karen'],
}

const outp = 'Welcome to ' + house.street + ' ' + house.number + '.'
console.log(outp)
console.log('Here lives ' + house.residents[3])
```

33 Vad skriver programmet ut på konsolen?
```js
const gg = {}
gg.name = 'Gromit'
gg.location = 'Moon'
console.log('I am ' + gg.name + ' and I live on the ' + gg.location)
```

34 Vad skriver programmet ut på konsolen?
```js
const obj = {}
obj.x = 12
obj.y = 100
obj.x = obj.y
obj.y = obj.x
console.log(obj)
```

35 Skriv färdigt programmet, som beskriver en bok på ett bibliotek.
```js
let book = {
	title: 'Jorden runt på 80 dagar',
	borrowed: false
}
// TODO: lägg till "author"
// TODO: ändra så att boken är utlånad
```

36 Skriv färdigt koden. Vad får variablerna för värden?
```js
function getCoordinates(x, y) {
	// returnera ett objekt som innehåller x och y
}

function getCircle(centerX, centerY, radius) {
	// returnera ett objekt som innehåller: x, y, radius
}
function circleArea(circleObject) {
	// returnera arean på en cirkel
	// Area = 3.14 * radien * radien
}

function getCircumference(topLeft, bottomRight) {
	// Räkna ut omkretsen på en rektangel
	// Omkrets = (längden + höjden) * 2
	// topLeft och bottomRight ska vara koordinat-objekt (se getCoordinates)
}

let c = getCircle(0, 0, 1.7846)
let cArea = circleArea(c)
let p1 = getCoordinates(0, 10)
let p2 = getCoordinates(5, 12)
let rectangleCircumference = getCircumference(p1, p2)
```

37 Skriv färdigt koden
En "sprite" är en bild som brukar användas för karaktärer och andra objekt i en spelvärld.
```js
let sprite = {
	name: 'Link',
	position: {
		x: 14,
		y: 11
	}
}
function moveRight(steps, character) {
	// TODO: flytta karaktären "steps" steg åt höger
}
// TODO: skriv motsvarande funktioner för att flytta åt vänster, uppåt och nedåt
```

38 Modellering handlar om att beskriva företeelser i verkligheten som objekt, så att vi kan arbeta med dem i JavaScript. Skapa objekt som med minst tre *egenskaper* beskriver:

1. Information om en film, till exempel titel, premiärår, genre, viktigaste skådespelarna

1. Djur, till exempel art, vilka delar av världen de finns

1. En stand t.ex. Karlstad

1. En sång som du tycker om

1. En användares profiluppgifter i ett socialt nätverk


---

## 3 Listor

50 Vad skriver programmet ut på konsolen?
```js
const arr = [1, 3, 5, 7, 11]

console.log(arr[1])
```

51 Vad skriver programmet ut på konsolen?
```js
const arr = ["gris", "apa", "hund", "zebra", "gorilla"]
console.log(arr[0])

```

52 Vad skriver programmet ut på konsolen? [Läs om push här.](https://javascript.info/array#methods-pop-push-shift-unshift)
```js
const arr = []
arr.push("apa")
arr.push("gris")
arr.push("hund")
console.log(arr[0])
```

53 Vad skriver programmet ut på konsolen?
```js
const arr = [2, 3, 5, 7, 9, 12];
arr.shift();
arr.pop();
console.log(arr);
```

54 Vad skriver programmet ut på konsolen? [Läs om slice här.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
```js
const arr = [1,2, "apa", "gorilla", 5, 6]
const foo = arr.slice(2,4)
console.log(foo)
```

55 Vad skriver programmet ut på konsolen?
```js
const arr = ["gris", "ko", "hund", "val", "zebra", "apa"]
const j = arr.length
for(let i = 0; i < j; i++) {
   console.log(arr[i].substring(0, 1))
}
```

56 Vad skriver programmet ut på konsolen?
```js
const arr = ["citron", "persika", "kiwi", "ananas", "apelsin", "banan"]
for (let i = 0; i < arr.length; i++) {
    if (i > 2)
        console.log(arr[i])
}
```

57 Vad skriver programmet ut på konsolen?
```js
let x = 0
const arr = [1, 3, 2, 7, 8, 5, 3, 1]
for(let i=0; i<arr.length; i++) {
   let element = arr[i]
   if(element > 3)
      x += element
}
console.log(x)
```

58 Vad skriver programmet ut på konsolen?
```js
let x = 0
const arr = [1, 3, 2, 7, 8, 5, 3, 4]
for(let i=0; i<arr.length; i++) {
   if(i > 3)
      x += arr[i]
}
console.log(x)
```

60 Ta reda på hur man använder funktionerna forEach, find, filter, map och sort. Skriv kod som testar dem. Läs om funktionerna här: [Array methods | javascript.info](https://javascript.info/array-methods)

Exempeldata:
```js
const australianAnimals = [
   "Koala",
   "Kangaroo",
   "Platypus",
   "Wombat",
   "Dingo",
   "Tasmanian Devil",
   "Echidna",
   "Quokka",
   "Wallaby",
   "Emu",
   "Cassowary",
   "Sugar Glider"
]
```
