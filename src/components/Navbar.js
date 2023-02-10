import React,{ useRef } from 'react'
import { Link } from 'react-router-dom';

const NavBar = (props)=> {
    const refCloseHamB = useRef(null);
    const closeHamB=(e)=>{
        refCloseHamB.current.click();
    }
        return (
            <div>
                <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand"to="/Any">
                            Jokes
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span ref={refCloseHamB} className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page"to="/Any" onClick={closeHamB}>
                                        <strong>  Home </strong>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"to="/about" onClick={closeHamB}>
                                        <strong>  About </strong>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className="btn" style={{ border: "none" }} data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>  Categories <i className="fa-solid fa-caret-down"></i></span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-light">
                                        <li><Link className="dropdown-item" to='/Any'onClick={closeHamB} style={{ cursor: 'pointer' }} ><span> Any</span></Link></li>
                                        <li><Link className="dropdown-item" to='/Programming' onClick={closeHamB} style={{ cursor: 'pointer' }} ><span> Programming</span></Link></li>
                                        <li><Link className="dropdown-item" to='/Miscellaneous' onClick={closeHamB} style={{ cursor: 'pointer' }} ><span>Miscellaneous</span></Link></li>
                                        <li><Link className="dropdown-item" to='/Dark'onClick={closeHamB} style={{ cursor: 'pointer' }} ><span>Dark</span></Link></li>
                                        <li><Link className="dropdown-item" to='/Pun' onClick={closeHamB} style={{ cursor: 'pointer' }} ><span>Pun</span></Link></li>
                                        <li><Link className="dropdown-item" to='/Spooky' onClick={closeHamB} style={{ cursor: 'pointer' }} ><span>Spooky</span></Link></li>
                                        <li><Link className="dropdown-item" to='/Christmas' onClick={closeHamB} style={{ cursor: 'pointer' }} ><span>Christmas</span></Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-primary" type="submit">
                                    Search
                                </button>
                            </form>
                            <div onClick={closeHamB} className={`form-check form-switch d-flex my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                            <input className="form-check-input ms-lg-0 me-3 " onClick={props.toggle} style={{ height: '1.5em', width: '3em', cursor:'pointer' }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label " htmlFor="flexSwitchCheckDefault"style={{ cursor: 'pointer' }}>Enable {props.mode === 'light' ? 'dark' : 'light'} mode</label>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
}

export default NavBar;