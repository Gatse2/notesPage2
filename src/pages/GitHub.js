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

            <section className='section'>
               <div onClick={() => handleOnClick(1, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(1) ? <p className='chapterNameActive'>Jak stworzyć repozytorium</p> : <p className='chapterName'>Jak stworzyć repozytorium</p>  }
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


        </div>
    )
}
export default GitHub