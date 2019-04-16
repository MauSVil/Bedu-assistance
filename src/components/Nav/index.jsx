import React from 'react'
import { Link as L } from '@reach/router'
import NavB from 'react-bootstrap/Nav'
import './index.css'

const Nav = ()=>{
    return(
        <NavB className="nav-main">
            <NavB.Item>
                <L to="/">List</L>
            </NavB.Item>
            <NavB.Item>
                <L to="/create">Create</L>   
            </NavB.Item>
        </NavB>
    )
}

export default Nav