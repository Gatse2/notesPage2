const cssContent = [
  {
  name: 'align-content: center | flex-start | flex-end | space-between | space-around | stretch',
  description: 'Określa sposób wyrównania elementów wzdłuż osi kontenera w kontenerze flexbox.'
  },
  {
  name: 'align-items: center | flex-start | flex-end | baseline | stretch',
  description: 'Określa sposób wyrównania elementów wzdłuż osi skrzynki w kontenerze flexbox.'
  },
  {
  name: 'align-self: auto | flex-start | flex-end | center | baseline | stretch',
  description: 'Określa sposób wyrównania elementu wzdłuż osi skrzynki w kontenerze flexbox. Ta właściwość nadpisuje właściwość align-items dla danego elementu.'
  },
  {
  name: 'animation: name duration timing-function delay iteration-count direction fill-mode play-state',
  description: 'Określa animację CSS. Ta właściwość jest skrótem do ustawienia kilku innych właściwości animacji, takich jak nazwa animacji, czas trwania, funkcja czasu i liczba iteracji.'
  },
  {
  name: 'animation-delay: time',
  description: 'Określa opóźnienie startu animacji.'
  },
  {
  name: 'animation-direction: normal | reverse | alternate | alternate-reverse',
  description: 'Określa kierunek animacji po zakończeniu każdej iteracji.'
  },
  {
  name: 'animation-duration: time',
  description: 'Określa czas trwania animacji.'
  },
  {
  name: 'animation-fill-mode: none | forwards | backwards | both',
  description: 'Określa, jakie wartości właściwości CSS będą stosowane przed rozpoczęciem animacji i po jej zakończeniu.'
  },
  {
  name: 'animation-iteration-count: number | infinite',
  description: 'Określa liczbę iteracji animacji.'
  },
  {
  name: 'animation-name: none | name',
  description: 'Określa nazwę animacji lub jej brak.'
  },
  {
  name: 'animation-play-state: paused | running',
  description: 'Określa, czy animacja jest wstrzymana czy odtwarzana.'
  },
  {
  name: 'animation-timing-function: linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n)',
  description: 'Określa funkcję czasu animacji, która określa, jak animacja ma się zachowywać w czasie.'
  },
  {
  name: 'backface-visibility: visible | hidden',
  description: 'Określa, czy odwrotna strona elementu jest widoczna, gdy jest obrócony.'
  },
  {
  name: 'background: color image position/size repeat origin clip attachment',
  description: 'Określa tło elementu. Ta właściwość jest skrótem do ustawienia kilku innych właściwości tła, takich jak kolor tła, obraz tła i położenie obrazu tła.'
  },
  {
  name: 'background-attachment: fixed',
  description: 'Określa, czy obraz tła jest przypięty (stabilny) lub przewijany wraz z resztą strony'
  },
  {
  name: 'background-blend-mode: multiply',
  description: 'Określa mieszanie (blendowanie) koloru elementu tła z kolorami obiektów znajdujących się nad nim'
  },
  {
  name: 'background-color: #fff',
  description: 'Określa kolor tła elementu'
  },
  {
  name: 'background-image: url("image.jpg")',
  description: 'Określa obraz używany jako tło elementu'
  },
  {
  name: 'background-position: center',
  description: 'Określa położenie obrazu tła'
  },
  {
  name: 'background-repeat: no-repeat',
  description: 'Określa, czy obraz tła powinien być powtarzany, a jeśli tak, to w jakim kierunku'
  },
  {
  name: 'background-size: cover',
  description: 'Określa wymiary obrazu tła'
  },
  {
  name: 'border: 1px solid #000',
  description: 'Określa styl, grubość i kolor wszystkich czterech granic obramowania jednocześnie'
  },
  {
  name: 'border-bottom: 2px dashed #f00',
  description: 'Określa styl, grubość i kolor dolnej granicy obramowania'
  },
  {
  name: 'border-bottom-color: #00f',
  description: 'Określa kolor dolnej granicy obramowania'
  },
  {
  name: 'border-bottom-left-radius: 10px',
  description: 'Określa promień zaokrąglenia lewego dolnego rogu obramowania'
  },
  {
  name: 'border-bottom-right-radius: 10px',
  description: 'Określa promień zaokrąglenia prawego dolnego rogu obramowania'
  },
  {
  name: 'border-bottom-style: dotted',
  description: 'Określa styl dolnej granicy obramowania'
  },
  {
  name: 'border-bottom-width: 1px',
  description: 'Określa grubość dolnej granicy obramowania'
  },
  {
  name: 'border-collapse: collapse',
  description: 'Określa, czy granice komórek tabeli powinny się zlewać w jedną linię czy nie'
  },
  {
  name: 'border-color: #0f0',
  description: 'Określa kolor wszystkich czterech granic obramowania jednocześnie'
  },
  {
  name: 'border-image: url("border.png") 30 round',
  description: 'Określa obraz używany jako styl obramowania'
  },
  {
  name: 'border-image-outset: 10px 20px 30px 40px',
  description: 'Określa szerokość "wypukłości" (outset) zewnętrznych granic obrazka granicznego'
  },
  {
  name: 'border-image-repeat: round',
  description: 'Określa sposób, w jaki obrazek graniczny ma być powtarzany, gdy jest mniejszy niż obszar granicy'
  },
  {
  name: 'border-image-slice: 30% 70%',
  description: 'Określa, jak obrazek graniczny ma być podzielony, aby utworzyć granicę'
  },
  {
  name: 'border-image-source: url(border.png)',
  description: 'Określa źródło obrazka, który ma być używany jako granica'
  },
  {
  name: 'border-image-width: 10px 20px 30px 40px',
  description: 'Określa szerokość granicy obrazka granicznego'
  },
  {
  name: 'border-left: 1px solid black',
  description: 'Określa styl, kolor i szerokość granicy lewej strony elementu'
  },
  {
  name: 'border-left-color: red',
  description: 'Określa kolor granicy lewej strony elementu'
  },
  {
  name: 'border-left-style: dashed',
  description: 'Określa styl granicy lewej strony elementu'
  },
  {
  name: 'border-left-width: 3px',
  description: 'Określa szerokość granicy lewej strony elementu'
  },
  {
  name: 'border-radius: 10px',
  description: 'Określa zaokrąglenie rogów elementu'
  },
  {
  name: 'border-right: 1px solid black',
  description: 'Określa styl, kolor i szerokość granicy prawej strony elementu'
  },
  {
  name: 'border-right-color: blue',
  description: 'Określa kolor granicy prawej strony elementu'
  },
  {
  name: 'border-right-style: dotted',
  description: 'Określa styl granicy prawej strony elementu'
  },
  {
  name: 'border-right-width: 3px',
  description: 'Określa szerokość granicy prawej strony elementu'
  },
  {
  name: 'border-spacing: 10px 5px;',
  description: 'Określa odległość między granicami komórek w tabeli'
  },
  {
  name: 'border-style: solid | dashed | dotted | double | groove | ridge | inset | outset | none;',
  description: 'Określa styl linii granicy'
  },
  {
  name: 'border-top: 1px solid red;',
  description: 'Określa styl, kolor i szerokość górnej granicy elementu'
  },
  {
  name: 'border-top-color: blue;',
  description: 'Określa kolor górnej granicy elementu'
  },
  {
  name: 'border-top-left-radius: 20px;',
  description: 'Określa promień zaokrąglenia lewego górnego rogu elementu'
  },
  {
  name: 'border-top-right-radius: 20px;',
  description: 'Określa promień zaokrąglenia prawego górnego rogu elementu'
  },
  {
  name: 'border-top-style: dotted;',
  description: 'Określa styl górnej granicy elementu'
  },
  {
  name: 'border-top-width: 2px;',
  description: 'Określa szerokość górnej granicy elementu'
  },
  {
  name: 'border-width: 2px;',
  description: 'Określa szerokość granicy elementu'
  },
  {
  name: 'bottom: 50px;',
  description: 'Określa odległość między dolnym krawędzią elementu a dolnym krawędzią jego kontenera'
  },
  {
  name: 'box-shadow: 2px 2px 2px grey;',
  description: 'Określa cień elementu'
  },
  {
  name: 'box-sizing: border-box;',
  description: 'Określa model pudełka używany przez przeglądarkę do obliczania szerokości i wysokości elementu'
  },
  {
  name: 'caption-side: top',
  description: 'Określa położenie podpisu dla elementa table',
  },
  {
  name: 'clear: both',
  description:
      'Określa, które strony elementu powinny być wolne od elementów leżących powyżej niego',
  },
  {
  name: 'clip: rect(0px,0px,0px,0px)',
  description: 'Określa, co powinno być widoczne w elemencie poza jego granicami',
  },
  {
  name: 'color: #000',
  description: 'Określa kolor tekstu',
  },
  {
  name: 'column-count: 3',
  description: 'Określa liczbę kolumn w elemencie wielokolumnowym',
  },
  {
  name: 'column-fill: auto',
  description: 'Określa sposób wypełnienia kolumn w elemencie wielokolumnowym',
  },
  {
  name: 'column-gap: 10px',
  description: 'Określa odstęp między kolumnami w elemencie wielokolumnowym',
  },
  {
  name: 'column-rule: 1px solid black',
  description: 'Określa styl obramowania między kolumnami w elemencie wielokolumnowym',
  },
  {
  name: 'column-rule-color: #000',
  description: 'Określa kolor obramowania między kolumnami w elemencie wielokolumnowym',
  },
  {
  name: 'column-rule-style: solid',
  description: 'Określa styl obramowania między kolumnami w elemencie wielokolumnowym',
  },
  {
  name: 'column-rule-width: 1px',
  description: 'Określa szerokość obramowania między kolumnami w elemencie wielokolumnowym',
  },
  {
  name: 'column-span: all',
  description: 'Określa, czy element powinien rozciągać się przez wszystkie kolumny w elemencie wielokolumnowym',
  },
  {
  name: 'column-width: 200px',
  description: 'Określa szerokość pojedynczej kolumny w elemencie wielokolumnowym',
  },
  {
  name: 'columns: 2 150px',
  description: 'Określa liczbę kolumn i ich szerokość w elemencie wielokolumnowym',
  },
  {
  name: 'content: attr(data-content)',
  description: 'Określa zawartość wyświetlaną przez pseudoelement ::before i ::after',
  },
  {
  name: 'counter-increment: chapter 1',
  description: 'Określa wartość inkrementacji dla liczników zdefiniowanych przez @counter-style',
  },
  {
  name: 'counter-reset: chapter',
  description: 'Resetuje wartość licznika zdefiniowanego przez @counter-style',
  },
  {
  name: 'cursor: pointer',
  description: 'Określa kształt kursora podczas najechania na element',
  },
  {
  name: "direction: ltr | rtl | initial | inherit",
  description:
      "Określa kierunek tekstu, który będzie wyświetlany, np. od lewej do prawej lub od prawej do lewej",
  },
  {
  name: "display: block | inline | inline-block | flex | grid | none | initial | inherit",
  description:
      "Określa sposób wyświetlania elementu na stronie, np. jako blok, linia lub element flexbox/grid",
  },
  {
  name: "empty-cells: show | hide | initial | inherit",
  description:
      "Określa, czy puste komórki tabeli powinny być pokazywane, czy ukryte",
  },
  {
  name: "filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url() | initial | inherit",
  description:
      "Określa efekty wizualne, takie jak rozmycie, kontrast czy cień, które mogą być zastosowane do elementu",
  },
  {
  name: "flex: flex-grow flex-shrink flex-basis | auto | initial | none | unset",
  description:
      "Składa się z trzech wartości flex-grow, flex-shrink i flex-basis. Określa elastyczność elementu w kontenerze flexbox",
  },
  {
  name: "flex-basis: length | auto | content | initial | inherit",
  description:
      "Określa początkowy rozmiar elementu, zanim zostanie uwzględniona elastyczność elementu w kontenerze flexbox",
  },
  {
  name: "flex-direction: row | row-reverse | column | column-reverse | initial | inherit",
  description:
      "Określa kierunek, w którym elementy w kontenerze flexbox będą ułożone, np. w jednym rzędzie czy kolumnie",
  },
  {
  name: "flex-flow: flex-direction flex-wrap | initial | inherit",
  description:
      "Składa się z dwóch wartości flex-direction i flex-wrap. Określa kierunek i sposób zawijania elementów w kontenerze flexbox",
  },
  {
  name: "flex-grow: number | initial | inherit",
  description:
      "Określa, o ile element będzie się powiększał w kontenerze flexbox, gdy jest to wymagane",
  },
  {
  name: "flex-shrink: number | initial | inherit",
  description:
      "Określa, o ile element będzie się zmniejszał w kontenerze flexbox, gdy jest to wymagane",
  },
  {
  name: "flex-wrap: nowrap | wrap | wrap-reverse | initial | inherit",
  description:
      "Określa, czy elementy w kontenerze flexbox będą owijane, jeśli nie mieszczą się w jednym rzędzie lub kolumnie",
  },
  {
  name: "float: left | right | none | initial | inherit",
  description:
      "Określa, na której stronie elementu mają znajdować się inne elementy",
  },
  {
  name: 'font: bold 14px Arial, sans-serif',
  description: 'Określa styl, wagę, rozmiar i czcionkę tekstu'
  },
  {
  name: 'font-family: "Arial Black", sans-serif',
  description: 'Określa jedną lub więcej czcionek, które mają być użyte w tekście'
  },
  {
  name: 'font-size: 16px',
  description: 'Określa rozmiar czcionki tekstu'
  },
  {
  name: 'font-style: italic',
  description: 'Określa styl czcionki tekstu'
  },
  {
  name: 'font-variant: small-caps',
  description: 'Określa wariant czcionki tekstu'
  },
  {
  name: 'font-weight: 700',
  description: 'Określa wagę czcionki tekstu'
  },
  {
  name: 'height: 200px',
  description: 'Określa wysokość elementu'
  },
  {
  name: 'justify-content: center',
  description: 'Określa sposób wyrównania elementów wzdłuż głównej osi kontenera w kontenerze flexbox'
  },
  {
  name: 'left: 50px',
  description: 'Określa odległość elementu od lewej krawędzi jego kontenera'
  },
  {
  name: 'letter-spacing: 2px',
  description: 'Określa odstępy między literami w tekście'
  },
  {
  name: 'line-height: 1.5',
  description: 'Określa odstępy między wierszami tekstu'
  },
  {
  name: 'list-style: disc inside',
  description: 'Określa styl wypunktowania i pozycję etykiet listy'
  },
  {
  name: 'list-style-image: url("bullet.gif")',
  description: 'Określa obrazek, który ma być użyty jako punktor w liście'
  },
  {
  name: 'list-style-position: inside | outside',
  description: 'Określa czy znaczniki listy powinny być umieszczone wewnątrz czy na zewnątrz bloku listy.',
    },
    {
  name: 'list-style-type: none | disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-alpha | upper-alpha',
  description: 'Określa rodzaj znacznika listy.',
    },
    {
  name: 'margin: wartość | auto | inherit',
  description: 'Określa marginesy zewnętrzne dla elementu. Można podać wartości dla góry, prawej, dołu i lewej strony w kolejności przeciwnej do ruchu wskazówek zegara lub jeden wartość dla wszystkich marginesów. ',
    },
    {
  name: 'margin-bottom: wartość | auto | inherit',
  description: 'Określa margines dolny dla elementu.',
    },
    {
  name: 'margin-left: wartość | auto | inherit',
  description: 'Określa margines lewy dla elementu.',
    },
    {
  name: 'margin-right: wartość | auto | inherit',
  description: 'Określa margines prawy dla elementu.',
    },
    {
  name: 'margin-top: wartość | auto | inherit',
  description: 'Określa margines górny dla elementu.',
    },
    {
  name: 'max-height: wartość | none | inherit',
  description: 'Określa maksymalną wysokość elementu.',
    },
    {
  name: 'max-width: wartość | none | inherit',
  description: 'Określa maksymalną szerokość elementu.',
    },
    {
  name: 'min-height: wartość | inherit',
  description: 'Określa minimalną wysokość elementu.',
    },
    {
  name: 'min-width: wartość | inherit',
  description: 'Określa minimalną szerokość elementu.',
    },
    {
  name: 'opacity: wartość | inherit',
  description: 'Określa przeźroczystość elementu. Wartość musi być z przedziału od 0 do 1. ',
    },
    {
  name: 'order: liczba | inherit',
  description: 'Określa kolejność elementu w kontenerze flexbox.',
    },
    {
  name: 'ouname: wartość | inherit',
  descripton: 'Określa styl obramowania elementu. Składa się z 3 właściwości: kolor obramowania, styl obramowania i grubość obramowania.',
    },
    {
  name: 'outline-color: wartość | invert | inherit',
  description: 'Określa kolor obramowania elementu.',
    },
    {
  name: 'outline-offset: wartość | inherit',
  description: 'Określa odstęp między obramowaniem a elementem.',
    },
    {
  name: 'outline-style: wartość | inherit',
  description: 'Określa styl obramowania elementu.',
    },
    {
    name: 'outline-width: 2px | 3rem | 50%',
    description: 'Określa szerokość konturu elementu'
    },
    {
    name: 'overflow: visible | hidden | scroll | auto',
    description: 'Określa zachowanie elementu, gdy jego zawartość przekracza wymiary'
    },
    {
    name: 'overflow-x: visible | hidden | scroll | auto',
    description: 'Określa zachowanie elementu, gdy jego zawartość przekracza wymiary w osi X'
    },
    {
    name: 'overflow-y: visible | hidden | scroll | auto',
    description: 'Określa zachowanie elementu, gdy jego zawartość przekracza wymiary w osi Y'
    },
    {
    name: 'padding: 10px | 1rem 2rem | 5% 10% 15% 20%',
    description: 'Określa wewnętrzne marginesy elementu'
    },
    {
    name: 'padding-bottom: 10px | 1rem | 5%',
    description: 'Określa wewnętrzny margines dolny elementu'
    },
    {
    name: 'padding-left: 10px | 1rem | 5%',
    description: 'Określa wewnętrzny margines lewy elementu'
    },
    {
    name: 'padding-right: 10px | 1rem | 5%',
    description: 'Określa wewnętrzny margines prawy elementu'
    },
    {
    name: 'padding-top: 10px | 1rem | 5%',
    description: 'Określa wewnętrzny margines górny elementu'
    },
    {
    name: 'page-break-after: auto | always | avoid | left | right',
    description: 'Określa czy strona może zostać przerwana po elemencie'
    },
    {
    name: 'page-break-before: auto | always | avoid | left | right',
    description: 'Określa czy strona może zostać przerwana przed elementem'
    },
    {
    name: 'page-break-inside: auto | avoid',
    description: 'Określa czy strona może zostać przerwana wewnątrz elementu'
    },
    {
    name: 'perspective: 100px | none',
    description: 'Określa głębokość perspektywy elementu 3D'
    },
    {
    name: 'perspective-origin: 50% 50% | left top | center',
    description: 'Określa punkt perspektywy elementu 3D'
    },
    {
    name: 'position: static | relative | absolute | fixed | sticky',
    description: 'Określa pozycjonowanie elementu'
    },
    {
    name: 'quotes: none | "" | "<<" ">>" | "«" "»"',
    description: 'Określa rodzaj cudzysłowów dla elementów q i blockquote'
    },
    {
    name: 'resize: none | both | horizontal | vertical',
    description: 'Określa czy element może być zmieniany przez użytkownika'
    },
    {
    name: 'right: 20px',
    description: 'Określa odległość od prawego brzegu elementu',
    },
    {
    name: 'tab-size: 4 | 8',
    description:
        'Określa szerokość znaku tabulacji w tekście, wyrażoną w liczbach lub jako wartość "tab" zdefiniowaną przez przeglądarkę',
    },
    {
    name: 'table-layout: fixed | auto',
    description:
        'Określa sposób obliczania szerokości kolumn tabeli. Wartość "fixed" oznacza, że kolumny są rozdzielane równomiernie, a wartość "auto" oznacza, że kolumny są dopasowane do treści w komórkach',
    },
    {
    name: 'text-align: left | center | right | justify',
    description:
        'Określa wyrównanie tekstu wewnątrz elementu, czy to do lewej, środka, prawej strony czy wyjustowane',
    },
    {
    name: 'text-decoration: none | underline | overline | line-through',
    description:
        'Określa dekorację tekstu, taką jak podkreślenie, nadkreślenie lub przekreślenie',
    },
    {
    name: 'text-indent: 20px',
    description: 'Określa wcięcie pierwszego wiersza tekstu w bloku',
    },
    {
    name: 'text-justify: auto | inter-word | inter-character | none',
    description:
        'Określa sposób wyrównywania tekstu między spacjami, takim jak "inter-word" dla wyrównania do pełnych słów, "inter-character" dla wyrównywania między znakami lub "none" dla braku wyrównania',
    },
    {
    name: 'text-overflow: clip | ellipsis',
    description:
        'Określa, jak przycinać tekst, który jest za długi, z wartością "clip" dla obcinania tekstu, który wykracza poza element, lub "ellipsis" dla wyświetlenia "..." na końcu tekstu, który jest za długi',
    },
    {
    name: 'text-shadow: 1px 1px 1px black',
    description:
        'Określa cień tekstu, podając wartości poziomego przesunięcia, pionowego przesunięcia, rozmycia i koloru cienia',
    },
    {
    name: 'text-transform: uppercase | lowercase | capitalize',
    description:
        'Określa, jak ma zostać zmieniona wielkość liter w tekście, np. na duże, małe lub każdej pierwszej litery słowa',
    },
    {
    name: 'top: 20px',
    description: 'Określa odległość od górnego brzegu elementu',
    },
    {
    name: 'transform: rotate(45deg) | scale(1.5) | translate(50px, 100px)',
    description:
      'Określa transformacje elementu, takie jak obrót, skalowanie czy przesunięcie',
      },
      {
    name: 'transform-origin: 50% 50% | left top | center',
    description:
      'Określa punkt, w którym ma zostać wykonana transformacja elementu',
      },
      {
    name: 'transform-style: flat | preserve-3d',
    description:
      'Określa, czy potomne elementy elementu transformowanego zachowają trójwymiarową perspektywę czy będą płaskie',
      },
      {
    name: 'transition: width 2s ease 0.5s | all 1s ease-out',
    description:
      'Określa przejścia między wartościami właściwości elementu. Można tutaj określić, które właściwości mają przejścia, czas trwania, funkcję czasu oraz opóźnienie',
      },
      {
    name: 'transition-delay: 1s',
    description:
      'Określa opóźnienie przejścia, czyli czas, jaki musi upłynąć przed rozpoczęciem animacji',
      },
      {
    name: 'transition-duration: 2s',
    description:
      'Określa czas trwania przejścia, czyli czas, przez jaki przejście ma być wykonane',
      },
      {
    name: 'transition-property: width | all',
    description:
      'Określa, które właściwości elementu mają być poddane przejściu',
      },
      {
    name: 'transition-timing-function: ease | linear | ease-in-out',
    description:
      'Określa funkcję czasu przejścia, która określa, jak animacja powinna przyspieszać i zwalniać w trakcie przejścia',
      },
      {
    name: 'unicode-bidi: normal | embed | bidi-override',
    description:
      'Określa, czy tekst ma być wyświetlany od lewej do prawej (normal), od prawej do lewej (bidi-override) czy ma być ustawiany automatycznie w zależności od języka (embed)',
      },
      {
    name: 'user-select: none | auto',
    description:
      'Określa, czy użytkownik może zaznaczać tekst wewnątrz elementu czy nie',
      },
      {
    name: 'vertical-align: top | middle | bottom',
    description:
      'Określa wyrównanie elementu w pionie w stosunku do linii bazowej',
      },
      {
    name: 'visibility: visible | hidden | collapse',
    description:
      'Określa, czy element jest widoczny na stronie czy nie, a także czy miejsce na stronie, które zajmuje, jest rezerwowane czy nie',
      },
      {
      name: 'white-space: normal | nowrap | pre | pre-wrap | pre-line',
      description:
        'Określa sposób wyświetlania białych znaków w tekście',
        },
        {
      name: 'width: auto | wartość w px, em, %',
      description:
        'Określa szerokość elementu. Domyślnie szerokość dopasowuje się do zawartości elementu, jeśli nie zostanie podana wartość',
        },
        {
      name: 'word-break: normal | break-all | keep-all',
      description:
        'Określa, czy wyrazy powinny być łamane wewnątrz linii, jeśli przekraczają szerokość elementu',
        },
        {
      name: 'word-spacing: normal | wartość w px, em',
      description:
        'Określa odstęp między słowami w tekście',
        },
        {
      name: 'word-wrap: normal | break-word',
      description:
        'Określa, czy wyrazy powinny być łamane wewnątrz linii, jeśli przekraczają szerokość elementu',
        },
        {
      name: 'writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr',
      description:
        'Określa kierunek i sposób pisania tekstu',
        },
        {
      name: 'z-index: wartość',
      description:
        'Określa położenie warstwy w stosunku do innych elementów na stronie',
        },
];
export const cssPseudoClass = [
  {
  name: ":hover",
  description: "Pseudoklasa :hover jest używana do stylizacji elementu, gdy kursor jest nad nim.",
  example: "a:hover { color: red; }"
  },
  {
  name: ":active",
  description: "Pseudoklasa :active jest używana do stylizacji elementu, gdy jest aktywowany (naciśnięty).",
  example: "button:active { background-color: yellow; }"
  },
  {
  name: ":focus",
  description: "Pseudoklasa :focus jest używana do stylizacji elementu, gdy jest w fokusu (np. po kliknięciu lub po użyciu klawisza Tab).",
  example: "input:focus { border: 2px solid blue; }"
  },
  {
  name: ":first-child",
  description: "Pseudoklasa :first-child jest używana do stylizacji elementu, który jest pierwszym dzieckiem swojego rodzica.",
  example: "ul li:first-child { font-weight: bold; }"
  },
  {
  name: ":last-child",
  description: "Pseudoklasa :last-child jest używana do stylizacji elementu, który jest ostatnim dzieckiem swojego rodzica.",
  example: "ul li:last-child { color: red; }"
  },
  {
  name: ":nth-child(n)",
  description: "Pseudoklasa :nth-child(n) jest używana do stylizacji elementów, które są n-tym dzieckiem swojego rodzica.",
  example: "ul li:nth-child(2n) { background-color: lightgray; }"
  },
  {
  name: ":not(selector)",
  description: "Pseudoklasa :not(selector) jest używana do stylizacji elementów, które nie pasują do określonego selektora.",
  example: "p:not(.special) { font-style: italic; }"
  },
  {
  name: ":enabled",
  description: "Pseudoklasa :enabled jest używana do stylizacji elementu, który jest aktywny i można z nim interagować.",
  example: "input:enabled { background-color: white; }"
  },
  {
  name: ":disabled",
  description: "Pseudoklasa :disabled jest używana do stylizacji elementu, który jest nieaktywny i nie można z nim interagować.",
  example: "button:disabled { opacity: 0.5; }"
  },
  {
  name: ":checked",
  description: "Pseudoklasa :checked jest używana do stylizacji elementu typu checkbox lub radio, który jest zaznaczony.",
  example: "input[type='checkbox']:checked { border-color: green; }"
  },
  {
  name: ":before",
  description: "Pseudoklasa :before jest używana do dodawania zawartości przed zawartością danego elementu.",
  example: "p:before { content: 'Przed tekstem '; }"
  },
  {
    name: ":after",
    description: "Pseudoklasa :after jest używana do dodawania zawartości za zawartością danego elementu.",
    example: ` //Oto przykład tworzenia linii za pomocą pseudo-klasy ::after
    <div class="line-container"></div>

    .line-container {
      position: relative;   //- ta właściwość jest wymagana, aby ustawić kontekst pozycjonowania dla pseudo-klasy
      width: 200px;
      height: 2px;
      background-color: black;
    }
    
    .line-container::after {
      content: "";    
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: red;
    }`
    },
    {
    name: ":first-letter",
    description: "Pseudoklasa :first-letter jest używana do stylizacji pierwszej litery zawartości elementu.",
    example: "p:first-letter { font-size: larger; }"
    },
    {
    name: ":first-line",
    description: "Pseudoklasa :first-line jest używana do stylizacji pierwszego wiersza zawartości elementu.",
    example: "p:first-line { font-weight: bold; }"
    },
    {
    name: ":target",
    description: "Pseudoklasa :target jest używana do stylizacji elementu, na który wskazuje identyfikator w adresie URL.",
    example: "#section1:target { background-color: yellow; }"
    },
    {
    name: ":lang(language)",
    description: "Pseudoklasa :lang(language) jest używana do stylizacji elementu, który ma określony język.",
    example: "p:lang(fr) { font-style: italic; }"
    },
    {
    name: ":root",
    description: "Pseudoklasa :root jest używana do stylizacji korzenia dokumentu (najwyższego poziomu elementu HTML).",
    example: ":root { --main-color: blue; }"
    },
    {
    name: ":empty",
    description: "Pseudoklasa :empty jest używana do stylizacji elementu, który nie zawiera żadnych dzieci lub tekstowej zawartości.",
    example: "p:empty { display: none; }"
    }

];

