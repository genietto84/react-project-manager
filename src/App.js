import React, { Component } from 'react';
import { Header }  from './components/_common';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title='project manager' nav='projects' />
            </div>
        );
    }
}

export default App;
