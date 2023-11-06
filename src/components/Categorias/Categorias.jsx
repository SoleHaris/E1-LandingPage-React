import React from "react";
import { CatContainerStyled, CategoriaCardContainerStyled, CategoriasContainerStyled } from "./CategoriasStyles"

export const Categorias = () => {
    return (
        <CategoriasContainerStyled>
            <h2>Categorias</h2>
            <CatContainerStyled>
                <CategoriaCardContainerStyled>
                    <h3>Guantes</h3>
                </CategoriaCardContainerStyled>
                <CategoriaCardContainerStyled>
                    <h3>Gafas</h3>
                </CategoriaCardContainerStyled>    
                <CategoriaCardContainerStyled>
                    <h3>Controles</h3>
                </CategoriaCardContainerStyled>
            </CatContainerStyled>
        </CategoriasContainerStyled>
    )
}

export default Categorias