export const CssNames = () => {
  const code = `div p {   /* selektor złożony */
  text-align: center;     /* blok deklaracji */
  margin: 10px 20px;      /* blok deklaracji */
}`
  return(
    <div>
  <p>Selektory:</p>
  <p>.p - selektor klasy</p>
  <p>#p - selektor identyfikatora</p>
  <p>[attr] - selektor atrybutu</p>
  <p>[attr=value] - selektor atrybutu z wartością</p>
  <p>[attr~=value] - selektor atrybutu zawierającego wartość</p>
  <p>[attr|=value] - selektor atrybutu zaczynającego się od wartości zakończonej "-"</p>
  <p>[attr^=value] - selektor atrybutu zaczynającego się od wartości</p>
  <p>[attr$=value] - selektor atrybutu kończącego się wartością</p>
  <p>[attr*=value] - selektor atrybutu zawierającego wartość</p>
  <p>Operatory:</p>
  <p>{'{}'} - blok deklaracji</p>
  <p>, - grupowe selektory</p>
  <p>{'>'} - selektor dziecka</p>
  <p>+ - selektor młodszego brata</p>
  <p>~ - selektor młodszych braci</p>
  <p>* - selektor uniwersalny</p>
  <p>Przykładowa reguła CSS:</p>
  <pre className="descriptionCode">
    {code}
  </pre>
  <p>W powyższej regule zastosowano selektor złożony, który odnosi się do wszystkich elementów p znajdujących się w elemencie div. W bloku deklaracji zdefiniowano dwie właściwości: text-align i margin.</p>
</div>

);
};

