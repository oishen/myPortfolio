import { useState } from 'react'
const Navbar = () => {
    const [menu, setMenu] = useState('home')


    return (
        <div id='navbar' >
            <nav className="navbar navbar-expand-lg p-1 fixed-top">
                <div className="container-lg">
                    <a style={{fontSize: '20px'}} ><b>Portfolio</b></a>
                    <ul className="navbar-nav gap-3 d-none d-lg-flex" >
                        <li className="nav-item">
                            <a className={`nav-link ${menu === 'home' ? 'active' : ''} `} onClick={()=>setMenu('home')} href='#home' >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${menu === 'about' ? 'active' : ''} `} onClick={()=>setMenu('about')} href='#about' >About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${menu === 'skills' ? 'active' : ''} `} onClick={()=>setMenu('skills')} href='#skills' >Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${menu === 'projects' ? 'active' : ''} `} onClick={()=>setMenu('projects')} href='#projects' >Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${menu === 'contact' ? 'active' : ''} `} onClick={()=>setMenu('contact')} href='#contact' >Contact Me</a>
                        </li>
                        {/* <li className="nav-item d-flex align-items-center">
                            <i className={`fa-regular ${isDarkMode ? 'fa-sun' : 'fa-moon'} mb-1 `} onClick={toggleDarkMode} id='icon' ></i>
                        </li> */}
                    </ul>

                    <ul className="gap-1 d-flex align-items-center mb-auto d-lg-none">
                        
                        {/* <i className={`fa-regular ${isDarkMode ? 'fa-sun' : 'fa-moon'} `} onClick={toggleDarkMode} id='icon' ></i> */}
                        <button type='button' data-bs-toggle='modal' data-bs-target='#navResponsive' className='navbar-toggler' >
                            {/* icon menu */}
                            <i className="fa-solid fa-bars" id='menuBar'></i>
                        </button>
                    </ul>
                </div>
            </nav>

            <div className="modal fade" id="navResponsive">
                <div className="modal-dialog modal-fullscreen">
                    <div className={`modal-content`}>
                        <div className="modal-header">
                            <button className='btn-close bg-white' data-bs-dismiss="modal" ></button>
                        </div>
                        <div className="modal-body">
                            <ul className="navbar-nav gap-3" >
                                <li className="nav-item" data-bs-dismiss="modal" >
                                    <a className={`nav-link ${menu === 'home' ? 'active' : ''} `} onClick={()=>setMenu('home')} href='#home'>Home</a>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal" >
                                    <a className={`nav-link ${menu === 'about' ? 'active' : ''} `} onClick={()=>setMenu('about')} href='#about' >About Me</a>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal" >
                                    <a className={`nav-link ${menu === 'skills' ? 'active' : ''} `} onClick={()=>setMenu('skills')} href='#skills' >Skills</a>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal" >
                                    <a className={`nav-link ${menu === 'projects' ? 'active' : ''} `} onClick={()=>setMenu('projects')} href='#projects' >Projects</a>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal" >
                                    <a className={`nav-link ${menu === 'contact' ? 'active' : ''} `} onClick={()=>setMenu('contact')} href='#contact' >Contact Me</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar