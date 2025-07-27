import React from 'react';
import { NavLink } from 'react-router';
import '../../../src/App.css'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-16 h-16'>
            <h1 className='text-2xl font-bold'>Navbar Dorkar Nai</h1>
            <ul className='navlink flex gap-4 text-xl font-semibold'>
                <NavLink to='/'>Home Nai</NavLink>
                <NavLink to='/about'>About Me Md Yeasin Islam</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </ul>
        </div>
    );
};

export default Navbar;