export const exampleTypeScriptCode1 = `let numbers: number[] = [1, 2, 3, 4, 5]; // Tablica liczb
let person: { name: string, age: number } = { name: "John", age: 25 }; // Obiekt z właściwościami name i age
let add: (x: number, y: number) => number = (x, y) => x + y; // Funkcja przyjmująca dwa argumenty liczbowe i zwracająca liczbę
enum Color { Red, Green, Blue }; // Enum zawierający dostępne kolory
const tupleEXample: [nunmber, string] = [2, 'a'] // tupla określa ile jest elementów w tablici i czym są
`

export const exampleTypeScriptCode2 = `function greet(name: string, age: number): void {
    console.log("Hello, " + name + "! You are " + age + " years old.");
  }
  `

export const exampleTypeScriptCode3 = `function greet(name: string, age?: number): void {
    if (age) {
      console.log("Hello, " + name + "! You are " + age + " years old.");
    } else {
      console.log("Hello, " + name + "!");
    }
  }
  `;

  export const exampleTypeScriptCode4 =`interface Person {
    name: string;
    age: number;
    email?: string;
    greet(): void; // funkja która nic nie zwraca
  }
  `
  export const exampleTypeScriptCode5 =`type Person = {
    name: string;
    age: number;
    email?: string;
    greet(): void; // funkja która nic nie zwraca
  };
  `
  export const exampleTypeScriptCode6 =`let numbers: number[] = [1, 2, 3, 4, 5];
  let names: string[] = ["Alice", "Bob", "Charlie"];
  `
  export const exampleTypeScriptCode7 =`
  // Deklarowanie typu stanu
  type CounterState = {
    count: number;
  };
  
  const Counter = () => {
    // Inicjalizacja stanu i jego typu
    const [state, setState] = useState<CounterState>({ count: 0 });
  
    const increment = () => {
      setState(prevState => ({ count: prevState.count + 1 }));
    };
  
    const decrement = () => {
      setState(prevState => ({ count: prevState.count - 1 }));
    };
  
    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  };
  
  export default Counter;`

export const exampleTypeScriptCode8 =`interface Person {
  name: string;
  age: number;
  greet(): void;
}
`
export const exampleTypeScriptCode9 =`interface Employee extends Person {
  employeeId: number;
  hireDate: Date;
}
`
export const exampleTypeScriptCode10 =`interface Manager extends Employee, CanManageProjects {
  department: string;
}
`;
export const exampleTypeScriptCode11 = `function identity<T>(value: T): T {
  return value;
}
`
export const exampleTypeScriptCode12 = `let result = identity<number>(10); // result ma typ number
let value = identity<string>("Hello"); // value ma typ string
`
export const exampleTypeScriptCode13 = `interface Lengthwise {
  length: number;
}

function printLength<T extends Lengthwise>(value: T): void {
  console.log("Length:", value.length);
}
`