import React from "react";
import { useNavigate } from "react-router-dom";

import {
  goToPokedex,
  goToPokeDetail,
  goToWildArea,
} from "../../Navigator/navigation";
import { BtnStyled, HomeBox, HomePageBg, InfoBox, VideoBg } from "./HomeStyled";

import sample from "../../Assets/video/Pokevideo4.mp4";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeBox>
      <HomePageBg>
        <VideoBg autoPlay loop muted src={sample} type="video/mp4" />
      </HomePageBg>

      <InfoBox>
        <h3>
          Boas vindas à <span>Pokedex</span>
        </h3>
      </InfoBox>

      <BtnStyled
        onClick={() => {
          goToPokedex(navigate);
        }}
      >
        Ir para Pokedex
      </BtnStyled>
      <BtnStyled
        onClick={() => {
          goToWildArea(navigate);
        }}
      >
        Hora de Capturar!
      </BtnStyled>
    </HomeBox>
  );
};
export default Home;
