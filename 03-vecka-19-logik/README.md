# Pseudokod bootcamp
*Pseudo uttalas: "sev-do".*

## Instruktioner
Skriv pseudokod för nedanstående övningar. Följ mallen nedan för att strukturera din pseudokod, på svenska eller engelska. Om du inte förstår alla kommandon, känn dig fri att improvisera. Pseudokod:

```
START     <- talar om var programmet börjar
END       <- talar om var programmet slutar

FUNCTION "ett namn"               <- skapa en funktion
END FUNCTION                      <- här slutar funktionen
CALL FUNCTION "funktionens namn"  <- kör funktionen

IF "villkor" THEN      <- gör olika saker baserat på ett villkor
ELSE
END IF                 <- avsluta if/else

SET "name" (value)     <- spara ett värde under ett namn, så att du kan använda det senare i koden
INPUT "text"           <- be användaren om ett värde, använd med SET

PRINT "text"           <- visa ett värde för användaren
CALCULATE              <- räkna ut något
RANDOM BETWEEN "min" AND "max"  <- slumpa ett tal mellan värdena min och max, detta värde kan du använda med SET

LOOP FROM "nummer" TO "nummer"  <- upprepa något ett visst antal gånger
END LOOP                        <- avslutar det som ingår i upprepningen
```
---
Exempel 1: fråga efter användarens namn
```
START
SET namn (INPUT "Vad heter du?")
PRINT "Välkommen " + namn
END
```

---

Exempel 2: program som slår tre tärningar och lägger ihop resultatet. Om resultatet är större än 10 får man 10 i bonus.
```
START
SET tärning1 (RANDOM BETWEEN 1 AND 6)
SET tärning2 (RANDOM BETWEEN 1 AND 6)
SET tärning3 (RANDOM BETWEEN 1 AND 6)

SET summa (CALCULATE tärning1 + tärning2 + tärning3)

IF summa > 10 THEN
    SET summa (CALCULATE summa + 10)
END IF

PRINT "Summan är: " + summa
END
```

---

Exempel 3: Balder heter en berg- och dalbana på Liseberg. För att få åka den måste man vara minst 130 centimeter lång. Skriv pseudokod som slutar i antingen "du får åka" eller "du får inte åka". Koden kommer alltså att ha två möjliga slut.
```
START
FUNCTION "checkHeight"
	INPUT "my height" in cm
	SET "Balder minimum height" to 130 cm
	IF "my height" is greater than "Balder minimum height" THEN
		PRINT Wheee, Balder!!!
	ELSE
		PRINT No Balder for me!
	END IF
END FUNCTION
END
```
---


## 1 Räkna
Skriv pseudokod som räknar ner från 10. Dvs skriver ut talen 10, 9, osv ner till och med 0.


## 2 Sten, sax, påse
Skriv pseudokod för det klassiska spelet sten, sax, påse. Låt spelet spela för två spelare, och slumpa en hand för varje. Först till tre vinster vinner.


## 3 Tjugoett
Spelet 21 går ut på att försöka komma så nära 21 som möjligt, utan att komma över. Varje drag får man välja mellan att stanna eller gå vidare. Om man går vidare så dras ett kort. (Slumpa värde mellan 1 till 13, ess räknas som 1, knekt, dam, kung som 11, 12, 13.)

När en spelare stannar eller kommer över 21 är spelet slut. Då ska en ny spelare få chansen att börja om från 0.


## 4 Knock out
Detta spel har 2 tärningar.
1. Spelaren väljer ett "knock out number" - antingen 6, 7, 8 eller 9.
1. Spelaren kastar båda tärningarna. Spara resultatet från varje kast. De är spelarens poäng.
1. Om spelaren kastar något "knock out number" blir det 12 minuspoäng i stället för pluspoäng.


## 5 Going to Boston
Spelet har 3 st tärningar.
1. Kasta tärningarna och spara tärningen med högsta värdet.
1. Kasta de kvarvarande 2 och spara tärningen med högsta värdet.
1. Kasta sista tärningen och summera samtliga tre tärningar.
1. Spelaren med högsta sammanlagt värde vinner. (Max poäng är 18.)


## 6 FizzBuzz
Detta är ett känt kodproblem som ganska ofta används i intervjuer. Loopa igenom hundra tal och för varje:
+ Talet är jämt delbart med 3, skriv ut "Fizz"
+ Talet är jämt delbart med 5, skriv ut "Buzz"
+ Talet är jämt delbart med både 3 och 5, skriv ut "FizzBuzz"
+ Annars skriv ut talet.


## 7 Högt eller lågt
Fråga användaren efter ett tal mellan 1 och 100.

Programmet ska ha ett hemligt tal sparat. Det ska fortsätta fråga användaren till dess att användaren gissar det hemliga talet.

Om man gissade för högt eller för lågt så ska det skrivas ut, så att användaren har en rimlig chans att klara det.
