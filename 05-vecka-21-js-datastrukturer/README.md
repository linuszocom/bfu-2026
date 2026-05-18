# Skämtmaskinen
Du ska skriva ett program som skriver ut roliga (?) skämt på konsolen.

## Beskrivning
När man startar ditt program ska ett skämt skrivas ut. Så här kan det se ut:
```
############################
Welcome to the joke factory!
Let me tell you something about programming:

Joke #3
> How do you comfort a JavaScript developer? You console them.

Thank you, come again!
```

---

Skämtet ska slumpas från en lista med skämt. Alla skämt ska kunna slumpas med lika hög chans. Se nedan för level ups.

Du behöver använda [funktionen Random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) för att slumpa ett heltal

Du kan skapa en egen lista med data [härifrån](https://icanhazdadjoke.com/) eller använda den här datan:

```js
const programmingJokes = [
  "Why don't programmers like nature? It has too many bugs.",
  "Why did the CSS developer go to therapy? To get rid of his margins.",
  "How do you comfort a JavaScript developer? You console them.",
  "Why did the CSS developer leave the restaurant? Because it had no class.",
  "Why did the JavaScript developer go missing? Because he didn't know when to return.",
  "Why did the HTML tag go to the party? Because it wanted to break the line.",
  "Why do JavaScript developers wear glasses? Because they don't C#.",
  "Why don't programmers like to use inline styles? Because they want to be classy.",
  "Why did the CSS selector break up with the HTML element? It found someone more specific.",
  "Why did the CSS developer apply for a job? They wanted to get a position.",
];

```

När du löst originaluppgiften, fortsätt med level ups:

1a Visa två skämt samtidigt

1b Visa två skämt samtidigt, men se till att det inte kan bli samma skämt

2 Varje skämt innehåller både en fråga och ett svar. Gör om listan, så att den innehåller objekt i stället för strängar. Varje objekt ska ha egenskaperna: id, question, answer. (id ska vara ett tal, börja räkna från 0 och öka 1 för varje objekt) Använd det för att ändra utskriften:

```
Joke #5
Question: ...
Answer:   ...
```

3 (svår) För denna uppgift behöver du använda Node.js i VS Code. Gör först så att programmet kan ta emot input från användaren. Du behöver skapa ett npm-projekt:
```js
// Skriv i terminalen:
npm init -y

// Lägg till type:module i filen package.json:
{
  "type": "module",   <-- lägg till den här raden överst, inuti objektet
  ...
}
```

Nu kan du använda koden nedan för att fråga användaren om man vill ha ett nytt skämt, eller om man vill avsluta. Du kan också fråga användaren hur många skämt man vill se.
```js
import readline from 'node:readline/promises'

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const answer = await rl.question('Do you want another joke? (Y/N)')

let input = await rl.question('How many jokes do you want?')
input = Number(input)
if( isNaN(input) ) {
	console.log('Please write a number, try again...')
}
rl.close()
```

4 Ge användaren möjlighet att lägga till nya skämt.
```
Do you want to add a joke?  Y   <-- användaren trycker "Y"
What is the question?  ....
What is the answer?  ....
Joke added!
```

5 Vill du ha fler idéer på vad man kan göra? Prova att bygga ett program som spelar "gissa talet". Programmet ska slumpa ett heltal mellan 1 och 100. Sedan ska spelaren försöka gissa talet. Om man gissar fel ska programmet säga om det hemliga talet är högre eller lägre. När man till slut gissar rätt ska programmet gratulera och skriva ut antalet gissningar.


---