export const CssVideo = () => {
  return(
    <>
    
<p>      video/ źródło filmu max 1MB / dodanie obsługi filmu</p>
<p>         {`<video src="video/city.mp4"  controls controlsList="nofullscreen" poster="img/city960x540.jpg"></video> controls dodanie interfejsu playera   `}</p>
<p>         {`<video src="video/city.mp4" ></video> dodanie źródła filmu`}</p>
<p>         {` <video src="video/city.mp4" controls></video> controls dodanie interfejsu playera`}</p>
<p>            controls -// wyświetlenie interfejsu playera </p>
<p>            controlsList="nofullscreen" // wyłączenie w interfejsie znaczka fullscreen</p>
<p>            poster="img/city960x540.jpg"// jaki obrazek ma sięwyświetlać przed załądowaniem filmu</p>
<p>            autoplay="true" // auto start flimu przy załadowaniu strony, można też wipsać samo autoplay</p>
<p>            loop  // pętla, zapętlenie filmu</p>
<p>            muted - określa, czy dźwięk ma być wyciszony</p>
<p>            preload - określa, czy wideo ma być załadowane przy ładowaniu strony</p>

<p>Poniżej znajduje się lista właściwości metody oraz ustawień dla elementu video w HTML, CSS i JavaScript:</p>
<p>	HTML</p>
<p>	autoplay - określa, czy wideo ma być odtwarzane automatycznie po załadowaniu strony</p>
<p>	controls - określa, czy kontrolki odtwarzania (np. przyciski play/pause) mają być wyświetlane</p>
<p>	height - określa wysokość elementu video</p>
<p>	loop - określa, czy wideo ma być odtwarzane w pętli</p>
<p>	muted - określa, czy dźwięk ma być wyciszony</p>
<p>	poster - określa obraz, który ma być wyświetlany przed rozpoczęciem odtwarzania wideo</p>
<p>	preload - określa, czy wideo ma być załadowane przy ładowaniu strony</p>
<p>	src - określa adres URL do pliku wideo</p>
<p>	width - określa szerokość elementu video</p>
<p>	crossorigin - określa, czy wideo ma być pobierane z innego źródła za pomocą mechanizmu CORS (Cross-Origin Resource Sharing)</p>
<p>	playsinline - określa, czy wideo ma być odtwarzane na stronie, zamiast w osobnym oknie</p>
<p>	srcdoc - określa zawartość wideo, która ma być wyświetlona (może być używana zamiast atrybutu src)</p>
<p></p>
<p>	CSS</p>
<p></p>
<p>	object-fit - określa, jak wideo ma być dopasowywane do elementu video</p>
<p>	height - określa wysokość elementu video</p>
<p>	width - określa szerokość elementu video</p>
<p>	object-position - określa pozycję wideo w elemencie video</p>
<p>	overflow - określa, co ma być wyświetlane, jeśli element video jest za mały, aby pomieścić wszystko</p>
<p>	visibility - określa, czy element video jest widoczny</p>

<p>	JavaScript</p>

<p>	play() - rozpoczyna odtwarzanie wideo</p>
<p>	pause() - wstrzymuje odtwarzanie wideo</p>
<p>	muted - określa, czy dźwięk jest wyciszony (można też użyć metody muted = true/false do wyciszenia/włączenia dźwięku)</p>
<p>	currentTime - określa aktualny czas odtwarzania wideo (można też użyć metody currentTime = value do ustawienia aktualnego czasu odtwarzania)</p>
<p>	duration - określa całkowity czas trwania wideo</p>
<p>	ended - określa, czy odtwarzanie wideo zostało zakończone</p>
<p>	loop - określa, czy wideo ma być odtwarzane w pętli (można też użyć metody loop = true/false do włączenia/wyłączenia pętli)</p>
<p>	addTextTrack() - dodaje nowy tekstowy ślad do wideo</p>
<p>	canPlayType() - zwraca informację, czy dany typ pliku wideo może zostać odtworzony na danym urządzeniu</p>
<p>	load() - ponownie ładuje wideo</p>
<p>	paused - określa, czy odtwarzanie wideo jest wstrzymane (można też użyć metody paused = true/false do wstrzymania/wznowienia odtwarzania)</p>
<p>	playbackRate - określa szybkość odtwarzania wideo (można też użyć metody playbackRate = value do ustawienia szybkości odtwarzania)</p>
<p>	textTracks - zwraca tablicę z tekstowymi śladami wideo</p>
<p>	addTextTrack() - dodaje nowy tekstowy ślad do wideo</p>
<p>	canPlayType() - zwraca informację, czy dany typ pliku wideo może zostać odtworzony na danym urządzeniu</p>
<p>	load() - ponownie ładuje wideo</p>
<p>	paused - określa, czy odtwarzanie wideo jest wstrzymane (można też użyć metody paused = true/false do wstrzymania/wznowienia odtwarzania)</p>
<p>	playbackRate - określa szybkość odtwarzania wideo (można też użyć metody playbackRate = value do ustawienia szybkości odtwarzania)</p>
<p>textTracks - zwraca tablicę z tekstowymi śladami wideo</p>
    </>

  )
}

  export default cssContent;