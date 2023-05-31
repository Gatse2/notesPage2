import { useState } from 'react'
import { exampleTypeScriptCode1, exampleTypeScriptCode2, exampleTypeScriptCode3, exampleTypeScriptCode4, exampleTypeScriptCode5, exampleTypeScriptCode6, exampleTypeScriptCode7 } from './pageContent/typeScriptContent';


 const TypeScript  = () => {

    const [activeIndex, setActiveIndex ] = useState([]);
    const [activeIndex1, setActiveIndex1 ] = useState([]);


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
    const MapContent = (content, indexTab, addIndexTab) => {
        return(
            content.map((element, index)=> {
                const isActive = indexTab.includes(index)
                return(
                    <div className='contentMap' key={index}  style={{transition: `.4s`}}>
                        <div  onClick={() => handleOnClick(index, indexTab, addIndexTab)}>
                            {isActive ? <p className='contentMapActiveName'>{element.name}</p> : <p className='contentMapName'>{element.name}</p>}
                        </div>
                        {isActive && <div className='ContentMapdescription' >
                            <p>{element.description}</p>
                            <p className='descriptionCode' >{element.example}</p>
                            { element.example2  && <div>
                                <p>{element.description2}</p>
                                <p className='descriptionCode' >{element.example2}</p>
                            </div>}
                            { element.example3  && <div>
                                <p>{element.description3}</p>
                                <p className='descriptionCode' >{element.example3}</p>
                            </div>}
                            { element.example4  && <div>
                                <p>{element.description4}</p>
                                <p className='descriptionCode' >{element.example4}</p>
                            </div>}
                            { element.example5  && <div>
                                <p>{element.description5}</p>
                                <p className='descriptionCode' >{element.example5}</p>
                            </div>}
                            { element.example6  && <div>
                                <p>{element.description6}</p>
                                <p className='descriptionCode' >{element.example6}</p>
                            </div>}
                            { element.example7  && <div>
                                <p>{element.description7}</p>
                                <p className='descriptionCode' >{element.example7}</p>
                            </div>}
                        </div>}
                    </div>
                );
            })
        );
    };   

    // const domElementsMap = MapContent(domElements, activeIndex6, setActiveIndex6);
    return(
        <div className="jQuery">

            <header className='header'>
                <h1 className='titleSite'>TypeScript</h1> 
                <p className='mainDescription'>Głównym celem TypeScriptu jest poprawa jakości kodu JavaScript poprzez wprowadzenie statycznego typowania. Oznacza to, że w TypeScriptcie możemy definiować typy dla zmiennych, funkcji, parametrów i innych elementów kodu. Typy pozwalają na określenie oczekiwanych danych i umożliwiają kompilatorowi TypeScriptu wykrywanie potencjalnych błędów w czasie kompilacji, zanim kod zostanie uruchomiony. Dzięki temu możliwe jest wykrycie wielu błędów programistycznych na etapie rozwoju, co przyczynia się do większej niezawodności i łatwiejszego debugowania aplikacji.</p>
                <div className="endLine"></div>
            </header>


            <section className='section'>
               <div onClick={() => handleOnClick(1, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(1) ? <p className='chapterNameActive'>Instalacja</p> : <p className='chapterName'>Instalacja</p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(1) ? "showDiv" : "hiddenDiv"}`}>
                    <p>Instalacja TypeScript: TypeScript można zainstalować za pomocą menedżera pakietów, takiego jak npm (Node Package Manager). Wykonaj poniższą komendę w wierszu poleceń, aby zainstalować TypeScript globalnie:</p>
                    <pre className="descriptionCode">npm install -g typescript</pre>
                    <p>Lub jeśli tworzymy nowy projekt to:</p>
                    <pre className="descriptionCode">npx create-react-app nazwa-twojego-projektu --template typescrip.</pre>
                    <p>Inicjalizacja projektu: Następnie należy utworzyć plik konfiguracyjny dla projektu TypeScript, o nazwie tsconfig.json. Można to zrobić, wykonując poniższą komendę w głównym katalogu projektu:</p>
                    <pre className="descriptionCode">tsc --init</pre>
                    <p>Ten krok inicjalizuje projekt TypeScript i tworzy plik tsconfig.json, w którym można dostosować ustawienia kompilacji.</p>
                    <p>warto odblokować w tym pliku jsx by móc go używać w kompontach .tsx</p>
                    <p>Pisanie kodu TypeScript: Napisz kod w plikach o rozszerzeniu .ts lub tsx. Możesz importować moduły, definiować typy zmiennych i funkcji, tworzyć klasy, interfejsy i wiele więcej, korzystając z funkcji oferowanych przez TypeScript.</p>
                    <p>Kompilacja do JavaScriptu: Aby skompilować kod TypeScript do JavaScriptu, wykonaj poniższą komendę w wierszu poleceń:</p>
                    <p>To spowoduje skompilowanie wszystkich plików TypeScript w projekcie na podstawie pliku konfiguracyjnego tsconfig.json. Skompilowane pliki JavaScript zostaną umieszczone w katalogu określonym przez ustawienia outDir w tsconfig.json.</p>
                    <div className="endLine"></div>
                </div>
            </section>


            <section className='section'>
               <div onClick={() => handleOnClick(2, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(2) ? <p className='chapterNameActive'>Deklarowanie zmiennych</p> : <p className='chapterName'>Deklarowanie zmiennych </p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(2) ? "showDiv" : "hiddenDiv"}`}>
                 <pre className="descriptionCode">
                    <p>let age: number = 25;    //Deklarowanie zmiennej z określonym typem i wartością początkową </p>
                    <p>let name: string;    //Deklarowanie zmiennej tylko z określonym typem:</p>
                    <p>const PI: number = 3.14; //Deklarowanie stałej (niezmiennej) zmiennej:</p>
                    <p>let message = "Hello";   // Deklarowanie zmiennej z domyślnym typem:</p>
                 </pre>
                 <p>Deklarując zmienne w TypeScript, można także określić typy bardziej zaawansowane, takie jak tablice, obiekty, funkcje, enumy itp., oraz korzystać z typów wbudowanych lub zdefiniowanych przez użytkownika.</p>
                 <pre className="descriptionCode">{exampleTypeScriptCode1}</pre>
           
                 <p>Przykład deklaracji funkcji w TypeScript z określonymi typami parametrów:</p>
                 <pre className="descriptionCode">{exampleTypeScriptCode2}</pre>
                 <p>W powyższym przykładzie funkcja greet przyjmuje dwa parametry: name o typie string i age o typie number. Parametry te są wykorzystywane wewnątrz funkcji do wyświetlenia wiadomości powitalnej w konsoli. void oznacza że funkcja nic nie zwraca, można zamist void nadać paramer</p>
                 <p>Przykład deklaracji funkcji z opcjonalnym parametrem:</p>
                 <pre className="descriptionCode">{exampleTypeScriptCode3}</pre>
                 <p>W powyższym przykładzie drugi parametr age został oznaczony jako opcjonalny poprzez dodanie ? po nazwie parametru. Funkcja sprawdza, czy wartość age została przekazana i odpowiednio wyświetla wiadomość powitalną.</p>
                 <p>Aby użyc TypeScript z useState należy użyć typ obiektu</p>
                 <pre className="descriptionCode">{exampleTypeScriptCode7}</pre>
                 <p>W powyższym przykładzie tworzymy komponent Counter, który wykorzystuje hook useState do przechowywania stanu licznika. Definiujemy typ CounterState, który zawiera właściwość "count" o typie number.</p>

                 <div className="endLine"></div>
                </div>
            </section>
            <section className='section'>
               <div onClick={() => handleOnClick(3, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(3) ? <p className='chapterNameActive'>Deklarowanie typów obiektów i tablic:</p> : <p className='chapterName'>Deklarowanie typów obiektów i tablic:</p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(3) ? "showDiv" : "hiddenDiv"}`}>
                    <p>Interfejsy pozwalają nam zdefiniować strukturę obiektu, tj. określić, jakie właściwości powinien mieć obiekt i jakiego typu powinny być te właściwości.</p>
                    <pre className="descriptionCode">{exampleTypeScriptCode4}</pre>
                    <p>W powyższym przykładzie zdefiniowaliśmy interfejs Person, który ma właściwości name typu string, age typu number oraz opcjonalną właściwość email typu string. Interfejsy mogą zawierać wymagane i opcjonalne właściwości oraz metody.</p>
                    <p>Oprócz interfejsów, można również korzystać z typów obiektów.</p>
                    <pre className="descriptionCode">{exampleTypeScriptCode5}</pre>
                    <p>Aby zadeklarować typ tablicy, możemy użyć nawiasów kwadratowych [] lub generycznych typów tablicowych.</p>
                    <pre className="descriptionCode">{exampleTypeScriptCode6}</pre>
                    <div className="endLine"></div>
                </div>
            </section>
            {/* <section className='section'>
               <div onClick={() => handleOnClick(4, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(4) ? <p className='chapterNameActive'>Definiowanie interfejsów i dziedziczenie:</p> : <p className='chapterName'>Definiowanie interfejsów i dziedziczenie:</p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(4) ? "showDiv" : "hiddenDiv"}`}>
         
                    <div className="endLine"></div>
                </div>
            </section>
            <section className='section'>
               <div onClick={() => handleOnClick(5, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(5) ? <p className='chapterNameActive'>Używanie typów generycznych:</p> : <p className='chapterName'>Używanie typów generycznych:</p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(5) ? "showDiv" : "hiddenDiv"}`}>
         
                    <div className="endLine"></div>
                </div>
            </section>
            <section className='section'>
               <div onClick={() => handleOnClick(6, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(6) ? <p className='chapterNameActive'>Typowanie funkcji zwrotnych (callbacks):</p> : <p className='chapterName'>Typowanie funkcji zwrotnych (callbacks):</p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(6) ? "showDiv" : "hiddenDiv"}`}>
         
                    <div className="endLine"></div>
                </div>
            </section> */}
          

        </div>
    ); 
}



export default TypeScript