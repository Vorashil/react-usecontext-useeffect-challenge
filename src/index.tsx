import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {UserProvider} from "./context/UserContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <UserProvider>
            <App RouterComponent={BrowserRouter}/>
        </UserProvider>
    </React.StrictMode>
);