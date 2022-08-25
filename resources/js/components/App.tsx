import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import "./App.css";

import Authentication from './authentication/Index';

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <Router>
                    <Routes>
                        <Route path="/authentication/*" element={<Authentication />} />
                        {/* <Route path="/" element={<Main />} />
                        <Route path="/browse/*" element={<Browse />} /> */}
                        {/* <Route path="/about/*" element={<About />} /> */}
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
