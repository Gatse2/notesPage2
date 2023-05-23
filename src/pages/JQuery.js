import { jQueryExampleCode, Table } from "./pageContent/jQueryContent";
import { useState } from 'react'


const JQuery = () => {
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
                <h1 className='titleSite'>jQuery</h1> 
                <div className='mainDescription'>jQuery to popularna biblioteka JavaScript, która została stworzona w celu ułatwienia manipulacji i interakcji z dokumentem HTML, obsługi zdarzeń, animacji, tworzenia efektów wizualnych oraz wykonywania asynchronicznych żądań do serwera.</div>
                <div className="endLine"></div>
            </header>
            <section className='section'>
               <div onClick={() => handleOnClick(1, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(1) ? <p className='chapterNameActive'>Instalacja</p> : <p className='chapterName'>Instalacja</p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(1) ? "showDiv" : "hiddenDiv"}`}>
                   <p>Jeśli pracujesz z narzędziem do zarządzania pakietami, takim jak npm (Node Package Manager) lub Yarn, możesz zainstalować jQuery jako zależność projektu. Oto przykład użycia npm:</p>
                   <p>npm install jquery</p>
                   <pre className="descriptionCode">{
                   `    import $ from 'jquery';
                    // Przykład użycia jQuery
                        $(document).ready(function() {
                    // Twój kod jQuery tutaj
                    });`}</pre>
                    <div className="endLine"></div>
                </div>
            </section>


            <section className='section'>
               <div onClick={() => handleOnClick(3, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(3) ? <p className='chapterNameActive'>Przykładowy kod html+JavaScript</p> : <p className='chapterName'>Przykładowy kod html+JavaScript </p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(3) ? "showDiv" : "hiddenDiv"}`}>
                    <pre className='descriptionCode'>{jQueryExampleCode}</pre>
                    <div className="endLine"></div>
                </div>
            </section>
            <section className='section'>
               <div onClick={() => handleOnClick(2, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(2) ? <p className='chapterNameActive'>Porównanie metod i właściwości jQuery i JS</p> : <p className='chapterName'>Porównanie metod i właściwości jQuery i JS</p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(2) ? "showDiv" : "hiddenDiv"}`}>
                      <table className="table">
                          {Table()}
                      </table>
                    <div className="endLine"></div>
                </div>
            </section>
            

        </div>
    ); 
}




export default JQuery