import React, { Component } from 'react';
import { Header }  from './components/_common';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title='project manager' nav='projects' />
                
                <div className="content">
                    <div className="wrapper">
                        <Projects />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
