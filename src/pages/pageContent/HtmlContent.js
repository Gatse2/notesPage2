
export const htmlContent = [
    {
        line: `<!DOCTYPE html> `,
        description: `Znacznik w którym zagnieżdzone są wszystkie inne znaczniki otwiera i zamyka dokument html jest to deklaracją typu dokumentu (Document Type Declaration, skrótowiec: doctype) dla pliku HTML. Deklaracja ta informuje przeglądarkę internetową o typie dokumentu, który jest renderowany, aby przeglądarka mogła poprawnie interpretować kod HTML. Konkretnie, deklaracjata informuje przeglądarkę, że plik jest w formacie HTML5, najnowszej wersji standardu języka HTML. Jest to ważne, ponieważ różne wersje HTML mają różne cechy i składnie, a przeglądarki muszą wiedzieć, jak interpretować kod, aby wyświetlić stronę internetową poprawnie.     Dlatego jest ważne, aby każdy plik HTML miał odpowiednią deklarację typu  `
    },
    {
        line: ` <html lang="pl">`,
        description: `dzięki temu przeglądarka wie, w jakim języku należy interpretować zawartość strony. To pomaga również w optymalizacji wyszukiwania dla witryn internetowych, ponieważ wyszukiwarki wiedzą, w jakim języku jest napisana zawartość witryny i mogą łatwiej wyświetlać wyniki związane z zapytaniem w tym języku.`
    },
    {
        line: ` <head>`,
        description: `zawiera metadane strony internetowej, takie jak tytuł strony, opis, słowa kluczowe, skrypty i styl. Metadane te są wykorzystywane przez przeglądarki internetowe i wyszukiwarki.`
    },
    {
    line: `   <meta charset="utf-8">`,
    description: ` to element HTML, który określa kodowanie znaków używane na stronie internetowej. W tym przypadku kodowanie to UTF-8, czyli standardowy format kodowania znaków Unicode. UTF-8 obsługuje znaki z różnych języków i systemów pisma, w tym także polskie litery.`
    },
    {
        line: `   <meta name="viewport" content="width=device-width, initial-scale=1">`,
        description: `Ważny znacznik, przeglądarka przechodzi w tryb mobilny. dzieki niemu piksele rzeczywiste zamieniają się w piksele nominalne `
    },
    {
        line: `   <meta http-equiv="X-UA-Compatible" content="ie=edge">`,
        description: `zapis dla IE by wyświetlał w najnowszej wersji. starszego aby strona się dobrze wyświtliła `
    },
    {
        line: `   <meta name="robot" content="index,nofollow">`,
        description: `info dla robotów by nie wchodziły i nie indeksowały np roboty google który analizje`
    },
    {
        line: `   <meta name="description" content="Notatki HTML CSS JS">`,
        description: `dodatkowy opis dla pozycjonowania strony`
    },
    {
        line: `   <meta name="autor" content="Ratal ">`,
        description: `informacje o autorze`
    },
    {
        line: `   <meta name="keywords" content="słowa kluczowe, tagi">`,
        description: `to tag HTML, który umożliwia określenie słów kluczowych związanych z zawartością strony internetowej, co ułatwia wyszukiwanie i indeksowanie przez wyszukiwarki internetowe.`
    },
    {
        line: `   <link rel="icon" href="favicon.ico">`,
      description: `dodawanie ikony na zakłądce w przegldarce`
    },
    {
      line: `   <title>Notatki początkującego programisty</title>`,
      description: `służy do określenia tytułu strony internetowej. Tytuł ten wyświetla się w pasku tytułu przeglądarki oraz jest często używany jako nazwa zakładki w przeglądarce. Ponadto, tytuł strony jest ważnym elementem SEO, ponieważ pomaga wskazać temat strony dla robotów wyszukiwarek i wpłynąć na pozycjonowanie w wynikach wyszukiwania.`
    },
    {
      line: `   <link rel="stylesheet" href="style.css">`,
      description: `import styli CSS z innego pliku`
    },
    {
      line: ` </head>`,
      description: `zamknięcie sekcji head`
    },
    {
      line: ` <body>`,
      description: `sekcja dokumentu zawierająca treść widoczną na stronie internetowej. W sekcji <body> umieszcza się zawartość strony, taką jak tekst, obrazy, media i elementy interaktywne, takie jak przyciski czy formularze.`
    },
    {
      line: '   <article></article>',
      description:
      "Definiuje artykuł lub sekcję w dokumencie. Może zawierać nagłówek, stopkę lub menu nawigacyjne.",
      },
      {
      line: '   <aside></aside>',
      description:
      "Definiuje boczny obszar, który zawiera zawartość poboczną, niezwiązana bezpośrednio z treścią główną dokumentu.",
      },
      {
      line: '   <br>',
      description:
      "Tworzy przerwę między liniami tekstu. Tag nie posiada zamknięcia.",
      },
      {
      line: '   <button></button>',
      description:
      "Definiuje przycisk, który może być użyty do wysłania formularza lub do wywołania działania w skrypcie JavaScript.",
      },
      {
      line: '   <details></details>',
      description:
      "Definiuje szczegóły, które użytkownik może otworzyć lub zamknąć. Jest używany do umieszczenia informacji dodatkowych lub ukrytych.",
      },
      {
      line: '   <div></div>',
      description:
      "Definiuje sekcję w dokumencie i jest używany do grupowania elementów HTML w celu stylizacji za pomocą CSS lub do manipulacji nimi za pomocą skryptów JavaScript.",
      },
      {
      line: '   <em></em>',
      description:
      "Tworzy wyróżnioną lub pochyloną sekcję tekstu.",
      },
      {
      line: '   <figure></figure>',
      description:
      "Definiuje ilustracje lub inny diagram, wraz z opcjonalnym podpisem.",
      },
      {
      line: '   <footer></footer>',
      description:
      "Definiuje stopkę strony lub sekcji.",
      },
      {
      line: '   <form></form>',
      description:
      "Definiuje formularz, który może być używany do zbierania danych od użytkownika.",
      },
      {
      line: '   <h1></h1>, <h2></h2>',
      description:
      "Definiuje nagłówek pierwszego lub drugiego poziomu.",
      },
      {
      line: '   <header></header>',
      description:
      "Definiuje nagłówek strony lub sekcji.",
      },
      {
      line: '   <img src="" alt="">',
      description:
      "Wstawia obrazek na stronie. 'src' to adres URL obrazka, a 'alt' to tekst zastępczy, który jest wyświetlany, gdy obrazek nie może zostać wyświetlony.",
      },
      {
      line: '   <input type="" name="" id="">',
      description:
      "Tworzy pole formularza, które pozwala użytkownikowi wprowadzić wartość. 'type' określa rodzaj pola formularza, 'name' określa nazwę pola, a 'id' określa unikalny identyfikator. typy inputów, text, password, number, select, radio, checkobx, hidden, file ",
      },
      {
      line: '   <label></label>',
      description:
      "Definiuje etykietę dla elementu formularza.",
      },
      {
      line: '   <nav></nav>',
      description:
      "Definiuje menu nawigacyjne.",
      },
      {
      line: '   <main></main>',
      description:
      "Definiuje zawartość główną strony.",
      },
      {
      line: '   <section></section>',
      description:
      "Definiuje sekcję w dokumencie.",
      },
      {
      line: '   <p></p>',
      description:
      "Tworzy akapit tekstu.",
      },
      {
        line: '   <a href="https://www.google.com">Google</a>',
        description: 'Tworzy odnośnik do innej strony lub do konkretnej części obecnej strony.',
      },
      {
        line: '   <ul><li>Jabłko</li><li>Banan</li><li>Pomarańcza</li></ul>',
        description: 'Tworzy listę punktowaną.',
      },
      {
        line: '   <ol><li>Jabłko</li><li>Banan</li><li>Pomarańcza</li></ol>',
        description: 'Tworzy listę numerowaną.',
      },
      {
        line: '   <span>Przykładowy tekst</span>',
        description: 'Tworzy kontener dla tekstu lub innego elementu, który nie zmienia znaczenia tekstu.',
      },
      {
        line: '   <strong>Pogrubiony tekst</strong>',
        description: 'Tworzy tekst pogrubiony.',
      },
      {
        line: '   <form></form>',
        description: 'Tworzy formularz do wysyłania danych na serwer.',
      },
      {
        line: '   <figcaption>Tytuł obrazka</figcaption>',
        description: 'Tworzy tytuł dla elementu <figure>.',
      },
      {
        line: '   <time datetime="2022-05-13">13 maja 2022</time>',
        description: 'Określa datę i czas, w tym również długość czasu lub interwału czasowego.',
      },
      {
        line: '   <address>Adres</address>',
        description: 'Tworzy sekcję zawierającą informacje o autorze lub właścicielu dokumentu.',
      },
      {
        line: '   <summary>Tytuł podsumowania</summary>',
        description: 'Tworzy tytuł dla elementu <details>.',
      },
      {
        line: '   <mark>Wyróżniony tekst</mark>',
        description: 'Tworzy tekst z podświetleniem.',
      },

    {
        line: ` </body>`,
        description: `Zamknięcie sekcji body`
    },
    {
        line: `</html>`,
        description: ` Oznacza zakończenie całego dokumentu. Jest to ostatni element dokumentu HTML i zwykle umieszcza się go na końcu pliku.`
    },

];

