import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return ( <
        div >
        <
        nav className = { `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` } >
        <
        div className = "container , float-left" >
        <
        a className = "navbar-brand"
        href = "#home" > { props.title } < /a> <
        /div> <
        div className = { `form-check form-switch , float-right text-${props.mode==='light'?'dark':'light'}` }
        style = {
            { display: 'flex', justifyContent: 'right', marginRight: '20px' } } >
        <
        input className = "form-check-input"
        onClick = { props.toggleMode }
        type = "checkbox"
        role = "switch"
        id = "flexSwitchCheckDefault" / >
        <
        label className = "form-check-label"
        htmlFor = "flexSwitchCheckDefault" > Enable Dark Mode < /label> <
        /div> <
        /nav> <
        /div>
    )
}