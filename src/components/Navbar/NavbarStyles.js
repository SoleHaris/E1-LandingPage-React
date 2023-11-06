import styled from "styled-components";

export const NavbarContainerStyled = styled.div `
    background: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    flex-wrap: wrap;
    position: fixed;
    //top: 0;
    //z-index: 1;

    img {
        width: 130px;
        height: 130px;
    }

`

export const NavbarLinksContainerStyled = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    

    a {
        font-size: 20px;
        padding: 1rem 1.5rem;
        color: var(--rosa);
    }

    @media (max-width: 877px) {
        display: none;
    }

`

