import { useState } from 'react'
import { htmlShortcuts, htmlContent } from './pageContent/HtmlContent';

const Html = () => {
    const code = `
    <!DOCTYPE html>
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <title>Przykład użycia znaczników HTML</title>

        <script src="sciezka/do/pliku.js"></script> // Skrypt wklejamy w html lub na końcu body
        <link rel="stylesheet" href="styl.css"> // podklejanie css do html za pomocą linka
        <style> // możemy wkleić style do css w head lu na końcu 
        body {
            margin: 0,
        }
        </style>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </nav>
    
        <main>
            <section>
                <h1>Tytuł sekcji</h1>
                <p>Zawartość sekcji</p>
            </section>
    
            <article>
                <header>
                    <h2>Tytuł artykułu</h2>
                    <time datetime="2023-05-12">12 maja 2023</time>
                </header>
                <p>Treść artykułu.</p>
                <footer>
                    <address>Kraków, Polska</address>
                </footer>
            </article>
    
            <aside>
                <h3>Tytuł bocznego panelu</h3>
                <p>Zawartość bocznego panelu</p>
            </aside>
        </main>
    
        <footer>
            <p>Stopka strony</p>
            <address>Kraków, Polska</address>
        </footer>

    </body>
    </html>
    `       
    const [ activeIndex, setActiveIndex ] = useState([]);
    const [ activeIndex1, setActiveIndex1 ] = useState([]);
    const [ activeIndex2, setActiveIndex2 ] = useState([]);


    const handleOnClick = (index, tabIndex, setTabIndex) => {
        if(tabIndex.includes(index)){
            setTabIndex(tabIndex.filter((i)=> i !== index))
            console.log(`jest`)
        }else if(!tabIndex.includes(index)){
            setTabIndex([...tabIndex, index])
            
        }else{
            console.log(`nie ma nic`)
        } 
        console.log(index, tabIndex)
    }
    const MapContent = (content, indexTab, addIndexTab) => {
        return(
            content.map((element, index)=> {
                const isActive = indexTab.includes(index)
                return(
                    <div className='contentMap' key={index}  style={{transition: `.4s`}}>
                        <div  onClick={() => handleOnClick(index, indexTab, addIndexTab)}>
                            {isActive ? <p className='contentMapActiveName'>{element.line}</p> : <p className='contentMapName'>{element.line}</p>}
                        </div>
                        {isActive && <div className='ContentMapdescription' >
                            <p>{element.description}</p>
                             { element.example  && <p className='descriptionCode' >{element.example2}</p>}
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
    
 
    const HtmlContentMap = MapContent(htmlContent, activeIndex1, setActiveIndex1);
    const HTMLShotcutMap = MapContent(htmlShortcuts, activeIndex2, setActiveIndex2);

    return(
        <div>
            <h1 className='titleSite'>HTML</h1> 
            <p className='mainDescription'>HTML (Hypertext Markup Language) to standardowy język znaczników stosowany do tworzenia stron internetowych. Pozwala on na definiowanie struktury, zawartości i semantyki dokumentu internetowego poprzez stosowanie znaczników i atrybutów. HTML umożliwia tworzenie linków, obrazów, formularzy i innych elementów interaktywnych, a także określanie formatowania tekstu, stylów i układu strony. Przeglądarki internetowe interpretują kod HTML i wyświetlają strony internetowe zgodnie z jego specyfikacją.</p>
            
               <section className='section'>
               <div onClick={() => handleOnClick(1, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(1) ? <p className='chapterNameActive'>HTML</p> : <p className='chapterName'>HTML </p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(1) ? "showDiv" : "hiddenDiv"}`}>
                    <p>Poniżej kod HTML składa się z elementów, które są określane za pomocą znaczników otwierających {`<tag> i zamykających </tag>`}, a także atrybutów, które dodają dodatkowe informacje do elementów.</p>
                     <pre className='descriptionCode'>{HtmlContentMap}</pre> 
                </div>
            </section>
            <section className='section'>
               <div onClick={() => handleOnClick(2, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(2) ? <p className='chapterNameActive'>Przykładowy prosty kod HTML</p> : <p className='chapterName'>Przykładowy prosty kod HTML </p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(2) ? "showDiv" : "hiddenDiv"}`}>
                   <p>Przykładowy prosty kod HTML z użyciem powyższych znaczników:</p>
                    <pre className='descriptionCode'>{code}</pre>
                </div>
            </section>
            <section className='section'>
               <div onClick={() => handleOnClick(3, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(3) ? <p className='chapterNameActive'>króty do Visual Studio Code</p> : <p className='chapterName'>króty do Visual Studio Code</p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(3) ? "showDiv" : "hiddenDiv"}`}>
                    <p>Skróty do Visual Studio Code ułatwiające pisanie html</p>
                    <div className="descriptionCode">
                        {HTMLShotcutMap}
                    </div>
                </div>
            </section>



     
        </div>
    );
}

export default Html;

