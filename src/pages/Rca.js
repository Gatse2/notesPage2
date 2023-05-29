import { useState } from 'react';
import { rcaExampleCode, rcaExampleCode2, exampleCodeUseEffect, exampleCodeUseEffect2, exampleUseContext, exampleUseContext2, exampleUseContext3, exampleUseContext4, exampleUseContext5, exampleUseContext6, exampleUseReducer, exampleUseReducer2, exampleUseCallback, exampleUseCallback2, exampleUseMemo, exampleUseMemo2, exampleUseRef, exampleUseRef2, exampleCodeAxios } from './pageContent/rcaContent'; 
// import { useContext } from 'react';
// import { AppContext } from '../AppContext';

const Rca = () => {
    // const { consoleApp, consoleName, name  } = useContext(AppContext)
    // const { consoleApp, defaultData} = useContext(AppContext);


    const [activeIndex, setActiveIndex ] = useState([]);
    // const [activeIndex1, setActiveIndex1 ] = useState([]);


    const handleOnClick = (index, tabIndex, setTabIndex) => {
        if(tabIndex.includes(index)){
            setTabIndex(tabIndex.filter((i)=> i !== index))
            // console.log(`jest`)
        }else if(!tabIndex.includes(index)){
            setTabIndex([...tabIndex, index])
            
        }else{
            // console.log(`nie ma nic`)
        } 
        // console.log(index, tabIndex)
    }
    // const MapContent = (content, indexTab, addIndexTab) => {
    //     return(
    //         content.map((element, index)=> {
    //             const isActive = indexTab.includes(index)
    //             return(
    //                 <div className='contentMap' key={index}  style={{transition: `.4s`}}>
    //                     <div  onClick={() => handleOnClick(index, indexTab, addIndexTab)}>
    //                         {isActive ? <p className='contentMapActiveName'>{element.name}</p> : <p className='contentMapName'>{element.name}</p>}
    //                     </div>
    //                     {isActive && <div className='ContentMapdescription' >
    //                         <p>{element.description}</p>
    //                         <p className='descriptionCode' >{element.example}</p>
    //                         { element.example2  && <div>
    //                             <p>{element.description2}</p>
    //                             <p className='descriptionCode' >{element.example2}</p>
    //                         </div>}
    //                         { element.example3  && <div>
    //                             <p>{element.description3}</p>
    //                             <p className='descriptionCode' >{element.example3}</p>
    //                         </div>}
    //                         { element.example4  && <div>
    //                             <p>{element.description4}</p>
    //                             <p className='descriptionCode' >{element.example4}</p>
    //                         </div>}
    //                         { element.example5  && <div>
    //                             <p>{element.description5}</p>
    //                             <p className='descriptionCode' >{element.example5}</p>
    //                         </div>}
    //                         { element.example6  && <div>
    //                             <p>{element.description6}</p>
    //                             <p className='descriptionCode' >{element.example6}</p>
    //                         </div>}
    //                         { element.example7  && <div>
    //                             <p>{element.description7}</p>
    //                             <p className='descriptionCode' >{element.example7}</p>
    //                         </div>}
    //                     </div>}
    //                 </div>
    //             );
    //         })
    //     );
    // };
        // const konsola = () => {
        //     defaultData.consoleName()
        //     // console.log(defaultData.name)

        // }
    
    return(
        
        <div className="rcaPPage">
            <header className='header'>
            <h1 className='titleSite'>ReactCreateApp</h1> 
            <div className='mainDescription'>Create React App to narzędzie stworzone przez Facebook, które pozwala na szybkie utworzenie nowego projektu React z gotową strukturą plików, skonfigurowanymi narzędziami deweloperskimi oraz automatyczną budową projektu. Dzięki temu deweloperzy nie muszą konfigurować nowych projektów od zera, co pozwala zaoszczędzić czas i zwiększyć produktywność. Create React App zapewnia również automatyczną transpilację kodu JavaScript przy użyciu Babel oraz umożliwia użycie preprocesorów CSS, takich jak Sass czy Less.</div>
            <div className="endLine"></div>

            </header>

            <section className='section'>
               
               <div onClick={() => handleOnClick(1, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(1) ? <p className='chapterNameActive'>Hooks</p> : <p className='chapterName'>Hooks</p>  }
                </div>
                <div className={`showHiddenDiv ${activeIndex.includes(1) ? "showDiv" : "hiddenDiv"}`}>
                    <section>                    
                        <div onClick={() => handleOnClick(2, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(2) ? <p className='chapterNameActive'>useState</p> : <p className='chapterName'>useState</p>}
                        </div>
                            <div className={`showHiddenDiv ${activeIndex.includes(2) ? "showDiv" : "hiddenDiv"}`}>
                                <p>useState jest hookiem w React, który umożliwia komponentom funkcyjnym przechowywanie stanu. Pozwala na deklarację zmiennej stanu wewnątrz komponentu i umożliwia jej aktualizację, co prowadzi do ponownego renderowania komponentu.</p>
                                <ul className='listUl'>
                                    <li>Przyjmuje jeden argument, który jest początkową wartością stanu.</li>
                                    <li>Zwraca parę wartość stanu oraz funkcję do aktualizacji stanu.</li>
                                    <li>Funkcja do aktualizacji stanu może być wywoływana, aby zmienić wartość stanu.</li>
                                    <li>Aktualizacja stanu powoduje ponowne renderowanie komponentu.</li>
                                </ul>
                                <h3>Przykład 1 - Zliczanie kliknięć:</h3>
                                <pre className='descriptionCode'>{rcaExampleCode}</pre>
                                <p>W tym przykładzie używamy useState, aby przechowywać wartość stanu "count", która początkowo wynosi 0. Kliknięcie przycisku "Increment" wywołuje funkcję increment, która zwiększa wartość stanu o 1</p>

                                <h3>Przykład 2 - Zarządzanie formularzem:</h3>
                                <pre className='descriptionCode'>{rcaExampleCode2}</pre>
                                <p>W tym przykładzie używamy useState do przechowywania wartości stanu dla pól formularza "name" i "email". Funkcje setName i setEmail są wywoływane w momencie zmiany wartości pól formularza, aby zaktualizować wartość stanu. Po złożeniu formularza funkcja handleSubmit wyświetli zalogowane dane. W obu tych przykładach useState jest używane do przechowywania i aktualizowania stanu w komponentach funkcyjnych w React.</p>
                                <div className="endLine"></div>
                            </div>

                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(3, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(3) ? <p className='chapterNameActive'>useEffect</p> : <p className='chapterName'>useEffect</p>}
                        </div>
                        <div className={`showHiddenDiv ${activeIndex.includes(3) ? "showDiv" : "hiddenDiv"}`}>
                            <p>useEffect to hook w React, który umożliwia wykonywanie efektów ubocznych w komponencie funkcyjnym. Efekty uboczne to akcje, które mogą być wykonywane po renderowaniu komponentu, takie jak pobieranie danych z serwera, subskrypcje, manipulacje DOM, czy czyszczenie zasobów.</p>
                            <h3>Składnia useEffect wygląda następująco:Składnia useEffect wygląda następująco:</h3>
                            <pre className='descriptionCode'>{exampleCodeUseEffect}</pre>
                            <p>Argumentem funkcji useEffect jest funkcja zwrotna, która zawiera kod efektu ubocznego. Ta funkcja zostanie wykonana po każdym renderowaniu komponentu, chyba że określimy zależności (dependencies), które definiują, kiedy efekt ma być uruchamiany ponownie.</p>
                            <p>Zależności (dependencies) są opcjonalnym drugim argumentem w postaci tablicy. Jeśli zależności są puste, efekt zostanie uruchomiony tylko raz po pierwszym renderowaniu. Jeśli określimy zależności, efekt zostanie uruchomiony ponownie tylko wtedy, gdy wartości tych zależności ulegną zmianie.</p>
                            <p>Wewnątrz funkcji zwrotnej useEffect możemy wykonywać różne akcje, takie jak:</p>
                            <ul className='listUl'>
                                <li>Wykonywanie żądań sieciowych do API</li>
                                <li>Pobieranie danych z serwera</li>
                                <li>Aktualizacja stanu komponentu</li>
                                <li>Manipulacje DOM</li>
                                <li>Subskrypcje do zdarzeń</li>
                                <li>Czyszczenie zasobów przed odmontowaniem komponentu</li>
                            </ul>
                            <h3>Przykład użycia useEffect:</h3>
                            <pre className='descriptionCode'>{exampleCodeUseEffect2}</pre>
                            <p>W powyższym przykładzie hook useEffect jest używany w komponencie funkcyjnym MyComponent. Po każdym renderowaniu komponentu, efekt zostanie uruchomiony. Wewnątrz efektu jest wywoływana funkcja console.log oraz aktualizowany jest tytuł dokumentu na podstawie wartości count.5</p>
                            <p>Jeśli wartość count ulegnie zmianie, np. gdy użytkownik kliknie przycisk "Zwiększ licznik", efekt zostanie uruchomiony ponownie, co oznacza, że kod wewnątrz efektu zostanie wykonany jeszcze raz.</p>
                            {/* <p>Dodatkowo, hook useEffect może również zwracać funkcję czyszczącą. W powyższym przykładzie, jest to funkcja anonimowa () => { console.log('Efekt zostaje zdemontowany'); }. Ta funkcja zostanie wywołana, gdy komponent zostanie odmontowany lub gdy wartość count ulegnie zmianie przed ponownym uruchomieniem efektu. Może ona być używana do czyszczenia lub zamykania zasobów, subskrypcji lub innych czynności, które wymagają zakończenia pożytku efektu.</p>   */}
                            <p>W przypadku naszego przykładu, funkcja czyszcząca nie wykonuje żadnych działań. Może jednak być przydatna w innych przypadkach, na przykład do zatrzymywania subskrypcji do strumieni danych lub czyszczenia nasłuchiwania zdarzeń, gdy komponent jest odmontowywany.</p>
                            <p>Podsumowując, hook useEffect w React umożliwia wykonywanie efektów ubocznych w komponencie funkcyjnym. Dzięki niemu możemy wykonywać różne akcje po renderowaniu komponentu, takie jak pobieranie danych z serwera, manipulacje DOM, subskrypcje czy czyszczenie zasobów.</p>
                            <div className="endLine"></div>
                        </div>                        
                    </section>

                    <section>                    
                        <div onClick={() => handleOnClick(4, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(4) ? <p className='chapterNameActive'>useContext</p> : <p className='chapterName'>useContext</p>}
                        </div>
                        <div className={`showHiddenDiv ${activeIndex.includes(4) ? "showDiv" : "hiddenDiv"}`}>
                            <p> Hook useContext to jeden z hooków, które udostępnia React do zarządzania stanem i dzielenia informacji między komponentami. Pozwala on na korzystanie z kontekstu, który jest mechanizmem przekazywania danych w dół drzewa komponentów bez potrzeby przekazywania propsów przez wszystkie pośrednie komponenty.</p>
                            <p> 1. Tworzymy plik AppContext.js jeśli chcemy dane przechowywać w osobnym pliku, jeśli nie to od razu importujem i tworzymy createContext w głównym pliku </p>
                            <pre className='descriptionCode'>{exampleUseContext}</pre>
                            <p> 2.W głównym pliku (komponencie rodzicu) importujemy kontekst i tworzymy Provider: do providera przekazujemy dane zaimportowane z głownego pliku lub dodajemy z pliku gdzie tworzymy provider</p>
                            <pre className='descriptionCode'>{exampleUseContext2}</pre>
                            <p> tworzymy provider nazwaNaszwgoPliku.Provider oraz podajemy warości jakie mają być dodane</p>
                            <p>3. Używanie useContext w komponencie podrzędnym (Button.js):</p>
                            <pre className='descriptionCode'>{exampleUseContext3}</pre>
                            <h2>Inny sposób użycia use Context</h2>
                            <p> 1. tworzymy plik AppContex.js</p>
                            <pre className='descriptionCode'>{exampleUseContext4}</pre>
                            <p>2. do plikgu głównego (rodzica) importujemy nasz plikach</p>
                            <pre className='descriptionCode'>{exampleUseContext5}</pre>
                            <p>3. już można kożystać ze zmiennej globalnie, aby to zrobić należy użyć useContext przykłąd (użycia w innym komponencie (pliku))</p>
                            <pre className='descriptionCode'>{exampleUseContext6}</pre>
                            <div className="endLine"></div>
                        </div>                        
                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(5, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(5) ? <p className='chapterNameActive'>useReducer </p> : <p className='chapterName'>useReducer</p>}
                        </div>
                        <div className={`showHiddenDiv ${activeIndex.includes(5) ? "showDiv" : "hiddenDiv"}`}>
                            <p>useReducer jest jednym z hooków dostępnych w bibliotece React. Pozwala na zarządzanie stanem komponentu za pomocą mechanizmu reducera, który jest funkcją określającą, jak stan komponentu powinien ewoluować w odpowiedzi na akcje.</p>
                            <p>Podstawowa składnia useReducer wygląda następująco:</p>
                            <pre className='descriptionCode'>{exampleUseReducer}</pre>
                            <ul className='listUl'>
                                <li>state to aktualny stan komponentu.</li>
                                <li>dispatch to funkcja, która służy do wywoływania akcji.</li>
                                <li>reducer to funkcja, która określa, jakie zmiany powinny zostać wprowadzone w stanie w zależności od akcji.</li>
                                <li>initialState to początkowy stan komponentu.</li>
                            </ul>
                            <p>Reducer jest funkcją, która przyjmuje aktualny stan i akcję, a następnie zwraca nowy stan w zależności od akcji. Reducer powinien być czystą funkcją, która nie powoduje efektów ubocznych i zawsze zwraca nowy stan, a nie modyfikuje istniejącego stanu.</p>
                            <p>Przykład użycia useReducer może wyglądać tak:</p>
                            <pre className='descriptionCode'>{exampleUseReducer2}</pre>
                            <p>W powyższym przykładzie useReducer jest używany do zarządzania licznikiem (count). Reducer określa, jak zmienia się stan w odpowiedzi na akcje typu 'increment' i 'decrement'. W komponencie Counter dostępne są funkcje increment i decrement, które wywołują odpowiednie akcje za pomocą funkcji dispatch.</p>
                            <p>useReducer jest przydatnym narzędziem, gdy potrzebujesz bardziej zaawansowanego zarządzania stanem w komponencie i chcesz zastosować wzorzec reducera do aktualizacji stanu.</p>



                            <div className="endLine"></div>
                        </div>                        
                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(6, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(6) ? <p className='chapterNameActive'>useCallback</p> : <p className='chapterName'>useCallback</p>}
                        </div>
                        <div className={`showHiddenDiv ${activeIndex.includes(6) ? "showDiv" : "hiddenDiv"}`}>
                            <p>useCallback to hook w bibliotece React, który służy do optymalizacji wydajności komponentów funkcyjnych poprzez pamiętanie i ponowne wykorzystywanie tych samych funkcji.</p>
                            <p>Kiedy używasz funkcji jako propsa w komponencie, każde jej wywołanie powoduje ponowne renderowanie komponentu, nawet jeśli sama funkcja nie zmienia się. Może to prowadzić do niepotrzebnych renderowań i wywołań funkcji w przypadku, gdy wartość propsa nie uległa zmianie.</p>
                            <p>useCallback rozwiązuje ten problem, zapewniając, że funkcja jest zapamiętana i zwracana jako referencja, tylko gdy jej zależności uległy zmianie.</p>
                            <p>Sygnatura useCallback jest następująca:</p>
                            <pre className='descriptionCode'>{exampleUseCallback}</pre>
                            <ul className='listUl'>
                                <li>callback - funkcja, którą chcemy zapamiętać i ponownie wykorzystać.</li>
                                <li>dependencies - drugi argument, który określa zależności, które powodują ponowne wywołanie funkcji. Jest to tablica wartości, które muszą ulec zmianie, aby useCallback utworzył nową funkcję..</li>
                            </ul>
                            <p>useCallback zwraca zapamiętaną funkcję, którą możemy przekazywać do innych komponentów lub używać w hookach, takich jak useEffect.</p>
                            <p>Przykład użycia useCallback:</p>
                            <pre className='descriptionCode'>{exampleUseCallback2}</pre>
                            <p>W tym przykładzie handleClick jest funkcją, która zwiększa wartość licznika o 1 za każdym razem, gdy przycisk zostanie kliknięty. Dzięki użyciu useCallback z pustą tablicą zależności ([]), funkcja handleClick będzie zapamiętana i ponownie wykorzystana w komponencie, nawet jeśli inne wartości się zmieniają.</p>
                            <p>Dzięki użyciu useCallback, unikamy niepotrzebnego tworzenia nowych funkcji przy każdym renderowaniu komponentu, co przyczynia się do poprawy wydajności aplikacji. Należy jednak pamiętać, że useCallback jest stosowane wtedy, gdy faktycznie występuje potrzeba optymalizacji wydajności, a nie jest to zawsze konieczne we wszystkich przypadkach użycia funkcji w komponentach.</p>
                       
                            <div className="endLine"></div>
                        </div>                        
                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(7, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(7) ? <p className='chapterNameActive'>useMemo</p> : <p className='chapterName'>useMemo</p>}
                        </div>
                        <div className={`showHiddenDiv ${activeIndex.includes(7) ? "showDiv" : "hiddenDiv"}`}>
                            <p>useMemo to hook w bibliotece React, który pozwala na optymalizację wydajności renderowania komponentów poprzez pamiętanie obliczonych wartości pomiędzy renderowaniami. Jest szczególnie przydatny w przypadkach, gdy obliczenia są kosztowne lub kiedy chcemy uniknąć zbędnych obliczeń w każdym renderowaniu.</p>
                            <p>Głównym celem użycia useMemo jest zapewnienie, że obliczenia będą wykonywane tylko wtedy, gdy zależności przekazane jako drugi argument do useMemo się zmienią. W przypadku, gdy zależności nie ulegają zmianie, useMemo zwraca wynik z pamięci podręcznej bez konieczności ponownego wyliczania go.</p>
                            <p>Przykład, który lepiej obrazuje działanie useMemo: najpierw plik nadrzędny z ktróego wywołujemy komponent który wymaga obliczeń</p>
                            <pre className='descriptionCode'>{exampleUseMemo2}</pre>
                            <p>W komponencie dziecku używamy useMemo</p>
                            <pre className='descriptionCode'>{exampleUseMemo}</pre>
                            <p>W powyższym przykładzie mamy komponent ExpensiveComponent, który wykonuje kosztowne obliczenia na podstawie wartości przekazanej jako value. Wykorzystując useMemo, możemy zapobiec ponownemu obliczaniu expensiveResult za każdym razem, gdy komponent jest renderowany. useMemo zależy od value, więc jeśli value nie ulega zmianie, to wartość expensiveResult zostanie pobrana z pamięci podręcznej, co przyczynia się do poprawy wydajności.</p>
                            <p>Podsumowując, useMemo jest przydatnym narzędziem do optymalizacji renderowania w React, szczególnie w przypadku kosztownych obliczeń. Pozwala na unikanie zbędnych obliczeń, ponieważ wynik jest przechowywany i pobierany z pamięci podręcznej, jeśli zależności nie ulegają zmianie.</p>
                            <div className="endLine"></div>
                        </div>                        
                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(8, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(8) ? <p className='chapterNameActive'>useRef</p> : <p className='chapterName'>useRef</p>}
                        </div>
                        <div className={`showHiddenDiv ${activeIndex.includes(8) ? "showDiv" : "hiddenDiv"}`}>
                            <p>useRef to hook w bibliotece React, który pozwala na tworzenie referencji do elementów w drzewie DOM lub przechowywanie dowolnych wartości wewnątrz komponentu, które mogą być łatwo aktualizowane bez wywoływania ponownego renderowania.</p>
                            <p>Głównym zastosowaniem useRef jest uzyskanie dostępu do elementów DOM, takich jak pola tekstowe, przyciski, formularze itp., które znajdują się w drzewie komponentów React. Może być również używany do przechowywania dowolnych wartości, które nie powodują ponownego renderowania komponentu.</p>
                            <p>Przykład 1: Uzyskiwanie dostępu do elementu DOM:</p>
                            <pre className='descriptionCode'>{exampleUseRef}</pre>
                            <p>W tym przykładzie, useRef jest używany do utworzenia referencji do pola tekstowego. Następnie, za pomocą useEffect, ustawiamy fokus na tym polu po renderowaniu komponentu. Dzięki użyciu useRef, możemy uzyskać dostęp do elementu DOM (w tym przypadku pola tekstowego) i manipulować nim.</p>
                            <pre className='descriptionCode'>{exampleUseRef2}</pre>
                            <p>W tym przykładzie, useRef jest używany do przechowywania poprzedniej wartości licznika count bez wywoływania ponownego renderowania komponentu. Przy użyciu useEffect, aktualizujemy referencję previousCountRef.current po każdej zmianie count. Następnie wyświetlamy poprzednią wartość licznika w interfejsie użytkownika.</p>
                            <p>Podsumowując, useRef to hook w React, który pozwala na tworzenie referencji do elementów DOM lub przechowywanie wartości wewnątrz komponentu. Jest szczególnie przydatny w przypadkach, gdy potrzebujemy dostępu do elementów DOM lub gdy chcemy przechowywać wartości, które mogą być aktualizowane bez ponownego renderowania komponentu.</p>



                            <div className="endLine"></div>
                        </div>                        
                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(9, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(9) ? <p className='chapterNameActive'>useImperativeHandle</p> : <p className='chapterName'>useImperativeHandle</p>}
                        </div>
                        <div className={`showHiddenDiv ${activeIndex.includes(9) ? "showDiv" : "hiddenDiv"}`}>
                            <div className="endLine"></div>
                        </div>                        
                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(10, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(10) ? <p className='chapterNameActive'>useLayoutEffect</p> : <p className='chapterName'>useLayoutEffect  </p>}
                        </div>
                        <div className={`showHiddenDiv ${activeIndex.includes(10) ? "showDiv" : "hiddenDiv"}`}>
                            <div className="endLine"></div>
                        </div>                        
                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(11, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(11) ? <p className='chapterNameActive'>useDebugValue </p> : <p className='chapterName'>useDebugValue </p>}
                        </div>
                        <div className={`showHiddenDiv ${activeIndex.includes(11) ? "showDiv" : "hiddenDiv"}`}>
                            <div className="endLine"></div>
                        </div>                        
                    </section>
                </div>
            </section>


            <section className='section'>
               
               <div onClick={() => handleOnClick(12, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(12) ? <p className='chapterNameActive'>Asynchroniczne pobieranie danych</p> : <p className='chapterName'>Asynchroniczne pobieranie danych</p>  }
                    {/* <div className='mainDescription'> </div> */}

                </div>
                <div className={`showHiddenDiv ${activeIndex.includes(12) ? "showDiv" : "hiddenDiv"}`}>
                    <section>                    
                        <div onClick={() => handleOnClick(13, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(13) ? <p className='chapterNameActive'>axios</p> : <p className='chapterName'>axios</p>}
                            <div className={`showHiddenDiv ${activeIndex.includes(13) ? "showDiv" : "hiddenDiv"}`}>
                                <p>Axios to biblioteka JavaScript, której głównym celem jest ułatwienie wykonywania żądań sieciowych (np. HTTP) w środowiskach przeglądarki lub Node.js. Działa zarówno w środowisku przeglądarki, jak i na serwerze, dlatego jest często używana w aplikacjach opartych na React, Vue.js, Angular i innych frameworkach.</p>
                                <p> Aby używać biblioteki axios trzeba ją zainstalować </p>
                                <pre className='descriptionCode'>{exampleCodeAxios}</pre>
                                <ul className='listUl'>
                                    <li>axios.get('https://jsonplaceholder.typicode.com/users') - Wysyłane jest zapytanie GET na adres URL 'https://jsonplaceholder.typicode.com/users'. Ten URL wskazuje na fikcyjne API typu JSON Placeholder, które zwraca przykładowe dane użytkowników.</li>
                                    <li>.then(function (response) &#123; ... &#125;) - Jeśli zapytanie jest udane (zwraca status 200), kod w bloku .then jest wykonywany. Funkcja obsługi sukcesu przyjmuje parametr response, który reprezentuje odpowiedź z serwera.</li>
                                    <li>.catch(function (error) &#123; ... &#125;) - Jeśli wystąpił błąd podczas wykonania zapytania, kod w bloku .catch jest wykonywany. Funkcja obsługi błędu przyjmuje parametr error, który zawiera informacje o błędzie.</li>
                                    <li>.finally(function () &#123; ... &#125;) - Blok .finally zawiera kod, który jest zawsze wykonywany, niezależnie od wyniku zapytania. Może to obejmować czynności, które muszą zostać wykonane bez względu na to, czy zapytanie było udane czy nie.</li>
                                    <li></li>
                                </ul>
                            <div className="endLine"></div>
                            </div>
                            
                        </div>
                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(14, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(14) ? <p className='chapterNameActive'>fetch</p> : <p className='chapterName'>fetch</p>}
                            <div className={`showHiddenDiv ${activeIndex.includes(14) ? "showDiv" : "hiddenDiv"}`}>
                                <p>Metoda fetch: Metoda fetch to wbudowana w JavaScript metoda służąca do wykonywania zapytań sieciowych. Jest często używana do pobierania danych z serwera w formacie JSON lub innych formatów. Metoda fetch zwraca obiekt Promise, który można obsłużyć przy użyciu .then() lub async/await.</p>
                                
                                <pre className='descriptionCode'>{exampleCodeAxios}</pre>
                         
                            <div className="endLine"></div>
                            </div>
                            
                        </div>
                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(15, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(15) ? <p className='chapterNameActive'>XMLHttpRequest</p> : <p className='chapterName'>XMLHttpRequest</p>}
                            <div className={`showHiddenDiv ${activeIndex.includes(15) ? "showDiv" : "hiddenDiv"}`}>
                                <p>Choć starsza i mniej popularna niż powyższe metody, XMLHttpRequest to wbudowany obiekt w przeglądarkach, który umożliwia asynchroniczne wykonywanie zapytań HTTP. Jest bardziej rozbudowany niż metoda fetch i wymaga więcej kodu, ale nadal jest używany w niektórych scenariuszach.</p>

                                <pre className='descriptionCode'>{exampleCodeAxios}</pre>
                      
                            <div className="endLine"></div>
                            </div>
                            
                        </div>
                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(16, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(16) ? <p className='chapterNameActive'>AJAX</p> : <p className='chapterName'>AJAX</p>}
                            <div className={`showHiddenDiv ${activeIndex.includes(16) ? "showDiv" : "hiddenDiv"}`}>
                                <p>Biblioteka jQuery AJAX: W przypadku starszych projektów lub obszarów, gdzie jQuery jest wciąż używane, metoda AJAX z biblioteki jQuery jest popularnym sposobem na pobieranie danych asynchronicznie. Zapewnia prosty interfejs i obsługę wielu typów żądań.</p>

                                <pre className='descriptionCode'>{exampleCodeAxios}</pre>
                    
                            <div className="endLine"></div>
                            </div>
                            
                        </div>
                    </section>
                 
                </div>

            </section>
            

        </div>
    );
}



export default Rca