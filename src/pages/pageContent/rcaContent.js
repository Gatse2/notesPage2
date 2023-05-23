export const hooksDescript = [
	{
		name: "useState",
		description: "useState jest hookiem w React, który umożliwia komponentom funkcyjnym przechowywanie stanu. Pozwala na deklarację zmiennej stanu wewnątrz komponentu i umożliwia jej aktualizację, co prowadzi do ponownego renderowania komponentu.",
		example: ``
	},
    {
		name: "useEffect",
		description: "",
		example: ``
	},
    {
		name: "useContext",
		description: "",
		example: ``
	},
    {
		name: "useRef",
		description: "",
		example: ``
	},
    {
		name: "useMemo",
		description: "",
		example: ``
	},
    {
		name: "useCallback",
		description: "",
		example: ``
	},
    {
		name: "useLayoutEffect",
		description: "",
		example: ``
	},
    {
		name: "useImperativeHandle",
		description: "",
		example: ``
	},
    {
		name: "useDebugValue",
		description: "",
		example: ``
	},
    {
		name: "useState",
		description: "",
		example: ``
	},
    {
		name: "useState",
		description: "",
		example: ``
	},
]

export const rcaExampleCode = `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
`

export const rcaExampleCode2 = `import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`

export const exampleCodeUseEffect = `useEffect(() => {
    // Kod efektu ubocznego
    // Może zawierać interakcje z zewnętrznymi zasobami, subskrypcje, manipulacje DOM, itp.
  }, [dependency1, dependency2]);`
export const exampleCodeUseEffect2 = `import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Efekt został uruchomiony');
    document.title ='Licznik: $ {count}';
    // Dodatkowy kod efektu...
    return () => {
      console.log('Efekt zostaje zdemontowany');
      // Kod czyszczenia lub zamykania zasobów...
    };
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Licznik: {count}</h1>
      <button onClick={increment}>Zwiększ licznik</button>
    </div>
  );
}
`