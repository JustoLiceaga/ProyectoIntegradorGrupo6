import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import Formulario from "../Formulario/Formulario";

function Navbar() {

    const data = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Películas',
            url: '/movies'
        },
        {
            title: 'Series',
            url: '/series'
        },
        {
            title: 'Favoritas',
            url: '/favorites'
        },
    ]

    return(
        <nav>
            <ul className="nav nav-tabs my-4">
                {data.map((ite, idx) => <li className="nav-item" key = {ite + idx}><Link to = {`${ite.url}`}>{ite.title}</Link></li>)}
            </ul>
            {Formulario}
        </nav>
    )
}


export default Navbar;