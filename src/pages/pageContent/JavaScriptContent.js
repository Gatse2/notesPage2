export const JavascriptGlossary = () => {
	return(
		<div  className='textDescription'>
			<p><span className="name">!!</span><span className="nameDescription">podwójna negacja</span></p>
			<p><span className="name">!=</span><span className="nameDescription">porównanie przeciwnych wartości, np. 5 != "-5" - daje true, różne od</span></p>
			<p><span className="name">!==</span><span className="nameDescription">porównanie wartości i typu wynik (false/true) przy takich samych wynikach i typach</span></p>
			<p><span className="name">%</span><span className="nameDescription">modulo, daje resztę z dzielenia. Dzielenie 20/3 daje wynik 2, 20/3 = 6.6666, 3x6=18, wynik modulo 2</span></p>
			<p><span className="name">*</span><span className="nameDescription">mnożenie</span></p>
			<p><span className="name">**</span><span className="nameDescription">potęga, np. 2 ** 5 czyli 2 do potęgi 5</span></p>
			<p><span className="name">+</span><span className="nameDescription">dodawanie</span></p>
			<p><span className="name">+=</span><span className="nameDescription">dodanie i zwrocenie wartości</span></p>
			<p><span className="name">=</span><span className="nameDescription">operator inicjalizacji do przypisania wartości</span></p>
			<p><span className="name">/</span><span className="nameDescription">dzielenie</span></p>
			<p><span className="name">!</span><span className="nameDescription">odwrócenie - NIE negacja, np. if(!(2==="2"))</span></p>
			<p><span className="name">&amp;&amp;</span><span className="nameDescription">operator logiczny "i", oba warunki muszą być prawdziwe</span></p>
			<p><span className="name">( )</span><span className="nameDescription">nawiasy służące do grupowania wyrażeń</span></p>
			<p><span className="name">++</span><span className="nameDescription">inkrementacja, dodanie i zwrócenie</span></p>
			<p><span className="name">--</span><span className="nameDescription">dekrementacja</span></p>
			<p><span className="name">+=</span><span className="nameDescription">dodanie i zwrocenie wartości</span></p>
			<p><span className="name">&lt;=</span><span className="nameDescription">mniejsze równe</span></p>
			<p><span className="name">&lt;</span><span className="nameDescription">mniejsze</span></p>
			<p><span className="name">&gt;=</span><span className="nameDescription">większe równe</span></p>
			<p><span className="name">&gt;</span><span className="nameDescription">większe</span></p>
			<p><span className="name">argumenty</span><span className="nameDescription">wartości przypisane do parametrów w momencie wywołania funkcji.</span></p>
			<p><span className="name">callback</span><span className="nameDescription">funkcja, którą przekazujemy jako argument do funkcji, którą wywołujemy, czyli funkcja wywołania zwrotnego (callback function).</span></p>
			<p><span className="name">closures</span><span className="nameDescription">dostęp do zmiennej spoza aktualnego zasięgu. Domknięcie występuje wtedy, gdy funkcja może zapamiętać i uzyskać dostęp do swojego zakresu leksykalnego, nawet po jego wywołaniu na zewnątrz.</span></p>
			<p><span className="name">console.dir()</span><span className="nameDescription">służy do wyświetlania informacji o obiekcie w konsoli przeglądarki.</span></p>
			<p><span className="name">console.log()</span><span className="nameDescription">służy do wyświetlania informacji w konsoli przeglądarki.</span></p>
			<p><span className="name">hoisting</span><span className="nameDescription">przenoszenie deklaracji na początek kodu na początku programu.</span></p>
			<p><span className="name">instrukcja</span><span className="nameDescription">linijka kodu.</span></p>
			<p><span className="name">konkatenacja</span><span className="nameDescription">łączenie wyrazów lub słów.</span></p>
			<p><span className="name">operand</span><span className="nameDescription">argument, na przykład w wyrażeniu a + b, operandami są a i b.</span></p>
			<p><span className="name">parametry</span><span className="nameDescription">służą do przekazania argumentów do wywołania funkcji jako zmienne lokalne.</span></p>
			<p><span className="name">polecenie</span><span className="nameDescription">pewna grupa słów lub operatorów, mających na celu wykonanie jakiegoś zadania.</span></p>
			<p><span className="name">scope</span><span className="nameDescription">zasięg zmiennej, może być globalny lub lokalny.</span></p>
		</div>
	)
}

export const exampleJSCode = `<!DOCTYPE html>
<html>
<head>
	<title>Licznik</title>
	<script src="sciezka/do/pliku.js"></script> // Skrypt wklejamy w head w html lub na końcu body
	<link rel="stylesheet" href="styl.css"> // podklejanie css do html za pomocą linka
	<style> // możemy wkleić style do css w head lu na końcu 
	body {
		margin: 0,
	}
	</style>
</head>
<body>
	<button id="counterButton">Kliknij mnie!</button>
	<p id="counterValue">0</p>

	<script>
		const counterButton = document.getElementById('counterButton');
		const counterValue = document.getElementById('counterValue');

		let counter = 0;

		counterButton.addEventListener('click', () => {
			counter++;
			counterValue.textContent = counter;
		});
	</script>
</body>
</html>`;

