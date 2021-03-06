import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import {AuthContext} from '../context/auth-context';

import './NavLinks.css'
import Button from '../FormElements/Button';

const NavLinks = props => {
    const auth = useContext(AuthContext)
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/">All Users</NavLink>
            </li>
            {auth.isLoggedIn && <li>
                <NavLink to="/u1/places">My Places</NavLink>
            </li>}
            {auth.isLoggedIn && <li>
                <NavLink to="/places/new">Add Places</NavLink>
            </li>}
            {!auth.isLoggedIn && <li>
                <NavLink to="/auth">auth</NavLink>
            </li>}
            {auth.isLoggedIn && <Button onClick={auth.logout}>Logout</Button>}
        </ul>
    )
}
export default NavLinks;