
export const gitCommands = [
    {
      name: "git init nazwaKatalogu",
      description: "Inicjalizuje repozytorium Git w nowym katalogu",
    },
    {
      name: "git status",
      description: "Wyświetla status repozytorium",
    },
    {
      name: "git add [nazwa_pliku]",
      description: "Dodaje plik do obszaru stage",
    },
    {
      name: "git add --all / git add -A / git add .",
      description: "Dodaje wszystkie zmienione pliki do obszaru stage",
    },
    {
      name: "git commit -m 'opis zmiany'",
      description: "Tworzy nowy commit z opisem zmiany",
    },
    {
      name: "git commit -a -m 'wiadomość'",
      description: "Tworzy commit z wszystkimi zmienionymi plikami, pomijając stage",
    },
    {
      name: "git commit --amend",
      description: "Cofa ostatni commit i umożliwia wprowadzenie zmian",
    },
    {
      name: "git clone [adres_repozytorium] [nazwa_katalogu]",
      description: "Klonuje repozytorium Git z podanego adresu do nowego katalogu",
    },
    {
      name: "git pull",
      description: "Pobiera i łączy zmiany z repozytorium zdalnego",
    },
    {
      name: "git branch [nazwa_gałęzi]",
      description: "Tworzy nową gałąź w repozytorium",
    },
    {
      name: "git checkout [nazwa/indeks]",
      description: "Przełącza się na inną gałąź lub przywraca pliki z poprzednich commitów",
    },
    {
      name: "git log",
      description: "Wyświetla historię commitów",
    },
    {
      name: "git diff [nazwa_pliku]",
      description: "Porównuje zmiany w pliku między katalogiem roboczym a ostatnim commitem",
    },
    {
      name: "git reset [nazwa/indeks]",
      description: "Przywraca poprzedni commit jako główny i usuwa zmiany",
    },
    {
      name: "git merge [nazwa/indeks]",
      description: "Łączy commit z wybranym branchem lub commit",
    },
    {
      name: "git mv stary_plik.txt nowy_plik.txt",
      description: "Zmienia nazwę pliku i aktualizuje śledzenie Git",
    },
    {
      name: "git rm nazwa_pliku.txt",
      description: "Usuwa plik z katalogu roboczego i indeksu",
    },
    {
      name: "git rm --cached nazwa_pliku",
      description: "Usuwa plik z indeksu, ale pozostawia w katalogu roboczym",
    },
  ];
  