export const stringMethodsAndProperties = [
	{
	name: ".length",
	description: "zwraca długość łańcucha",
	example: `"Hello".length // 5`
	},
	{
	name: ".toUpperCase()",
	description: "zmienia wszystkie litery na wielkie",
	example: `"Hello".toUpperCase() // "HELLO"`
	},
	{
	name: ".toLowerCase()",
	description: "zmienia wszystkie litery na małe",
	example: `"Hello".toLowerCase() // "hello"`
	},
	{
	name: ".charAt()",
	description: "zwraca znak znajdujący się na określonej pozycji w łańcuchu",
	example:` "Hello".charAt(1) // "e"`
	},
	{
	name: ".trim()",
	description: "usuwa białe znaki z początku i końca łańcucha",
	example: `" Hello ".trim() // "Hello"`
	},
	{
	name: ".indexOf()",
	description: "zwraca indeks pierwszego wystąpienia określonego znaku lub podciągu w łańcuchu; jeśli nie ma takiego znaku lub podciągu, zwraca -1",
	example: `"Hello".indexOf("l") // 2`
	},
	{
	name: ".lastIndexOf()",
	description: "zwraca indeks ostatniego wystąpienia określonego znaku lub podciągu w łańcuchu; jeśli nie ma takiego znaku lub podciągu, zwraca -1",
	example: `"Hello".lastIndexOf("l") // 3`
	},
	{
	name: ".findIndex()",
	description: "zwraca indeks pierwszego elementu w tablicy, który spełnia warunek określony w funkcji przekazanej jako argument; jeśli nie ma takiego elementu, zwraca -1",
	example: `const array = [1, 2, 3]; const index = array.findIndex(number => number > 1);`
	},
	{
	name: ".includes()",
	description: "zwraca wartość true, jeśli łańcuch zawiera określony znak lub podciąg, w przeciwnym razie zwraca wartość false",
	example: `"Hello".includes("ell") // true`
	},
	{
	name: ".repeat()",
	description: "zwraca łańcuch składający się z powtórzonego określonej liczby razy pierwotnego łańcucha",
	example: `"abc".repeat(3) // "abcabcabc"`
	},
	{
	name: ".slice()",
	description: "zwraca wycinek łańcucha, począwszy od określonej pozycji i kończący się na określonej pozycji",
	example: `"Hello".slice(1, 3) // "el"`
	},
	{
	name: ".startsWith()",
	description: "zwraca wartość true, jeśli łańcuch zaczyna się od określonych znaków, w przeciwnym razie zwraca wartość false",
	example: `"Hello".startsWith("He") // true`
	},
	{
	name: ".endsWith()",
	description: "zwraca wartość true, jeśli łańcuch kończy się określonymi znakami, w przeciwnym razie zwraca wartość false",
	example: `"Hello".endsWith("lo") // true`
	},
	{
	name: ".toString()",
	description: "konwertuje liczbę na łańcuch",
	example: `(10000).toString() // "10000"`
	},
	{
	name: "String()",
	description: "konwertuje wartość na łańcuch",
	example: `String(10000) // "10000"`
	},
	{
	name: ".toString(2)",
	description: "konwertuje liczbę na łańcuch w systemie dwójkowym (binarnym)",
	example: `(255).toString(2) // "11111111"`
	},
	{
	name: ".toString(16)",
	description: "konwertuje liczbę na łańcuch w systemie szesnastkowym",
	example: `(255).toString(16) // "ff"`
	},
	{
	name: ".toExponential()",
	description: "konwertuje liczbę na łańcuch w notacji naukowej",
	example: `(1000000000).toExponential() // "1e+9"`
	},
	{
	name: "200..toString()",
	description: "konwertuje liczbę na łańcuch",
	example: `(200).toString() // "200"`
	},
	{
	name: ".concat()",
	description: "łączy dwa lub więcej łańcuchów w jeden łańcuch",
	example: `"Hello".concat(" World") // "Hello World"`
	},
	{
	name: ".replace()",
	description: "zastępuje określony podciąg w łańcuchu innym podciągiem lub wartością",
	example: `"Hello World".replace("World", "Universe") // "Hello Universe"`
	},
	{
	name: ".split()",
	description: "dzieli łańcuch na podciągi na podstawie określonego separatora i zwraca tablicę tych podciągów",
	example: `"apple,banana,orange".split(",") // ["apple", "banana", "orange"]`
	},
	{
	name: ".substring()",
	description: "zwraca podciąg łańcucha między dwoma określonymi indeksami (lub od jednego indeksu do końca)",
	example: `"Hello World".substring(6, 11) // "World"`
	},
	{
	name: ".toLocaleLowerCase()",
	description: "zmienia wszystkie litery w łańcuchu na małe, uwzględniając przy tym ustawienia regionalne użytkownika",
	example: `"Hello WORLD".toLocaleLowerCase() // "hello world"`
	},
	{
	name: ".toLocaleUpperCase()",
	description: "zmienia wszystkie litery w łańcuchu na duże, uwzględniając przy tym ustawienia regionalne użytkownika",
	example: `"Hello WORLD".toLocaleUpperCase() // "HELLO WORLD"`
	},
	{
	name: ".match()",
	description: "szuka dopasowań określonego wyrażenia regularnego w łańcuchu i zwraca tablicę z dopasowanymi wartościami",
	example: `"The quick brown fox".match(/[aeiou]/g) // ["e", "u", "i", "o", "o"]`
	}

];
export const numberMethods = [
	{
	  name: "Math.random()",
	  description: "zwraca losową liczbę z przedziału [0,1)",
	  example: "Math.random() // 0.123456789"
	},
	{
	  name: "Math.round()",
	  description: "zaokrągla do najbliższej liczby całkowitej",
	  example: "Math.round(3.14159) // 3"
	},
	{
	  name: "Math.floor()",
	  description: "zaokrągla w dół do najbliższej liczby całkowitej",
	  example: "Math.floor(3.999) // 3"
	},
	{
	  name: "Math.ceil()",
	  description: "zaokrągla w górę do najbliższej liczby całkowitej",
	  example: "Math.ceil(3.001) // 4"
	},
	{
	  name: "Math.trunc()",
	  description: "usuwa część dziesiętną, zwraca tylko część całkowitą",
	  example: "Math.trunc(3.999) // 3"
	},
	{
	  name: "Math.pow()",
	  description: "podnosi liczbę do potęgi",
	  example: "Math.pow(2, 3) // 8"
	},
	{
	  name: "Math.sqrt()",
	  description: "zwraca pierwiastek kwadratowy",
	  example: "Math.sqrt(25) // 5"
	},
	{
		name: "Math.sqrt()",
		description: "zwraca pierwiastek kwadratowy liczby",
		example: "Math.sqrt(4) // 2"
	  },
	  {
		name: "Math.abs()",
		description: "zwraca wartość bezwzględną liczby",
		example: "Math.abs(-10) // 10"
	  },
	  {
		name: "Math.sin()",
		description: "zwraca sinus liczby (w radianach)",
		example: "Math.sin(Math.PI / 2) // 1"
	  },
	  {
		name: "Math.cos()",
		description: "zwraca cosinus liczby (w radianach)",
		example: "Math.cos(Math.PI) // -1"
	  },
	  {
		name: "Math.tan()",
		description: "zwraca tangens liczby (w radianach)",
		example: "Math.tan(Math.PI / 4) // 1"
	  }
  ];
