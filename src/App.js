import React from 'react'

import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/ui/NavBar';

export default function App() {
    return (
       <>
        <BrowserRouter>
            <NavBar></NavBar>
        </BrowserRouter>
       </>
    );
}