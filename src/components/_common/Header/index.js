import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = props => (
    <header className='Header'>
        <Link to="/">
            {props.title.toUpperCase()}
        </Link>
        <nav>
            <ul>    
                <li>
                    <Link to="/projects">
                        {props.nav}
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;