export const numberFunctions = [
	{
	  name: ".isInteger()",
	  description: "sprawdza, czy liczba jest liczbą całkowitą",
	  example: "(23.1).isInteger() // false"
	},
	{
	  name: ".isFinite()",
	  description: "sprawdza, czy liczba jest skończona",
	  example: "(2).isFinite() // true"
	},
	{
	  name: ".toString()",
	  description: "zamienia typ number na string w systemie dziesiętnym",
	  example: "(255).toString() // '255'"
	},
	{
	  name: ".toString(2)",
	  description: "zamienia typ number na string w systemie dwójkowym (binarnym)",
	  example: "(255).toString(2) // '11111111'"
	},
	{
	  name: ".toString(16)",
	  description: "zamienia typ number na string w systemie szesnastkowym",
	  example: "(255).toString(16) // 'ff'"
	},
	{
	  name: ".toExponential()",
	  description: "zamienia liczbę na notację naukową",
	  example: "(200).toExponential() // '2e+2'"
	},
	{
	  name: "Number()",
	  description: "zamienia string na number",
	  example: "Number('222') // 222"
	},
	{
	  name: "* 1",
	  description: "mnożenie przez 1 powoduje zamianę stringa na number",
	  example: "'23' * 1 // 23"
	},
	{
	  name: "parseInt()",
	  description: "zamienia string na number w systemie dziesiętnym lub innym określonym przez drugi argument",
	  example: "parseInt('22abc') // 22"
	},
	{
	  name: "parseFloat()",
	  description: "zamienia string na number z ułamkiem",
	  example: "parseFloat('2.32') // 2.32"
	}
  ];

