import BackToTop from "../BackToTop/BackToTop"

const Footer = () => {
    return (
        <div id="footer">
            <nav className="navbar navbar-expand-lg p-1 mt-5" style={{backgroundColor: '#d9d9d9'}} >
                <div className="container-fluid">
                    <a style={{fontSize: '20px'}} ><b>Portfolio</b></a>
                    <ul className="navbar-nav gap-3 d-none d-lg-flex" >
                        <li className="nav-item">
                            <a className='nav-link' href='#home' >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href='#about' >About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href='#skills' >Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href='#projects' >Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href='#contact' >Contact Me</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <BackToTop/>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Footer