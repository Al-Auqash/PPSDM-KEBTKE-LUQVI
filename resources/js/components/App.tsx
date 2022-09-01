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
import Main from './main/Index';

function App() {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="row justify-content-center">
                <Router>
                    <Routes>
                        <Route path="/authentication/*" element={<Authentication />} />
                        <Route path="/*" element={<Main />} />
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