export const arrayMethodsAndProperties = [
	{
	  name: ".concat()",
	  description: "Metoda ta łączy dwie lub więcej tablic, zwracając nową tablicę.",
	  example: `const array1 = [1, 2, 3];
		 const array2 = [4, 5, 6];
 		 const array3 = array1.concat(array2);
 		 console.log(array3);		 // [1, 2, 3, 4, 5, 6]`
	},
	{
	  name: ".every()",
	  description: "Metoda ta sprawdza, czy każdy element tablicy spełnia warunek zdefiniowany przez dostarczoną funkcję zwrotną (callback).",
	  example: `const array1 = [1, 2, 3];
 		const isPositive = (number) => number > 0;
 		console.log(array1.every(isPositive)); 		// true`
	},
	{
	  name: ".filter()",
	  description: "Metoda ta tworzy nową tablicę z elementami spełniającymi warunek zdefiniowany przez dostarczoną funkcję zwrotną (callback).",
	  example: `var tablica = [1, 2, 3, 4, 5];
	  var nowaTablica = tablica.filter(function(element, index, array) {
		return element % 2 === 0; // Filtrujemy tylko parzyste liczby
	  });
	  
	  console.log(nowaTablica); // Wyświetli: [2, 4]`
	},
	{
	  name: ".find()",
	  description: "Metoda ta zwraca pierwszy element tablicy, który spełnia warunek zdefiniowany przez dostarczoną funkcję zwrotną (callback).  Funkcja zwrotna przyjmuje trzy argumenty: element, index i array",
	  example: `var tablica = [1, 2, 3, 4, 5];
	  var znalezionyElement = tablica.find(function(element, index, array) {
		return element > 3; // Znalezienie pierwszego elementu większego niż 3
	  });
	  
	  console.log(znalezionyElement); // Wyświetli: 4`
	},
	{
	  name: ".forEach()",
	  description: "Metoda ta wykonuje dostarczoną funkcję zwrotną (callback) dla każdego elementu tablicy.",
	  example: `	  
  		userAge.forEach((age, index, array) => {
	  	section.innerHTML += ("<h1> użytkownik $ {index + 1} </h1> <p> $ {age} </p>")`
	},
	{
	  name: ".includes()",
	  description: "Metoda ta sprawdza, czy tablica zawiera określony element i zwraca wartość true lub false.",
	  example: `let animals =  ['Alpa', 'Horse', 'canary', 'cat', 'dog', 'mouse', 'pig']
	  animals.includes("rat");  // false
	  animals.includes("canary"); // true
	  
	  [20, 22, 120, 120].includes("22"); //false
	  [20, 22, 120, 120].includes(120); //true`
	},
	{
	  name: ".indexOf()",
	  description: "szuka elementu w tablicy, jeśli znajdzie zwraca index tego elementu, jeśli nie zwraca -1",
	  example: `const array1 = [1, 2, 3, 2];
  		console.log(array1.indexOf(2));	 	 // 1
		  ["Arek", 22, null, 22].indexOf(22); 	 // 1
		  ["Arek", 22, null, 22].indexOf("Are"); 	 //-1 `
	},
	{
	  name: ".join()",
	  description: "Metoda ta łączy elementy tablicy w ciąg znaków, oddzielone przecinkiem lub podanym separatorem.",
	  example: `const array1 = [1, 2, 3];
			const joinedArray = array1.join(", ");
			console.log(joinedArray);	// "1, 2, 3"`

	},
	{
		name: ".lastIndexOf()",
		description: "zwraca indeks ostatniego wystąpienia danego elementu w tablicy, lub -1 jeśli elementu nie ma",
		example: `const items = ["0", "1", "2", "3", "4", "4", "5"]
		
		const lastIndex = items.lastIndexOf("4")		// 5
		const lastIndex2 = items.lastIndexOf("6")	// -1
		["Arek", 22, null, 22].lastIndexOf(22);			//3`

	},
	{
		name: ".map()",
		description: `Metoda map() jest dostępna dla tablic w języku JavaScript i służy do przekształcania każdego elementu tablicy na podstawie funkcji zwrotnej. Metoda map() tworzy nową tablicę o tej samej długości co oryginalna, zawierającą wyniki funkcji zwrotnej dla każdego elementu. Element: Aktualny element tablicy, dla którego funkcja jest wywoływana. index (opcjonalny): Indeks aktualnego elementu w tablicy.	array (opcjonalny): Referencja do oryginalnej tablicy, na której wywołano metodę map().	Funkcja zwrotna w metodzie map() może wykonać dowolne operacje na elemencie i zwrócić przekształconą wartość. Każda zwrócona wartość będzie umieszczona w nowej tablicy utworzonej przez map(),`,
		example: `var tablica = [1, 2, 3, 4, 5];
		var tablicaTransformowana = tablica.map(function(element, index, array) {
		  return element * index + array.length;
		});
		
		console.log(tablicaTransformowana);
		// Wyświetli: [5, 6, 9, 13, 18]
		`
	},
	{
		name: ".pop()",
		description: "usuwa ostatni element z tablicy i zwraca ten element",
		example: `const items = ["apple", "banana", "cherry"]
		
		const poppedItem = items.pop()	// "cherry"
		console.log(items)			// ["apple", "banana"]`
	},
	{
		name: ".push()",
		description: "dodaje jeden lub więcej elementów na koniec tablicy i zwraca nową długość tablicy",
		example: `const items = ["apple", "banana", "cherry"]
		
		const newLength = items.push("orange", "kiwi")			// 5
		console.log(items)			// ["apple", "banana", "cherry", "orange", "kiwi"]`
	},
	{
		name: ".reduce()",
		description: "reduce(): Metoda reduce() wykonuje funkcję zwrotną na elementach tablicy, w celu obliczenia pojedynczej wartości wynikowej. Funkcja zwrotna przyjmuje cztery argumenty: accumulator (akumulator), element, index i array",
		example: `var tablica = [1, 2, 3, 4, 5];
		var suma = tablica.reduce(function(accumulator, element, index, array) {
		  return accumulator + element; // Sumowanie wszystkich elementów
		}, 0);
		
		console.log(suma); // Wyświetli: 15`
	},
	{
		name: ".reverse()",
		description: "//metoda destrukcyjna, odwraca kolejność, zwrtaca wartość/kopie",
		example: `const items = ["apple", "banana", "cherry"]
		
		items.reverse()	
		console.log(items)			// ["cherry", "banana", "apple"]`
	},
	{
		name: ".shift()",
		description: "Usuwa pierwszy element z tablicy i zwraca go. Metoda zmienia oryginalną tablicę.",
		example: `const items = ['one', 'two', 'three'];
		
		const firstItem = items.shift(); // 'one'
		console.log(items);		 // ['two', 'three']`
	},
 	{
 	  name: ".slice()",
 	  description: "zwraca część tablicy o określonym początku i końcu (indeksy włącznie)",
 	  example: `const items = ["0", "1", "2", "3", "4", "4", "5"]

		const items2 = items.slice(2)			// kasuje 2 pierwsze  ['2', '3', '4', '4', '5']
		const items3 = items.slice(2,4)			//  ['2', '3']
		
		const items2 = items.slice(-2)			//  kasuje 2 ostatnie elementy ['4', '5'] 
		const items3 = items.slice(2,4)			// items2 = ['2', '3']`
 	},
	{
		name: ".some()",
		description: "Sprawdza, czy co najmniej jeden element tablicy spełnia warunek określony przez funkcję zwrotną. Zwraca wartość logiczną.",
		example: `const numbers = [1, 2, 3, 4, 5];
	
		const hasEvenNumber = numbers.some((number) => number % 2 === 0);
		console.log(hasEvenNumber); 		// true`
	},
	{
		name: ".sort()",
		description: "Sortuje elementy tablicy. Metoda zmienia oryginalną tablicę.",
		example: `const items = ["dog", "cat", "elephant", "bee"];
		
		items.sort();
		console.log(items); 		// ['bee', 'cat', 'dog', 'elephant']`
	},
	{
		name: ".splice()",
		description: "Dodaje lub usuwa elementy z tablicy w miejscu. Metoda zmienia oryginalną tablicę.",
		example: `
		Metoda destrukcyjna. Zmienia tablice, nie tworzy nowej. 
		Kasuje i wyciąga z tablicy wartosci // zwraca skasowane elementy
		
		const animals = ["dog", "cat", "canary", "mouse"];
		animals.splice(2) 		 // ['dog', 'cat'] // zostawia tylko 2 pierwsze indexy resztę kasuje 
		animals.splice(0,2) 		// ['canary', 'mouse'] // od którego indeksu zacząć i ile elementów skasować
		animals.splice(-2) 		 // ['dog', 'cat'] // zostawia tylko 2 ostatnie indexy resztę kasuje 		
		animals.splice(0) 		// można czyścić tablice		

		splice umożliwia zastąpienie usuniętych elementów		
		
		const animals = ["dog", "cat", "canary", "mouse"];
			animals.splice(2, 1, "hamster")		 // podmien 2 index 1 wyraz na "hamster"
			animals = ['dog', 'cat', 'hamster', 'mouse']
				
		const animals = ["dog", "cat", "canary", "mouse"];
			animals.splice(2, 0, "Rat")		 // wstaw w 2 index 1 wyraz "hamster"
			animals = ['dog', 'cat', 'Rat', 'hamster', 'mouse']
		
		const animals = ["dog", "cat", "canary", "mouse"];
	 		animals.splice(0, 0, "Donky", "Monkey")		 // dodaj 2 elementy na początku tablicy
			['Donky', 'Monkey', 'dog', 'cat', 'canary', 'mouse']`
	},
	{
		name: ".split()",
		description: "Metoda ta dzieli ciąg znaków na tablicę elementów według określonego separatora.",
		example: `const str = "JavaScript is awesome"; 
			const words = str.split(" "); 
			console.log(words); 		// ["JavaScript", "is", "awesome"]

			"Marek Adam Justyna Teresa".split(' ');		// spacja rozdziela elementy
			Gdańsk,Elbląg,Gdynia,Sopot,Władysławowo,Hel".split(',')		 // przecinek rozdziela			
			"Gdańsk, Elbląg, Gdynia, Sopot, Wład, Hel".split(',', 3); 		// twprzy tylko 3 pierwsze argumenty odzielone przecinkiem`,
	},
	{
		name: ".toString()",
		description: "zwraca string z elementami tablicy oddzielonymi przecinkami",
		example: `const arr = [1, 2, 3]
		const str = arr.toString()		// "1,2,3"`
	},
	{
		name: ".unshift()",
		description: "dodaje jeden lub więcej elementów na początek tablicy i zwraca nową długość tablicy",
		example: `const arr = [1, 2, 3]
		const newLength = arr.unshift(0, -1)	// 5, tablica teraz wygląda tak [-1, 0, 1, 2, 3]`
	},
	{
		name: ".valueOf()",
		description: "zwraca wartość pierwotną obiektu (w przypadku tablicy jest to ta sama tablica)",
		example: `const arr = [1, 2, 3]
		const value = arr.valueOf()			// [1, 2, 3]`
	}
];

