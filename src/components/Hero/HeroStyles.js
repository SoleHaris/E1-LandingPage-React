import styled from "styled-components";

export const HeroContainerStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    padding: 200px 30px 40px 30px;
    gap: 30px;

    h1 {
        margin-bottom: 2rem;
    }

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

export const HeroTextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;

    h1 {
        color: white;
        font-size: 4rem;
    }

    p {
        color: white;
        font-size: 1.2rem;
    }

    @media (max-width: 1000px) {
        width: 70%;
        align-items: center;
        text-align: center;
    }
`

export const HeroImageContainerStyled = styled.div`
    width: 40%;
    img {
        width: 80%;
        border-radius: 10px;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`