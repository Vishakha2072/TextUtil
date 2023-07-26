import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        //console.log("on change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value); // to copy the text
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/); //text.trim();
        setText(newText.join(" ")); // setText(newText);
    }
    const [text, setText] = useState('')
    return ( <
        >
        <
        div classNama = "container"
        style = {
            { color: props.mode === 'dark' ? 'white' : 'black' } } >
        <
        h2 > { props.heading } < /h2> <
        div className = "mb-3" >
        <
        textarea className = "form-control"
        value = { text }
        onChange = { handleOnChange }
        id = "myBox"
        rows = "8"
        style = {
            { backgroundColor: props.mode === 'dark' ? 'grey' : 'white' } } > < /textarea> <
        button className = "btn btn-primary mx-2 my-2"
        onClick = { handleUpClick } > Convert to Uppercase < /button> <
        button className = "btn btn-primary mx-2 my-2"
        onClick = { handleLoClick } > Convert to Lowercase < /button> <
        button className = "btn btn-primary mx-2 my-2"
        onClick = { handleClearClick } > Clear Text < /button> <
        button className = "btn btn-primary mx-2 my-2"
        onClick = { handleCopy } > Copy Text < /button> <
        button className = "btn btn-primary mx-2 my-2"
        onClick = { handleExtraSpaces } > Remove Extra Spaces < /button>

        <
        /div> <
        div className = "container my-3" >
        <
        h1 > Your Text summary < /h1>        <
        p > { text.split(" ").length + " " }
        words and { text.length + " " }
        characters < /p> <
        p > { 0.008 * text.split(" ").length + " " }
        Minutes read < /p> <
        h2 > Preview < /h2> <
        p > { text.length > 0 ? text : "Enter something in the text box to preview it here " } < /p> <
        /div> <
        /div> <
        />
    )
}