export const loops = [
	{
		name: "for loop",
		description: "Pętla for jest powszechnie używaną strukturą iteracyjną, która wykonuje określony blok kodu określoną liczbę razy.",
		example: `for (let i = 0; i < 5; i++) {
			console.log(i); // 0, 1, 2, 3, 4
		}`
	},
	{
		name: "while loop",
		description: "Pętla while wykonuje określony blok kodu dopóki podany warunek jest prawdziwy.",
		example: `let i = 0;
		while (i < 5) {
			console.log(i); // 0, 1, 2, 3, 4
			i++;
		}`
	},
	{
		name: "do-while loop",
		description: "Pętla do-while wykonuje określony blok kodu przynajmniej raz, a następnie kontynuuje, dopóki podany warunek jest prawdziwy.",
		example: `let i = 0;
		do {
			console.log(i); // 0
			i++;
		} while (i < 0);`
	},
	{
		name: "for...in loop",
		description: "Pętla for...in służy do iteracji po właściwościach obiektu. Wykorzystuje się ją, gdy chcemy przejrzeć i wykonać operacje na każdej właściwości obiektu. W poniższym przykładzie używamy pętli for...in do iteracji po właściwościach obiektu person i wyświetlamy nazwę właściwości oraz odpowiadające im wartości na konsoli: W tym przykładzie pętla for...in wykonuje się dla każdej właściwości obiektu person. Przy każdej iteracji zmienna key przyjmuje nazwę kolejnych właściwości obiektu. Wykorzystując tę nazwę, możemy uzyskać wartość odpowiadającą danej właściwości za pomocą notacji person[key].	Dla obiektu person pętla for...in zostanie wykonana trzy razy, a przy każdej iteracji wyświetli na konsoli nazwę właściwości oraz odpowiadającą jej wartość. W tym przypadku wynikiem na konsoli będą:",
		example: `const person = {
			name: "John",
			age: 30,
			city: "New York"
		};
		
		for (let key in person) {
			console.log(key + ": " + person[key]);
		}
		//name: John
		//age: 30
		//city: New York
		`
	},
	{
		name: "for...of loop",
		description: "Pętla for...of iteruje po elementach iterowalnych, takich jak tablica lub obiekt typu Set. W poniższym przykładzie używamy pętli do iteracji po elementach tablicy arr i wyświetlamy wartość każdego elementu na konsoli: Pętla for...of automatycznie obsługuje iterację po elementach iterowalnych i nie wymaga indeksów ani dodatkowych warunków. Wykonuje się dla każdego elementu z osobna, aż do przejścia przez wszystkie elementy w kolekcji. ",
		example: `const arr = [1, 2, 3];
		for (let element of arr) {
			console.log(element); // 1, 2, 3
		}`
	}
];
export const instructions = [
	{
	  name: "Instrukcja if",
	  description: "Instrukcja if pozwala na wykonanie bloku kodu, jeśli określony warunek jest spełniony.",
	  example: `const age = 20;
  
  if (age >= 18) {
	console.log("Osoba jest pełnoletnia");
  }`
	},
	{
	  name: "Instrukcja if...else",
	  description: "Instrukcja if...else pozwala na wykonanie różnych bloków kodu w zależności od spełnienia warunku.",
	  example: `const time = 10;
  
  if (time < 12) {
	console.log("Dzień dobry");
  } else {
	console.log("Dobry wieczór");
  }`
	},
	{
	  name: "Instrukcja else if",
	  description: "Instrukcja else if pozwala na sprawdzenie kolejnych warunków, jeśli poprzednie warunki nie są spełnione.",
	  example: `const grade = 85;
  
  if (grade >= 90) {
	console.log("Ocena: A");
  } else if (grade >= 80) {
	console.log("Ocena: B");
  } else if (grade >= 70) {
	console.log("Ocena: C");
  } else {
	console.log("Ocena: D");
  }`
	},
	{
	  name: "Instrukcja switch",
	  description: "Instrukcja switch pozwala na wybór jednego z wielu bloków kodu do wykonania, w zależności od wartości wyrażenia.",
	  example: `const day = "poniedziałek";
  
  switch (day) {
	case "poniedziałek":
	  console.log("Dziś jest poniedziałek");
	  break;
	case "wtorek":
	  console.log("Dziś jest wtorek");
	  break;
	case "środa":
	  console.log("Dziś jest środa");
	  break;
	default:
	  console.log("Dziś jest inny dzień");
  }`
	}
  ];

