import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Nav = props =>{
    return (
        <nav>
            <a href="/">
                Home
            </a>
            <a href="https://github.com/xtina-lt" target="_blank" rel="noreferrer">
                GitHub
            </a>
        </nav>
    )
}

export default Nav