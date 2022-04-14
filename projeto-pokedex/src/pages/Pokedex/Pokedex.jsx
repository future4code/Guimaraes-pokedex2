import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex, goToPokeDetail } from "../../Navigator/navigation";
import { PokedexBox } from "./PokedexStyled";

const Pokedex = () => {

  const navigate = useNavigate();

  return (
    <PokedexBox>
      <h3>Esta é sua Pokedex</h3>
    </PokedexBox>
  );
};

export default Pokedex;
