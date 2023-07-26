import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React, { useState } from 'react'
// import Alerts from './components/Alerts';
function App() {
    const [mode, setMode] = useState('light'); // Tells whether dark mode is enable or not

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = 'grey';
        } else {
            setMode('light')
            document.body.style.backgroundColor = 'white';
        }

    }
    return ( <
        >
        <
        Navbar title = "TextUtils"
        mode = { mode }
        toggleMode = { toggleMode }
        /> { /* <Alerts alert="This is alert"/> */ } <
        div className = "container my-3" >
        <
        TextForm heading = "Enter the text to analyse below"
        mode = { mode }
        />

        <
        /div> <
        />
    );
}

export default App;