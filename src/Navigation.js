import { NavLink } from "react-router-dom"


const Navigation = () => {
    return(
        <ul>
            <li><NavLink to="html">HTML</NavLink></li>
            <li><NavLink to="css">CSS</NavLink></li>
            <li><NavLink to="javaScript">JavaScript</NavLink></li>
            <li><NavLink to="jQuery">JQuery</NavLink></li>
            <li><NavLink to="react">React</NavLink></li>
            <li><NavLink to="reactCreatApp">ReactCreatApp</NavLink></li>
            <li><NavLink to="visualstudioCode">Visual Studio Code</NavLink></li>
            <li><NavLink to="GitHub">GitHub</NavLink></li>
            <li><NavLink to="links">Linki</NavLink></li>
            <li><NavLink to="testpage">Test Page</NavLink></li>
            
        </ul>
        
    )
}

export default Navigation