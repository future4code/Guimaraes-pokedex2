import React from "react";
import { FooterContainer } from "./FooterStyled";

const Footer = () => {

    return (
        <FooterContainer>
            <p>© Desenvolvido por <span>Caio Ramos</span>, <span>Lucas Aversi </span>e <span>Renan Arimatea</span></p>
            <img src="https://ca.slack-edge.com/TLAVDH7C2-U02JSA4U04S-9055ccb70eb3-512" alt="Caio Ramos" />
            <img src="https://ca.slack-edge.com/TLAVDH7C2-U02JKJ1HM5L-5862aca54956-512" alt="Lucas Aversi" />
            <img src="https://ca.slack-edge.com/TLAVDH7C2-U02JSA38750-a0e40ed0e06f-512" alt="Renan Arimatea" />
        </FooterContainer>
    )
}

export default Footer
