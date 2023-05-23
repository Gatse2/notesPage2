export const htmlReactCode = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Example</title>
</head>
<body>
  <div id="root"></div>

// Biblioteki wrzucamy do head/ biblioteki pobieramy ze strony	React//
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

// Babel - Nie korzystamy na produkcji (tylko podczas developmentu) //
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <div id="root"></div> // root dla naszego Reacta 
  <script type="text/babel" src="index.js"></script> // plik z scriptem 

</body>
</html>

// Uruchamiamy z live Server
`;

export const ReactCode = 
`
//Plik  index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

//Plik App.js
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('Kliknij przycisk');

  const handleClick = () => {
    setText('Tekst został zmieniony!');
  };

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>Kliknij mnie</button>
    </div>
  );
}

export default App;


`