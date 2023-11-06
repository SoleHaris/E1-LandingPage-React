import styled from "styled-components";

export const ProductosContainerStyled = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 50px;
    flex-wrap: wrap;
    padding: 30px;
    font-size: 20px;

    h2 {
        color: white;
        margin-bottom: 25px;
    }

    p {
        color: white;
        margin-bottom: 25px;
    }
`

export const ProdContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    padding: 25px;
`

export const ProdCardContainerStyled = styled.div`
    text-align: center;
    padding: 30px;
    width: 230px;
    height: 370px;
    gap: 20px;
    border-radius: 10px;
    border: 2px solid var(--rosa);

    img {
        width: 120px;
        height: 120px;
        margin: 20px;
        border-radius: 10px;
    }

    h3 {
        color: white;
        margin-top: 15px;
    }

    h4 {
        color: white;
        margin-top: 15px;
    }

    button {
        border-radius: 10px;
        padding: 5px 5px;
        background: var(--rosa);
        border: 2px solid var(--rosa);
        margin-top: 15px;
        color: white;
        cursor: pointer;
    }
`