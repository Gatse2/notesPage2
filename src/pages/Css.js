import { useState, useEffect } from 'react'
import cssContent, { CssNames, cssPseudoClass, CssVideo } from './pageContent/CssContent';

const Css = () => {
    const [ activeIndex, setActiveIndex] = useState([])
    const [ activeIndex1, setActiveIndex1 ] = useState([])
    const [ activeIndex2, setActiveIndex2 ] = useState([])
    const [ activeIndex3, setActiveIndex3 ] = useState([])



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
                            {isActive ? <p className='contentMapActiveName'>{element.name}</p> : <p className='contentMapName'>{element.name}</p>}
                        </div>
                        {isActive && <div className='ContentMapdescription' ><p>{element.description}</p> <p className='descriptionCode' >{element.example}</p></div>}
                    </div>
                );
            })
        );
    };



const CssContentMap = MapContent(cssContent, activeIndex1, setActiveIndex1)
const CssPseudoClass = MapContent(cssPseudoClass, activeIndex2, setActiveIndex2)


 
    return(
        <div>
            <h1 className='titleSite'>CSS</h1> 
            <p className='mainDescription'>CSS (ang. Cascading Style Sheets) to język stylów używany do określania wyglądu i układu elementów na stronach internetowych. CSS jest często używany w połączeniu z HTML i JavaScriptem, tworząc w ten sposób kompletną strukturę strony internetowej.                CSS umożliwia programistom określenie, jak elementy HTML powinny być wyświetlane w przeglądarce internetowej. Dzięki CSS można kontrolować wiele właściwości wyświetlania elementów, takie jak kolor tekstu, tło, rozmiar, marginesy, obramowania, cienie, itp. CSS umożliwia także tworzenie animacji, przystosowywanie stron do różnych rozmiarów ekranów, a nawet drukowanie dokumentów.</p> 
            
            <section>
               <div onClick={() => handleOnClick(1, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(1) ? <p className='chapterNameActive'>Właściwości CSS</p> : <p className='chapterName'>Właściwości CSS</p>  }
                </div>
                {activeIndex.includes(1) && <div>
                    {CssContentMap}
                    <div className="endLine"></div>
                </div>}
            </section>
            
            <section>
               <div onClick={() => handleOnClick(2, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(2) ? <p className='chapterNameActive'>Słowniczek CSS</p> : <p className='chapterName'>Słowniczek CSS</p>  }
                </div>
                {activeIndex.includes(2) && <div style={{marginLeft: `70px`}}>
                    < CssNames />
                    <div className="endLine"></div>
                </div>}
            </section>

            <section>
               <div onClick={() => handleOnClick(3, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(3) ? <p className='chapterNameActive'>Pseudoklasy</p> : <p className='chapterName'>Pseudoklasy</p>  }
                </div>
                {activeIndex.includes(3) && <div>
                    {CssPseudoClass}
                    <div className="endLine"></div>
                </div>}
            </section>
            
            <section>
               <div onClick={() => handleOnClick(4, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(4) ? <p className='chapterNameActive'>Video w CSS</p> : <p className='chapterName'>Video w CSS</p>  }
                </div>
                {activeIndex.includes(4) && <div>
                    <pre><CssVideo/></pre>
                    <div className="endLine"></div>
                </div>}
            </section>


            
        </div>
    );
}




export default Css


 