export const functions = [
	{
		name: "Deklaracja funkcji/Definicja funkcji",
		description: "Funkcje zdefiniowane za pomocą instrukcji function: Jest to tradycyjny sposób definiowania funkcji w JavaScript. Można je zadeklarować za pomocą słowa kluczowego function i przypisać do zmiennej lub wywołać bezpośrednio. Przykład",
		example: `function add(a, b) {
			return a + b; 	// result kończy działanie funkcji jesli nawet dalej coś jest 
		  }
		  
		  console.log(add(2, 3));	 // Output: 5 
		  `
	},
	{
		name: "Wyrażenia funkcyjne/Konstruktor funkcji",
		description: "Wyrażenia funkcyjne to funkcje, które są przypisane do zmiennej lub stałej. Mogą być anonimowe lub nazwane. Wyrażenia funkcyjne mogą być używane w tych samych miejscach, w których używane są inne wartości, np. przypisane do zmiennych, przekazane jako argumenty funkcji itp. Przykład:",
		example: `const multiply = function(a, b) {
			return a * b;
		  };
		  
		  console.log(multiply(2, 3)); // Output: 6
		  `
	},
	{
		name: "Strzałkowe funkcje",
		description: "Strzałkowe funkcje (Arrow functions): Są to nowa składnia wprowadzona w ECMAScript 6 (ES6). Strzałkowe funkcje są bardziej zwięzłe i automatycznie związane z kontekstem (nie mają własnego this). Są szczególnie użyteczne dla funkcji anonimowych i wyrażeń funkcyjnych. Przykład:",
		example: `const subtract = (a, b) => a - b;

		console.log(subtract(5, 2)); // Output: 3
		`
	},
	{
		name: "Metody obiektowe",
		description: "Funkcje, które są przypisane jako właściwości obiektu, są nazywane metodami obiektowymi. Wywołanie metody jest możliwe poprzez dostęp do niej z użyciem składni obiekt.metoda(). Wewnątrz metody this odnosi się do obiektu, do którego należy metoda. Przykład:",
		example: `const person = {
			name: 'John',
			greet: function() {
			  console.log('Hello, ' + this.name + '!');
			}
		  };
		  
		  person.greet(); // Output: Hello, John!
		  `
	},

];



