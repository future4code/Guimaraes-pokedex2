import React from "react";
import { FooterContainer } from "./FooterStyled";

const Footer = () => {

    return (
        <FooterContainer>
            <p>© Desenvolvido por<span> <a href="https://github.com/Tapioquito" target="_blank">Caio Ramos</a></span>, <span><a href="https://github.com/Aversii" target="_blank">Lucas Aversi </a></span>e <span><a href="https://github.com/renan-arimatea" target="_blank">Renan Arimatea</a></span></p>
            <a href="https://www.linkedin.com/in/caio-ramos-88b198b8/" target="_blank"><img src="https://ca.slack-edge.com/TLAVDH7C2-U02JSA4U04S-9055ccb70eb3-512" alt="Caio Ramos"/></a>
            <a href="https://www.linkedin.com/in/lucas-aversi-18997a22a/" target="_blank"><img src="https://ca.slack-edge.com/TLAVDH7C2-U02JKJ1HM5L-5862aca54956-512" alt="Lucas Aversi" /></a>
            <a href="https://www.linkedin.com/in/renan-arimatea-37427a136/" target="_blank"><img src="https://ca.slack-edge.com/TLAVDH7C2-U02JSA38750-a0e40ed0e06f-512" alt="Renan Arimatea" /></a>
        </FooterContainer>
    )
}

export default Footer
