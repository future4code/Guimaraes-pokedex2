import React from "react";
import { useNavigate } from "react-router-dom";
import { BackBtn, PokeDetailBox } from "./PokeDetailStyled";
import { goBack} from "../../Navigator/navigation";

const PokeDetail = () => {
  const navigate = useNavigate();


  return (
    <PokeDetailBox>
      <h3>Detalhes dos pokemons</h3>

     <BackBtn
        onClick={() => {
          goBack(navigate);
        }}
      >voltar
      </BackBtn>
    </PokeDetailBox>
  );
};

export default PokeDetail;
