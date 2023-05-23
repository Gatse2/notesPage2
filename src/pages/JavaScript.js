import '../styles/JavaScript.css';
import { JavascriptGlossary,functions, stringMethodsAndProperties, instructions, exampleJSCode, numberMethods, numberFunctions, arrayMethodsAndProperties, loops, domElements } from './pageContent/JavaScriptContent';
import { useState, useEffect } from 'react';

const JavaScript = () => {

    const [activeIndex, setActiveIndex ] = useState([]);
    const [activeIndex1, setActiveIndex1 ] = useState([]);
    const [activeIndex2, setActiveIndex2 ] = useState([]);
    const [activeIndex3, setActiveIndex3 ] = useState([]);
    const [activeIndex4, setActiveIndex4 ] = useState([]);
    const [activeIndex5, setActiveIndex5 ] = useState([]);
    const [activeIndex6, setActiveIndex6 ] = useState([]);
    const [activeIndex7, setActiveIndex7 ] = useState([]);
    const [activeIndex8, setActiveIndex8 ] = useState([]);


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
    
    const stringMethodsAndPropertiesMAp = MapContent(stringMethodsAndProperties, activeIndex1, setActiveIndex1);
    const numberMethodsMap = MapContent(numberMethods, activeIndex2, setActiveIndex2);
    const numberFunctionsMap = MapContent(numberFunctions, activeIndex3, setActiveIndex3);
    const arrayMethodsAndPropertiesMap = MapContent(arrayMethodsAndProperties, activeIndex4, setActiveIndex4);
    const loopssMap = MapContent(loops, activeIndex5, setActiveIndex5);
    const domElementsMap = MapContent(domElements, activeIndex6, setActiveIndex6);
    const functionsMap = MapContent(functions, activeIndex7, setActiveIndex7);
    const instructionsMap = MapContent(instructions, activeIndex8, setActiveIndex8);


useEffect(()=>{
    console.log(`useEffect ${activeIndex2.length}`)
}, [activeIndex2.length])


    return(
        <div className="javaScriptPage">

            <header className='header'>
                <h1 className='titleSite'>JavaScript</h1> 
                <div className='mainDescription'>JavaScript to popularny język programowania, który jest stosowany do tworzenia interaktywnych aplikacji internetowych oraz aplikacji mobilnych i desktopowych. Składnia języka jest podobna do innych języków programowania, takich jak Java czy C++, jednak JavaScript jest językiem skryptowym, co oznacza, że nie wymaga kompilacji. JavaScript jest wykonywany przez przeglądarki internetowe i służy do tworzenia dynamicznych stron internetowych, w tym interaktywnych formularzy, efektów wizualnych i animacji, gier oraz aplikacji webowych. Ponadto, JavaScript może być stosowany również poza przeglądarkami internetowymi, w takich obszarach jak serwerowe programowanie, tworzenie aplikacji desktopowych oraz internetu rzeczy (IoT).</div>
                <div className="endLine"></div>

            </header>

            <section className='section'>
               <div onClick={() => handleOnClick(1, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(1) ? <p className='chapterNameActive'>Przykładowy kod html+JavaScript</p> : <p className='chapterName'>Przykładowy kod html+JavaScript </p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(1) ? "showDiv" : "hiddenDiv"}`}>
                    <pre className='descriptionCode'>{exampleJSCode}</pre>
                    <div className="endLine"></div>
                </div>

            </section>

            <section>
                <div onClick={() => handleOnClick(2, activeIndex, setActiveIndex)}>
                  {activeIndex.includes(2) ? <p className='chapterNameActive'>Podstawowe definicje</p> : <p className='chapterName'>Podstawowe definicje</p>  }
                </div>
                <div className={`showHiddenDiv ${activeIndex.includes(2) ? "showDiv" : "hiddenDiv"}`}>
                    <div> <JavascriptGlossary/> </div> 
                    <div className="endLine"></div>
                </div>              
            </section>

            <section className='stringJS'>
                <div onClick={() => handleOnClick(3, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(3) ? <p className='chapterNameActive'>String</p> : <p className='chapterName'>String</p>  }
                </div>
                <div className={`showHiddenDiv ${activeIndex.includes(3) ? "showDiv" : "hiddenDiv"}`}>
                    <p>String jest ciąg znaków umieszczonych w cudzysłowie lub grawisie np: const string = "To jest string."</p>
			        <p style={{marginBottom: "50px"}}>	String ma swoje unikalne właściwośći/metody, wypisane poniżej</p>
                    {stringMethodsAndPropertiesMAp}
                    <div className="endLine"></div>
                </div>  
            </section>

            <section className='number'>
                <div onClick={() => handleOnClick(4, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(4) ? <p className='chapterNameActive'>Number</p> : <p className='chapterName'>Number</p>  }
                </div>
                <div className={`showHiddenDiv ${activeIndex.includes(4) ? "showDiv" : "hiddenDiv"}`}>
                    <p>W języku JavaScript number jest jednym z typów danych, który reprezentuje liczby - zarówno całkowite, jak i zmiennoprzecinkowe. Wartości typu number mogą być wykorzystywane do wykonywania matematycznych obliczeń, manipulowania danymi numerycznymi, a także do reprezentowania wartości liczbowych w programie.  </p>
			        <p style={{margin: "50px 50px", fontSize:"1.5rem"}}>	Metody Matematyczne w JavaScript</p>
                    <div>
                        {numberMethodsMap}
                    </div>
			        <p style={{margin: "50px 50px", fontSize:"1.5rem"}}>	Funkcje Matematyczne w JavaScript</p>
                    {numberFunctionsMap}
                    <div className="endLine"></div>
                </div> 
            </section>
            
            <section className='array'>
                <div onClick={() => handleOnClick(5, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(5) ? <p className='chapterNameActive'>Tablice</p> : <p className='chapterName'>Tablice</p>  }
                </div>
                <div className={`showHiddenDiv ${activeIndex.includes(5) ? "showDiv" : "hiddenDiv"}`}>
                     <p>Tablica jest to obiekt. ma swoje właściwości i metody to zbiór uporządkowanych wartości która może być dowolnym typem danych. Kolejność ma znaczenie, każdy element posiada własny indeks </p>
                        <p>{`const array = [1, {name: 'bob'}, '123']`}</p>
			            <p style={{margin: "50px 50px", fontSize:"1.5rem"}}>	Metody dla tablicy w JavaScript</p>
                        {arrayMethodsAndPropertiesMap}
                        <div className="endLine"></div>
                </div> 
            </section>

            <section className='loop'>
                <div onClick={() => handleOnClick(6, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(6) ? <p className='chapterNameActive'>Pętle</p> : <p className='chapterName'>Pętle</p>  }
                </div>
                <div className={`showHiddenDiv ${activeIndex.includes(6) ? "showDiv" : "hiddenDiv"}`}>
                        <p>Pętle są strukturami programistycznymi, które pozwalają na powtarzanie wykonania określonego bloku kodu przez określoną liczbę razy lub dopóki spełniony jest pewien warunek. Są one używane, gdy chcemy wykonać tę samą operację wielokrotnie lub aż do spełnienia określonego warunku.</p>
                        <p>{`const array = [1, {name: 'bob'}, '123']`}</p>
			            <p style={{margin: "50px 50px", fontSize:"1.5rem"}}>Rodzaje pętli</p>
                        {loopssMap}
                        <div className="endLine"></div>
                </div> 
            </section>
            <section className='functions' >
                <div onClick={() => handleOnClick(8, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(8) ? <p className='chapterNameActive'>Funkcje</p> : <p className='chapterName'>Funkcje</p>  }
                </div>
                <div className={`showHiddenDiv ${activeIndex.includes(8) ? "showDiv" : "hiddenDiv"}`}>
                         <p style={{margin: "50px 50px"}}>Funkcje w języku JavaScript są blokami kodu, które można wywoływać wielokrotnie w różnych miejscach programu. Funkcje mogą przyjmować argumenty (dane wejściowe) i zwracać wartości (wyniki działania).</p>
                        {functionsMap}
                        <div className="endLine"></div>

                </div> 
            </section>
            <section className='functions' >
                <div onClick={() => handleOnClick(9, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(9) ? <p className='chapterNameActive'>Instrukcje</p> : <p className='chapterName'>Instrukcje</p>  }
                </div>
                <div className={`showHiddenDiv ${activeIndex.includes(9) ? "showDiv" : "hiddenDiv"}`}>
                         <p style={{margin: "50px 50px"}}>Instrukcje w języku JavaScript są podstawowymi jednostkami składniowymi, które wyrażają operacje do wykonania przez program. Instrukcje składają się z wyrażeń i konstrukcji sterujących, które kontrolują przepływ programu i manipulują danymi.Instrukcje w JavaScript mogą wykonywać różnorodne zadania, takie jak przypisywanie wartości do zmiennych, wywoływanie funkcji, manipulowanie strukturami danych, kontrolowanie przepływu programu za pomocą instrukcji warunkowych i pętli, obsługa błędów oraz wiele innych.</p>
                        {instructionsMap}
                        <div className="endLine"></div>

                </div> 
            </section>
            

            <section className='dom' >
                <div onClick={() => handleOnClick(7, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(7) ? <p className='chapterNameActive'>Elementy DOM a JS</p> : <p className='chapterName'>Elementy DOM a JS</p>  }
                </div>
                <div className={`showHiddenDiv ${activeIndex.includes(7) ? "showDiv" : "hiddenDiv"}`}>
                         <p style={{margin: "50px 50px"}}>Pobieranie, dodawanie i edytowanie elementów DOM (Modelu Obiektowego Dokumentu) są podstawowymi operacjami, które pozwalają na manipulację strukturą i treścią stron internetowych. Poniżej przedstawiam opis każdej z tych operacji:</p>
                        {domElementsMap}
                        <div className="endLine"></div>

                </div> 
            </section>

          
            


        </div>
    );
}




export default JavaScript