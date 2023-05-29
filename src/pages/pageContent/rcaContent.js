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
    setCount(previousValue => previousValue + 1); // przy useState i funkcji strzałkowej prierwszy argument to zawsze poprzednia wartość
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

export const exampleUseContext = `import { createContext } from 'react';   // importujemy createContext

export const defaultObject = {    // tworzymy obiekt z domyślnymi wartościami (niekoniecznie ale przydatnie)
  isUserLogged: false,
  toggleLoggedState: () => {
    console.log("appcontext");
  },
};

export const AppContext = createContext(defaultObject); // tworzymy i eksportujemy do głównego pliku kontener
`;
export const exampleUseContext2 = `import React, { useState } from 'react';
import { AppContext, defaultObject } from './AppContext';
import Button from './Button';

function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);

  const toggleLoggedState = () => {
    setIsUserLogged(prevState => !prevState);
  };

  return (
    <>
      <AppContext.Provider value={{ isUserLogged, toggleLoggedState, defaultObject }}> // przekazujemy dane jakie mają być dostępne
        <p>Jakiś tekst</p>
        <Button />
      </AppContext.Provider>
    </>
  );
}

export default App;`
;

export const exampleUseContext3 = `import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Button = () => {
  const { isUserLogged, toggleLoggedState, defaultObject} = useContext(AppContext);

  return (
    <button onClick={toggleLoggedState}>
      {isUserLogged ? 'Wyloguj' : 'Zaloguj'}
    </button>
  );
};

export default Button;
`;
export const exampleUseContext4 = `import React, {useState, createContext } from 'react'; //importujemy hook

export const AppContext = createContext();		

const AppProvider = ({children}) => {   // Definiujemy komponent funkcjonalny AppProvider, który będzie zawierał stan i logikę aplikacji. Komponent ten przyjmuje jako argument obiekt props, z którego destrukturyzujemy właściwość children.

    const [isUserLogged, setisUserLogged] = useState(false);	 //(przykładowa stała) pTworzymy stan isUserLogged przy użyciu hooka useState, który zwraca parę wartości: aktualną wartość stanu oraz funkcję pozwalającą na jego aktualizację. Na początku stan isUserLogged jest ustawiony na false.

    const toggleLoggedState = () =>  setisUserLogged(prevValue => !prevValue);  // przykładowa funkcja Tworzymy funkcję toggleLoggedState, która odwraca wartość stanu isUserLogged przy użyciu operatora negacji (!). Wartość stanu jest aktualizowana przy użyciu funkcji setisUserLogged.

   return(

   <AppContext.Provider value={{isUserLogged, toggleLoggedState}} >		// Zwracamy kontekst AppContext.Provider, który będzie dostępny dla wszystkich komponentów podrzędnych. Jako wartość kontekstu przekazujemy obiekt z dwoma właściwościami: isUserLogged oraz toggleLoggedState. Do właściwości isUserLogged przypisujemy aktualną wartość stanu isUserLogged, a do właściwości toggleLoggedState przypisujemy funkcję toggleLoggedState. Wartość {children} reprezentuje komponenty podrzędne, które będą renderowane przez AppProvider
      {children} //children po to by komponenty które będą w provider to żeby miały dostęp do nich 
   </AppContext.Provider>
   )
}

export default AppProvider`;

export const exampleUseContext5 = `		import  AppProvider  from './AppContext';

return( 
    <>
    <AppProvider > //i opkaowywujemy AppProviajderem nasz kod 
    <UserIndo/>
    <Button/>
    </AppProvider>					
    </>
`;

export const exampleUseContext6 =`				import React,{ useContext} from 'react';
import { AppContext } from './AppContext';
                                        
const UserInfo = () => {

    const { isUserLogged } = useContext(AppContext); // wyciągamy infdrmacje z contextu jaki nas interesuje w tym przypadku z AppContext
     const userLogged = isUserLogged ? 'zalogowany' : ' niezalogowany';

     return(
        <div>
            <p>użytkownik jest {userLogged}</p>
        </div>
  
        )
    }

export default UserInfo
`;

export const exampleUseReducer = `const [state, dispatch] = useReducer(reducer, initialState);
`;
export const exampleUseReducer2 = `import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unknown action type');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
`;

export const exampleUseCallback = `const memoizedCallback = useCallback(callback, dependencies);
`;
export const exampleUseCallback2 = `import React, { useState, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
`;

export const exampleUseMemo = `import React, { useMemo } from 'react';

const ExpensiveComponent = ({ value }) => {
  // Obliczenia, które chcemy optymalizować
  const expensiveResult = useMemo(() => {
    // Wykonaj kosztowne obliczenia
    let result = 0;
    for (let i = 0; i < value; i++) {
      result += i;
    }
    return result;
  }, [value]); // [value] jest zależnością

  return (
    <div>
      <p>Wartość: {value}</p>
      <p>Wynik obliczeń: {expensiveResult}</p>
    </div>
  );
};

export default ExpensiveComponent;
`
export const exampleUseMemo2 = `
import React, { useMemo, useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  return (
    <div>
      <button onClick={increment}>Inkrementuj</button>
      <ExpensiveComponent value={counter} />
    </div>
  );
};

export default App;
`
export const exampleUseRef = `import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Skupienie pola tekstowego po renderowaniu komponentu
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
};

export default MyComponent;
`;
export const exampleUseRef2 = `import React, { useRef, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const previousCountRef = useRef(null);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    previousCountRef.current = count;
  });

  const previousCount = previousCountRef.current;

  return (
    <div>
      <p>Obecny licznik: {count}</p>
      <p>Poprzedni licznik: {previousCount}</p>
      <button onClick={handleIncrement}>Zwiększ</button>
    </div>
  );
};

export default MyComponent;

`;
export const exampleCodeAxios = `import axios from 'axios' // importujemy biblioteke

const [ data , setData ] = useState([]);

const getApiData = () => { 
    // Make a request for a user with a given ID
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
          // handle success
        setData(response.data)
        console.log(response.data);
      })
      .catch(function (error) {
         // handle error
        console.log(error);
      })
      .finally(function () {
          // always executed
      });
};`