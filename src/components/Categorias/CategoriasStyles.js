import styled from "styled-components";

export const CategoriasContainerStyled = styled.div`
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 30px;

        h2 {
            color: white;
            margin-bottom: 25px;
        }
`

export const CatContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    padding: 25px;
`

export const CategoriaCardContainerStyled = styled.div`
    padding: 15px 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 100px;
    border-radius: 10px;
    border: 2px solid var(--rosa);

    h3 {
        flex-basis: 50%;
        text-align: center;
        color: var(--rosa);
    }
`



