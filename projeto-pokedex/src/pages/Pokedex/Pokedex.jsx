import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToPokeDetail } from "../../Navigator/navigation";
import { PokedexBox, BackBtn } from "./PokedexStyled";

const Pokedex = () => {

  const navigate = useNavigate();

  return (
    <PokedexBox>
      <h3>Esta é sua Pokedex</h3>

     <BackBtn
        onClick={() => {
          goBack(navigate);
        }}
      >voltar
      </BackBtn>
    </PokedexBox>
  );
};

export default Pokedex;
