import React from "react";
import { ProdCardContainerStyled, ProdContainerStyled, ProductosContainerStyled } from "./ProductosStyles";

export const Productos = () => {
    return (
        <ProductosContainerStyled>
            <h2>Nuestros Productos</h2>
            <p>Te invitamos a conocerlos</p>
            <ProdContainerStyled>
                <ProdCardContainerStyled>
                    <img src="Tesla Guantes.png" alt="" />
                    <h3>Tesla</h3>
                    <h4>$358000</h4>
                    <button>Agregar</button>
                </ProdCardContainerStyled>
                <ProdCardContainerStyled>
                    <img src="Guantes_Gloveone.png" alt="" />
                    <h3>Gloveone</h3>
                    <h4>$290000</h4>
                    <button>Agregar</button>
                </ProdCardContainerStyled>
                <ProdCardContainerStyled>
                    <img src="Guantes_Avatar.png" alt="" />
                    <h3>Avatar</h3>
                    <h4>$315000</h4>
                    <button>Agregar</button>
                </ProdCardContainerStyled>
                <ProdCardContainerStyled>
                    <img src="Gafas_PlayStation1.png" alt="" />
                    <h3>Playstation</h3>
                    <h4>$150000.-</h4>
                    <button>Agregar</button>
                </ProdCardContainerStyled>
                <ProdCardContainerStyled>
                    <img src="Gafas_Destek.png" alt="" />
                    <h3>Destek</h3>
                    <h4>$150000.-</h4>
                    <button>Agregar</button>
                </ProdCardContainerStyled>
                <ProdCardContainerStyled>
                    <img src="Gafas_Fiyapoo.png" alt="" />
                    <h3>Fiyapoo</h3>
                    <h4>$150000.-</h4>
                    <button>Agregar</button>
                </ProdCardContainerStyled>
                <ProdCardContainerStyled>
                    <img src="Control_Oculus.png" alt="" />
                    <h3>Oculus</h3>
                    <h4>$50000</h4>
                    <button>Agregar</button>
                </ProdCardContainerStyled>
                <ProdCardContainerStyled>
                    <img src="Control_PS5.png" alt="" />
                    <h3>Playstation 5</h3>
                    <h4>$98000.-</h4>
                    <button>Agregar</button>
                </ProdCardContainerStyled>
                <ProdCardContainerStyled>
                    <img src="Control_Samsung.png" alt="" />
                    <h3>Samsung</h3>
                    <h4>$85000</h4>
                    <button>Agregar</button>
                </ProdCardContainerStyled>
            </ProdContainerStyled>
        </ProductosContainerStyled>
    )
}

export default Productos
