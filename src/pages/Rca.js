import { useState } from 'react';
import { rcaExampleCode, rcaExampleCode2, exampleCodeUseEffect, exampleCodeUseEffect2 } from './pageContent/rcaContent'; 

const Rca = () => {

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
                            <div className="endLine"></div>
                        </div>                        
                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(5, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(5) ? <p className='chapterNameActive'>useReducer </p> : <p className='chapterName'>useReducer</p>}
                        </div>
                        <div className={`showHiddenDiv ${activeIndex.includes(5) ? "showDiv" : "hiddenDiv"}`}>
                            <div className="endLine"></div>
                        </div>                        
                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(6, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(6) ? <p className='chapterNameActive'>useCallback</p> : <p className='chapterName'>useCallback</p>}
                        </div>
                        <div className={`showHiddenDiv ${activeIndex.includes(6) ? "showDiv" : "hiddenDiv"}`}>
                            <div className="endLine"></div>
                        </div>                        
                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(7, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(7) ? <p className='chapterNameActive'>useMemo</p> : <p className='chapterName'>useMemo</p>}
                        </div>
                        <div className={`showHiddenDiv ${activeIndex.includes(7) ? "showDiv" : "hiddenDiv"}`}>
                            <div className="endLine"></div>
                        </div>                        
                    </section>
                    <section>                    
                        <div onClick={() => handleOnClick(8, activeIndex, setActiveIndex)}>
                            {activeIndex.includes(8) ? <p className='chapterNameActive'>useRef</p> : <p className='chapterName'>useRef</p>}
                        </div>
                        <div className={`showHiddenDiv ${activeIndex.includes(8) ? "showDiv" : "hiddenDiv"}`}>
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

        </div>
    );
}



export default Rca