import { useState } from 'react';
import { htmlReactCode, ReactCode } from './pageContent/ReactContent';

const ReactPage = () => {
    const [activeIndex, setActiveIndex ] = useState([]);

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
    
    return(
        <div>
            <h1 className='titleSite'>React</h1> 
            <p className='mainDescription'>React to biblioteka JavaScript, która umożliwia tworzenie interaktywnych interfejsów użytkownika w aplikacjach webowych. React opiera się na komponentach, które są modularnymi, niezależnymi elementami interfejsu, a także na wirtualnym modelu DOM, co pozwala na efektywną aktualizację interfejsu w czasie rzeczywistym. React jest powszechnie stosowany w tworzeniu aplikacji webowych, szczególnie w środowiskach opartych na architekturze SPA (Single Page Application).</p>
            <section className='section'>
               <div onClick={() => handleOnClick(1, activeIndex, setActiveIndex)}>
                    {activeIndex.includes(1) ? <p className='chapterNameActive'>Przykładowy kod</p> : <p className='chapterName'>Przkładowy Kod</p>  }
                </div>
                 <div className={`showHiddenDiv ${activeIndex.includes(1) ? "showDiv" : "hiddenDiv"}`}>
                    <p>Trzeba posiadać pobranego i zainstalowanego Node.js</p>
                    <p>W head trzeba pobrać i wkleić biblioteki z react oraz biblioteke babel która pomaga przy jsx  </p>
                    <pre className='descriptionCode'>
                        {htmlReactCode}
                    </pre>
                    <p>Przykładowy kod React </p>
                    <pre className='descriptionCode'>
                        {ReactCode}
                    </pre>
                </div>


            </section>


        </div>
    );
}



export default ReactPage