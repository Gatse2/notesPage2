export const jQueryExampleCode = `<!DOCTYPE html>
<html>
<head>
  <title>Przykład jQuery z inputem i przyciskiem</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    #output {
      margin-top: 10px;
      padding: 10px;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>
  <input type="text" id="inputText" placeholder="Wpisz tekst">
  <button id="addTextBtn">Dodaj tekst</button>
  <button id="addObjectBtn">Dodaj obiekt</button>

  <div id="output"></div>

  <script>
    $(document).ready(function() {
      // Obsługa przycisku "Dodaj tekst"
      $('#addTextBtn').click(function() {
        var inputText = $('#inputText').val(); // Pobranie wartości z pola tekstowego
        $('#output').append('<p>' + inputText + '</p>'); // Dodanie tekstu do diva wyjściowego
      });

      // Obsługa przycisku "Dodaj obiekt"
      $('#addObjectBtn').click(function() {
        var object = {
          "name": "John",
          "age": 30,
          "city": "New York"
        };
        $('#output').append('<pre>' + JSON.stringify(object, null, 2) + '</pre>'); // Dodanie obiektu do diva wyjściowego
      });
    });
  </script>
</body>
</html>`;
 const differencesJQJS = [
  {
    description: 'Wybieranie elementów z DOM',
    js: 'document.querySelector(selector)',
    jq: '$(selector)',
    example: `document.querySelector('#myElement')`
  },
  {
    description: 'Wybieranie elementów po identyfikatorze',
    js: 'document.getElementById(elementId)',
    jq: `$('#myElement')`,
    example: `document.getElementById('myElement')`
  },
  {
    description: 'Wybieranie elementów po klasie',
    js: 'document.getElementsByClassName(className)',
    jq: `$('.myClass')`,
    example: `document.getElementsByClassName('myClass')`
  },
  {
    description: 'Wybieranie elementów po tagu',
    js: 'document.getElementsByTagName(tagName)',
    jq: `$('tagName')`,
    example: `document.getElementsByTagName('div')`
  },
  {
    description: 'Dodawanie klasy do elementu',
    js: 'element.classList.add(className)',
    jq: `$(selector).addClass(className)`,
    example: `element.classList.add('highlight')`
  },
  {
    description: 'Usuwanie klasy z elementu',
    js: 'element.classList.remove(className)',
    jq: `$(selector).removeClass(className)`,
    example: `element.classList.remove('highlight')`
  },
  {
    description: 'Pobieranie tekstu z elementu',
    js: 'element.textContent',
    jq: `$(selector).text()`,
    example: `element.textContent`
  },
  {
    description: 'Ustawianie tekstu w elemencie',
    js: 'element.textContent = text',
    jq: `$(selector).text(text)`,
    example: `element.textContent = 'Hello, world!'`
  },
  {
    description: 'Pobieranie wartości pola tekstowego',
    js: 'input.value',
    jq: `$(input).val()`,
    example: `input.value`
  },
  {
    description: 'Ustawianie wartości pola tekstowego',
    js: 'input.value = value',
    jq: `$(input).val(value)`,
    example: `input.value = 'New value'`
  },
  {
    description: 'Pobieranie wartości atrybutu',
    js: 'element.getAttribute(attributeName)',
    jq: `$(selector).attr(attributeName)`,
    example: `element.getAttribute('src')`
  },
  {
    description: 'Ustawianie wartości atrybutu',
    js: 'element.setAttribute(attributeName, value)',
    jq: `$(selector).attr(attributeName, value)`,
    example: `element.setAttribute('src', 'image.jpg')`
  },
  {
    description: 'Pobieranie stylu elementu',
    js: `window.getComputedStyle(element).propertyName`,
    jq: `$(selector).css(propertyName)`,
    example: `window.getComputedStyle(element).color`
  },
  {
    description: 'Ustawianie stylu elementu',
    js: 'element.style.propertyName = value',
    jq: `$(selector).css(propertyName, value)`,
    example: `element.style.backgroundColor = 'red'`
  },
  {
    description: 'Pobieranie kodu HTML elementu',
    js: 'element.innerHTML',
    jq: `$(selector).html()`,
    example: `element.innerHTML`
  },
  {
    description: 'Ustawianie kodu HTML elementu',
    js: 'element.innerHTML = html',
    jq: `$(selector).html(html)`,
    example: `element.innerHTML = '<h1>Hello, world!</h1>'`
  },
  {
    description: 'Dodawanie treści do elementu',
    js: 'element.innerHTML += content',
    jq: `$(selector).append(content)`,
    example: `element.innerHTML += '<p>Additional content</p>'`
  },
  {
    description: 'Usuwanie elementu',
    js: 'element.parentNode.removeChild(element)',
    jq: `$(selector).remove()`,
    example: `element.parentNode.removeChild(element)`
  },
  {
    description: 'Dodawanie zdarzenia',
    js: `element.addEventListener(eventName, handler)`,
    jq: `$(selector).on(eventName, handler)`,
    example: `element.addEventListener('click', handleClick)`
  },
  {
    description: 'Usuwanie zdarzenia',
    js: `element.removeEventListener(eventName, handler)`,
    jq: `$(selector).off(eventName, handler)`,
    example: `element.removeEventListener('click', handleClick)`
  },
  {
    description: 'Wywołanie funkcji po załadowaniu strony',
    js: `window.addEventListener('load', handler)`,
    jq: `$(document).ready(handler)`,
    example: `window.addEventListener('load', init)`
  },
  {
    description: 'Animacje',
    js: `element.style.transition = 'property duration timing-function delay'`,
    jq: `$(selector).animate({properties}, duration, easing, complete)`,
    example: `element.style.transition = 'width 1s ease-in-out 0.5s'`
  },
  {
    description: 'Pobieranie danych AJAX',
    js: `fetch(url, options).then(response => response.json())`,
    jq: `$.ajax({url, dataType: 'json'})`,
    example: `fetch('https://api.example.com/data').then(response => response.json())`
  },
  {
    description: 'Iteracja po kolekcji',
    js: `Array.from(collection).forEach(callback)`,
    jq: `$.each(collection, callback)`,
    example: `Array.from(document.getElementsByTagName('li')).forEach(handleItem)`
  },
  {
    description: 'Pobieranie pozycji elementu',
    js: `element.getBoundingClientRect()`,
    jq: `$(selector).offset()`,
    example: `element.getBoundingClientRect()`
  }
];

export const Table = () => {
 
  return (
    <>
  <thead>
        <tr>
          <th>Opis</th>
          <th>jQuery</th>
          <th>JavaScript</th>
        </tr>
      </thead>
      <tbody>
        {differencesJQJS.map((row, index) => (
          <tr key={index}>
            <td>{row.description}</td>
            <td>{row.jq}</td>
            <td>{row.js}</td>
          </tr>
        ))}
      </tbody>
      </>
  );
};