export const htmlShortcuts = [ 
  {
    line: `span{$"tekst"}*3`,
    description: `otrzymamy spana 3x, znak $ daje numeracje.
    <span>1"tekst"</span><span>2"tekst"</span><span>3"tekst"</span>`
  },
  {
    line: `Nav>ul>li*5>a`,
    description: `  <Nav>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </Nav>`
  },
  {
    line: `nav>ul>li*3>a[href="#"]{Tekst $}`,
    description: `<nav>
      <ul>
        <li><a href="#">Tekst 1</a></li>
        <li><a href="#">Tekst 2</a></li>
        <li><a href="#">Tekst 3</a></li>
      </ul>
    </nav>`
  },
  {
    line: `header+section*3+footer`,
    description: `<header></header>
    <section></section>
    <section></section>
    <section></section>
    <footer></footer>`
  },

  {
    line: `div.red.big`,
    description: `<div className="red big"></div>`
  },

  {
    line: `div#name.person`,
    description: `<div id="name" className="person"></div>`
  },
  {
    line: `li.list{Nazwa}*3`,
    description: `<li className="list">Nazwa</li>
    <li className="list">Nazwa</li>
    <li className="list">Nazwa</li>`
  },
  {
    line: `header+(section>div+div>p{tekst$}*3)+main+foote`,
    description: `  <header></header>
    <section>
      <div></div>
      <div>
        <p>tekst1</p>
        <p>tekst2</p>
        <p>tekst3</p>
      </div>
    </section>
    <main></main>
    <foote></foote>`
  },
]


