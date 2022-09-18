import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink, Navigate,
} from "react-router-dom";

import Authentication from './authentication/Index';
import LoggedIn from './authentication/LoggedIn';
import Main from './main/Index';

function App() {
    return (
        <div className="container-fluid p-0 m-0">
            <Router>
                <Routes>
                    <Route path="/*" element={LoggedIn() ? <Main/> : <Navigate to="/authentication/sign-in"/>}/>
                    <Route path="/authentication/*" element={<Authentication/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
