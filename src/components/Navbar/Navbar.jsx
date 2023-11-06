import React from 'react'
import { NavbarContainerStyled, NavbarLinksContainerStyled } from './NavbarStyles'

export const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <div>
                <a href="/#">
                    <img src="VR_logo_fucsia.png" alt="Logo" />
                </a>
            </div>
            <NavbarLinksContainerStyled>
            <ul>
                <a href="/#">Inicio</a>

                <a href="/#">Productos</a>

                <a href="/#">Iniciar Sesión</a>

                <a href="/#">Registrarse</a>
            </ul>
            </NavbarLinksContainerStyled>
        
        </NavbarContainerStyled>
    )
}

export default Navbar
