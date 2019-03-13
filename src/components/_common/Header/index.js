import React from 'react';
import './index.css';

const Header = (props) => (
    <header className='Header'>
        <a href="/">
            {props.title.toUpperCase()}
        </a>
        <nav>
            <ul>    
                <li>
                    <a href="/">
                        {props.nav}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;