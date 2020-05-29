import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

import MainHeader from '../../components/Navigation/MainHeader';
import SideDrawer from '../Navigation/SideDrawer'

import './MainNavigation.css';

const MainNavigation = () => {
    return(
        <>
            <SideDrawer>
                <nav className='main-navigation__drawer-nav'>
                    <NavLinks/>
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className='main-navigation__menu-btn'>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className='main-navigation__title'>
                    <Link to='/'>Your places</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks/>
                </nav>
                
            </MainHeader>
        </>
    )
}
export default MainNavigation;