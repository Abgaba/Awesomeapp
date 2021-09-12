import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>

            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink exact to="/" className="navbar-brand" > GABA </NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact className="nav-link" to="/" activeClassName="menu_active">Home</NavLink>
                                        </li>
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link" to="/service" activeClassName="menu_active">Service</NavLink>
                                        </li>
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/about" activeClassName="menu_active">About </NavLink>
                                        </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/contact" activeClassName="menu_active">Contact</NavLink>
                                        </li>
                                    </ul>
                </div>
            </div>
        </nav>

                    </div >
                </div >

            </div >

{/* <NavLink exact to="/" activeClassName="menu_class" > Home </NavLink>
    <NavLink exact to="/about" activeClassName="menu_class" > About </NavLink>
    <NavLink exact to="/service" activeClassName="menu_class" > Service </NavLink>
    <NavLink exact to="/contact" activeClassName="menu_class" > Contact </NavLink> */}
        </>
    );
}

export default Navbar;
