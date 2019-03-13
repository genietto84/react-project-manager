import React from 'react';
import './index.css';

const Header = () => (
    <header className='Header'>
        <a href="/">
            PROJECT MANAGER
        </a>
        <nav>
            <ul>    
                <li>
                    <a href="/">
                        projects
                    </a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;