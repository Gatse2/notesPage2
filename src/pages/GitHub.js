import { useState } from 'react'
import { gitCommands } from './pageContent/GitHubContent'


const GitHub = () => {
    const [activeIndex, setActiveIndex ] = useState([]);


    const handleOnClick = (index, tabIndex, setTabIndex) => {
        if(tabIndex.includes(index)){
            setTabIndex(tabIndex.filter((i)=> i !== index))
            // console.log(`jest`)
        }else if(!tabIndex.includes(index)){
            setTabIndex([...tabIndex, index])
            
        }else{
            console.log(`nie ma nic`)
        } 
        // console.log(index, tabIndex)
    }

const mapContent = (table ) => {
    return(
        table.map((code, index) => {
            return(
                <div key={index}>
                    <p>{code.name}<sapn> // {code.description}</sapn></p>
                </div>
            )
        })
    )
}

const gitCommandsMap = mapContent(gitCommands)
   
    return(
        <div>
            <h1 className='titleSite'>GitHub</h1> 
            <p>Git to system kontroli wersji, który jest podstawą GitHuba. Git jest oprogramowaniem, które można pobrać i zainstalować na komputerze, niezależnie od korzystania z GitHuba. Git umożliwia śledzenie i zarządzanie zmianami w kodzie źródłowym projektów.</p>
            <p>GitHub jest platformą internetową, która umożliwia programistom współpracę, przechowywanie i udostępnianie kodu źródłowego ich projektów. Jest to popularne narzędzie wykorzystywane przez programistów na całym świecie do zarządzania repozytoriami kodu.</p>
            <p>Kiedy korzystasz z GitHuba, Git jest używany w tle do obsługi operacji na repozytorium. Możesz pracować z repozytoriami GitHuba za pomocą poleceń Git w wierszu poleceń lub za pomocą różnych interfejsów użytkownika, takich jak GitHub Desktop.</p>
            <p>Aby rozpocząć pracę z Gitem, musisz pobrać i zainstalować Go git na swoim komputerze.(https://git-scm.com/downloads)</p>
            <p>Po zainstalowaniu Gita będziesz mógł tworzyć lokalne repozytoria, śledzić zmiany, dodawać, usuwać i modyfikować pliki, tworzyć gałęzie i prowadzić inne operacje związane z kontrolą wersji. Później możesz łączyć swoje lokalne repozytoria z repozytoriami na GitHubie, aby zarządzać nimi zarówno lokalnie, jak i zdalnie.</p>
            <p>Strona na któej można przetestować zasade działania Git  https://onlywei.github.io/explain-git-with-d3/#branch</p>
            <div className="endLine"></div>


            <section className='section'>
               <div onClick={() => handleOnClick(1, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(1) ? <p className='chapterNameActive'>Jak stworzyć repozytorium lokalne</p> : <p className='chapterName'>Jak stworzyć repozytorium lokalne</p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(1) ? "showDiv" : "hiddenDiv"}`}>
                    {/* <pre className='descriptionCode'>{exampleJSCode}</pre> */}
                    <ul className='listUl'>
                        <li>
                            Stwórz katalog projektu: Otwórz wiersz poleceń (terminal) i przejdź do miejsca, w którym chcesz utworzyć katalog projektu. Następnie użyj komendy:
                           <pre className='descriptionCode'><p>mkdir nazwa_katalogucd</p><p>nazwa_katalogu</p> </pre>
                        </li>
                        <li>
                            Inicjalizuj repozytorium Git (opcjonalne na tym etapie): Jeśli chcesz rozpocząć śledzenie zmian za pomocą Git od samego początku, możesz zainicjować repozytorium Git wewnątrz katalogu projektu za pomocą komendy:
                            <pre className='descriptionCode'>git init</pre>
                        </li>
                        <li>
                        Twórz pliki: Możesz tworzyć pliki wewnątrz katalogu projektu, na przykład za pomocą edytora tekstowego lub narzędzi deweloperskich.
                        </li>
                        <li>
                            Dodaj plik do śledzonych zmian (stage): Aby dodać plik do obszaru stage (staging area), czyli przygotować go do zatwierdzenia (commit), użyj komendy:
                           <pre className='descriptionCode'>git add -A  lub  nazwa_pliku</pre>
                        </li>
                        <li>
                            Sprawdź status plików: Aby zobaczyć, które pliki są w obszarze stage i jakie zmiany zostały wprowadzone, wykonaj polecenie:
                           <pre className='descriptionCode'>git status</pre>
                        </li>
                        <li>
                            Zatwierdź zmiany (commit): Kiedy plik jest już w obszarze stage, możesz go zatwierdzić (commit) w repozytorium Git za pomocą komendy:, 
                            <pre className='descriptionCode'>git commit -m "opis zmiany"</pre>
                            Opis zmiany powinien krótko opisywać wprowadzone zmiany.
                        </li>
                        <li>
                            Wyświetl historię commitów: Możesz zobaczyć historię zatwierdzonych zmian (commitów) za pomocą komendy:,

                           <pre className='descriptionCode'>git log</pre>
                           Komenda wyświetli listę commitów wraz z informacjami, takimi jak identyfikator commita, autor, data i opis zmiany.
                        </li>
                        <li>
                            Wyświetl historię commitów w jednej linii: Jeśli preferujesz bardziej zwięzły widok historii commitów, możesz użyć komendy:
                             <pre className='descriptionCode'>git log --oneline</pre>
                             Ta komenda wyświetli listę commitów w formie skróconej, na jednej linii.
                        </li>
                        <li>
                            Cofnij zmiany (restore): Jeśli chcesz cofnąć ostatnie zmiany w pliku, możesz użyć komendy:
                            <pre className='descriptionCode'>git restore nazwa_pliku</pre>
                            <p>To przywróci plik do stanu sprzed ostatnich zmian.</p>
                        </li>
                        <li>
                            Dodaj plik do stage przed każdym commitem: Przed wykonaniem każdego commita, musisz dodać zmienione pliki do obszaru stage. Możesz to zrobić używając komendy git add dla odpowiednich plików.
                        </li>
                        <li>
                             Sprawdź status przed commitowaniem: Zawsze warto sprawdzić status repozytorium przed wykonaniem commita, używ
                        </li>
                    </ul>
                    <div className="endLine"></div>
                </div>
            </section>
            
            <section className='section'>
               <div onClick={() => handleOnClick(2, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(2) ? <p className='chapterNameActive'>Lista komend Git</p> : <p className='chapterName'>Lista komend Git</p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(2) ? "showDiv" : "hiddenDiv"}`}>
                   {gitCommandsMap}
                    <div className="endLine"></div>
                </div>
            </section>
            <section className='section'>
               <div onClick={() => handleOnClick(3, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(3) ? <p className='chapterNameActive'>Dodawanie i pobieranie repozytorium z GitHub:</p> : <p className='chapterName'>Dodawanie i pobieranie repozytorium z GitHub:</p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(3) ? "showDiv" : "hiddenDiv"}`}>
                    {/* <pre className='descriptionCode'>{exampleJSCode}</pre> */}
                    <ul className='listUl'>
                        <li>
                           Przejdź na stronę GitHub, zaloguj się na swoje konto i utwórz nowe repozytorium (można to zrobić klikając na "+" w prawym górnym rogu).
                        </li>
                        <li>
                            Podczas tworzenia repozytorium, nie zaznaczaj opcji "Initialize this repository with a README". Po utworzeniu repozytorium otrzymasz instrukcje dotyczące dodania istniejącego repozytorium na swoim dysku.
                        </li>
                        <li>
                              W konsoli na swoim komputerze, przejdź do lokalnego katalogu z projektem i wykonaj poniższe komendy w kolejności:
                           <pre className='descriptionCode'>
                            <p>git init  // inicjalizuje lokalne repozytorium Git w katalogu</p>
                            <p>git remote add origin [adres_repozytorium]  // ustawia zdalne repozytorium jako miejsce synchronizacji</p>
                            <p>git branch -M main  // tworzy główną gałąź repozytorium</p>
                            <p>git add .  // dodaje wszystkie zmienione pliki do obszaru stage</p>
                            <p>git commit -m "Pierwszy commit"  // tworzy pierwszy commit</p>
                            <p>git push -u origin main  // przesyła repozytorium na serwer GitHub</p>
                           </pre>
                        </li>
                        <li>
                            Możesz sprawdzić, czy repozytorium zostało prawidłowo dodane, wykonując następujące komendy:
                            <pre className='descriptionCode'>
                                <p>git remote -v  // wyświetla adresy URL zdalnego repozytorium (fetch/push)</p>
                                <p>git config --list  // wyświetla informacje o konfiguracji Git, w tym dane dotyczące połączenia z GitHub</p>
                            </pre>

                        </li>
                        <li>
                            Możesz również utworzyć plik "README.md", który będzie głównym opisem repozytorium na GitHub. Poniżej znajduje się przykład używania znaczników języka Markdown w pliku "README.md":
                            <pre className='descriptionCode'>
                                <p># Powiększony tekst</p>
                                <p>## Podtytuł</p>
                                <p>Tutaj znajduje się [hiperłącze](https://google.pl).</p>

                            </pre>
                        </li>
                    </ul>
                    <h3>Pobieranie repozytorium z GitHub:</h3>
                    <ul className='listUl'>
                        <li>
                          Aby pobrać repozytorium z GitHub na swój komputer, wykonaj poniższą komendę w konsoli:
                        <pre className='descriptionCode'>git clone [adres_repozytorium]</pre>
                        </li>
                        <li>
                            Na przykład, jeśli adres repozytorium to "https://github.com/user/repo.git", wykonaj:
                           <pre className='descriptionCode'>git clone https://github.com/user/repo.git</pre>
                        </li>
                        <li>
                            Jeśli chcesz zaktualizować swoje lokalne repozytorium, aby zawierało najnowsze zmiany z repozytorium zdalnego, użyj komendy:
                            <pre className='descriptionCode'>git pull</pre>
                            <p>Komenda git pull pobierze najnowsze zmiany z repozytorium zdalnego i zasynchronizuje je z Twoim lokalnym repozytorium. Jeśli masz już sklonowane repozytorium, wykonując git pull wewnątrz katalogu repozytorium, pobierzesz najnowszą wersję plików i historii zmian z repozytorium zdalnego.</p>
                        </li>
                        <li>
                            Jeśli chcesz pobrać tylko określoną gałąź repozytorium, możesz użyć następującej składni:
                            <pre className='descriptionCode'>git pull origin [nazwa_gałęzi]</pre>
                        </li>
                        <li>
                              Na przykład, jeśli chcesz pobrać gałąź o nazwie "develop", wykonaj:</li>
                        <pre className='descriptionCode'>git pull origin develop</pre>
                        <li>
                             Pamiętaj, że przed wykonaniem git pull upewnij się, że nie masz żadnych niezapisanych zmian w swoim lokalnym repozytorium, ponieważ komenda ta może nadpisać Twoje lokalne zmiany. Jeśli masz niezapisane zmiany, najlepiej je zatwierdzić (git commit) lub zapisać na osobnym branchu przed wykonaniem git pull.
                        </li>
                    </ul>
                    <div className="endLine"></div>
                </div>
            </section>


        </div>
    )
}
export default GitHub