export const domElements = [
	{
		name: "Pobieranie elementów DOM",
		description: "Aby pobrać elementy DOM, można użyć różnych metod dostępnych w języku JavaScript, takich jak getElementById, getElementsByClassName, getElementsByTagName lub querySelector. Te metody umożliwiają wyszukiwanie elementów na stronie na podstawie ich identyfikatora, klasy, tagu lub selektora CSS. Na przykład, jeśli chcemy pobrać element o określonym identyfikatorze, można użyć metody getElementById:",
		example: `const element = document.getElementById('elementId');`
	},

	{
		name: "Dodawanie elementów DOM:",
		description: `Aby dodać nowy element DOM do istniejącej struktury, możemy skorzystać z metody createElement, która tworzy nowy element o określonym tagu, oraz metod appendChild lub insertBefore, które dodają ten element do innego elementu.	Na przykład, aby dodać nowy element div do elementu o identyfikatorze "container", można użyć następującego kodu:`,
		example: `const container = document.getElementById('container');
		const newDiv = document.createElement('div');
		container.appendChild(newDiv);
		`
	},
	{
		name: "Edytowanie elementów DOM:",
		description: `Po pobraniu elementu DOM, możemy zmieniać jego atrybuty, treść lub inne właściwości. Przykładowe metody, które mogą zostać użyte do edycji elementów, to setAttribute, textContent i innerHTML. Na przykład, jeśli chcemy zmienić tekst w elemencie o identyfikatorze "myElement", można to zrobić w następujący sposób:`,
		example: `const element = document.getElementById('myElement');
		element.textContent = 'Nowy tekst';
		Możemy również zmieniać atrybuty elementów, na przykład:
		const link = document.getElementById('myLink');
		link.setAttribute('href', 'nowyAdresUrl');
		`
	},
	{
		name: "Edytowanie CSS przez JS w DOM",
		description: "Aby pobrać elementy DOM, można użyć różnych metod dostępnych w języku JavaScript, takich jak getElementById, getElementsByClassName, getElementsByTagName lub querySelector. Te metody umożliwiają wyszukiwanie elementów na stronie na podstawie ich identyfikatora, klasy, tagu lub selektora CSS. Na przykład, jeśli chcemy pobrać element o określonym identyfikatorze, można użyć metody getElementById:",
		example: `const element = document.getElementById('myElement');
		element.style.backgroundColor = 'red';
		//Możemy również użyć metody setAttribute, aby zmieniać atrybut "style" elementu. 
		const element = document.getElementById('myElement');
		element.setAttribute('style', 'color: blue;');
		//Możemy również dodawać lub usuwać klasy CSS elementu za pomocą właściwości classList.
		const element = document.getElementById('myElement');
		element.classList.add('highlight');
		//Aby usunąć klasę "highlight" z tego samego elementu, możemy użyć metody remove:
		element.classList.remove('highlight');		
		`
	},
	{
		name: "Pobieranie tekstu z input",
		description: "",
		example: `<input type="text" id="myInput">
		<button onclick="pobierzTekst()">Pobierz tekst</button>

		<script>
		function pobierzTekst() {
		var input = document.getElementById('myInput');
		var tekst = input.value;
		console.log(tekst);
		}
		</script>
		`
	},
	{
		name: "Kasowanie elementu DOM",
		description: "Metoda remove(): Ta metoda jest wywoływana bezpośrednio na elemencie, który chcesz usunąć. Jest bardziej nowoczesną alternatywą dla removeChild(). Na przykład:",
		example: `		const element = document.getElementById('myElement');
		element.remove();

		//Metoda parentNode.removeChild(): Ta metoda jest wywoływana bezpośrednio na rodzicu elementu i przyjmuje referencję do usuwanego elementu jako argument. Na przykład:
		const element = document.getElementById('myElement');
		const rodzic = element.parentNode;
		rodzic.removeChild(element);

		`
	},
	{
		name: "Metoda addEventListener",
		description: "Metoda addEventListener w JavaScript służy do dodawania funkcji obsługi zdarzeń (event handlerów) do określonego elementu HTML. Pozwala na reakcję na różne zdarzenia, takie jak kliknięcie myszą, naciśnięcie klawisza, zmiana wartości pola tekstowego, itp.",
		example: `	element.addEventListener(typZdarzenia, funkcjaObslugujaca, useCapture);
		const button = document.getElementById('myButton');
		function handleClick() {
		console.log('Kliknięto przycisk!');
		}
		button.addEventListener('click', handleClick);`,
		description2: "Poruszenie myszą po elemencie (mousemove)",
		example2: `	window.addEventListener("mousemove", handleMouseMove);
		function handleMouseMove(e) {
		  const x = e.clientX;
		  const y = e.clientY;
		  console.log("Pozycja myszy: ($ {x}, $ {y})");
		}`,
		description3: "Wprowadzenie tekstu w polu tekstowym (input)",
		example3: `	const input = document.getElementById('myInput');

		function handleInput() {
		  const value = input.value;
		  console.log('Wprowadzono tekst:', value);
		}
		
		input.addEventListener('input', handleInput);
		`,
		description4: "Nasłuchiwanie zdarzeń addEventListener",
		example4: `Zdarzenia myszy:

		click - Kliknięcie myszy na elemencie.
		dblclick - Podwójne kliknięcie myszy na elemencie.
		mousedown - Naciśnięcie przycisku myszy na elemencie.
		mouseup - Zwolnienie przycisku myszy na elemencie.
		mousemove - Poruszenie myszą po elemencie.
		mouseover - Najechanie myszą na obszar elementu.
		mouseout - Opuszczenie obszaru elementu myszą.
		Zdarzenia klawiatury:
		
		keydown - Naciśnięcie klawisza na elemencie.
		keyup - Zwolnienie klawisza na elemencie.
		keypress - Naciśnięcie klawisza (starsze zdarzenie, obecnie rzadziej używane).
		Zdarzenia formularzy:
		
		submit - Przesłanie formularza.
		reset - Zresetowanie formularza.
		focus - Uzyskanie fokusu na elemencie.
		blur - Utrata fokusu na elemencie.
		change - Zmiana wartości pola formularza.
		input - Wprowadzenie tekstu w polu tekstowym.
		Inne popularne zdarzenia:
		
		load - Załadowanie elementu, np. strony, obrazu, dźwięku itp.
		scroll - Przewijanie strony lub kontenera.
		resize - Zmiana rozmiaru okna przeglądarki.
		
		Funkcje dla addEventListener
		funkcje domyślne 
		e.keyCode // wyszukanie kodu klawisza dla klawiatury
		e.clientX //
		e.clientY //liczenie od początku okna dla myszki
		e.pageX //
		e.pageY // liczenie od początku strony dla myszki
		e.screenY // liczenie pozycji od ekranu dla myszki
		e.screenX // 
		e.offSetX //
		e.offSetY // liczenie pozycji od elementu dla myszki
		e.preventDefoult() // zapobiega odświeżeniu strony po wcisnieciu guzika w addeventListiner 
		e.target // wyświetla HTML obiektu
		e.currentTarget // wyświetla HTML obiektu
		e.target.parentNode.remove(); // kasuje rodzica i obiekt
		e.target.parentNode; // wyswietla/odwołuje się do  rodzica w consoli
		e.target.remove(); // kasowanie wskazanego boiegtu 
		e.target.textContent// wyswietla tekst targetu
		e.target.dataset.key // pobieranie atrybutu data z obiektu html

		`,
		description5: "Nasłuchianie wielu elementów",
		example5: `const hands = [...document.querySelectorAll('.select img')];

		const handleSelection = (e) => {
		  console.log(e.target); // Wyświetla kliknięty element (obrazek)
		};
		
		hands.forEach((hand) => {
		  hand.addEventListener('click', handleSelection);
		});
		
		`,
		description6: "Wprowadzenie tekstu w polu tekstowym (input)",
		example6: `	const input = document.getElementById('myInput');

		function handleInput() {
		  const value = input.value;
		  console.log('Wprowadzono tekst:', value);
		}
		
		input.addEventListener('input', handleInput);
		`,
		description7: "Wprowadzenie tekstu w polu tekstowym (input)",
		example7: `	const input = document.getElementById('myInput');

		function handleInput() {
		  const value = input.value;
		  console.log('Wprowadzono tekst:', value);
		}
		
		input.addEventListener('input', handleInput);
		`,
		
		
		

		
	},
	
	
]



