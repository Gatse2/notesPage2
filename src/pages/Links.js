import LinksContent from "./pageContent/LinksContent"


const Links = () => {

    const links = LinksContent.map((link, index) => {
        return(
            <div key={index}>
                <a href={link.link} target="_blank" style={{color:"white", textDecoration:"none", fontSize:`1.6rem`}}>{link.link} </a>
                <p style={{margin: "10px 50px 40px", fontStyle:"italic", backgroundColor:"#2B2B2B", borderRadius: "10px", padding: "10px", maxWidth: "80%", }}>{link.description}</p>
            </div>
        )
    })


    return(
        <div className="linkBox">
            <h1 className='titleSite'>Linki</h1> 
            <p className='mainDescription'>Ciekawe i przydatne linki do stron.</p>
            
            {links}
        </div>
    )
}

export default Links