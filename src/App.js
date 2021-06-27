import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Navbar/>
                    <Main/>
                </div>
            </Router>
        </Provider>
    )
}
export default App;