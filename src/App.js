import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header }  from './components/_common';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header title='project manager' nav='projects' />
                    
                    <div className="content">
                        <div className="wrapper">
                            <Projects />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
