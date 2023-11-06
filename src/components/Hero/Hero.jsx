import React from 'react'
import { HeroContainerStyled, HeroImageContainerStyled, HeroTextContainerStyled } from './HeroStyles'


export const Hero = () => {
    return (
        <HeroContainerStyled>
            <HeroTextContainerStyled>
                <h1>Virtual Reality</h1>
                <p>Esta tecnología híbrida permite, por ejemplo, ver objetos virtuales en el mundo real y construir una experiencia en la que lo físico y lo digital sean prácticamente indistinguibles.</p>
            </HeroTextContainerStyled> 
            <HeroImageContainerStyled>
                <img src="https://img.freepik.com/foto-gratis/concepto-collage-avatar-metaverso_52683-96428.jpg?w=360&t=st=1698674680~exp=1698675280~hmac=bfb5e3701ef420143cc5208fad16fa52ce72936b4da1440f3d2745ed97e7266b" alt="imagen realidad virtual" />
            </HeroImageContainerStyled>
        </HeroContainerStyled>
    )
}

export default Hero
