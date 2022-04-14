import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex, goToPokeDetail } from "../../Navigator/navigation";
import { HomeBox } from "./HomeStyled";
const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeBox>
      <h3>Boas vindas à Pokedex!</h3>
      <h5>Qual a boa de hoje?</h5>

      <button
        onClick={() => {
          goToPokedex(navigate);
        }}
      >
        Ir para Pokedex
      </button>
      <button
        onClick={() => {
          goToPokeDetail(navigate);
        }}
      >
        Destaques dos Pokémons
      </button>
    </HomeBox>
  );
};
export default Home;
