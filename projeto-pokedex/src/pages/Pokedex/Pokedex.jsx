import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goBack, goToPokeDetail } from "../../Navigator/navigation";
import { PokedexBox, BackBtn } from "./PokedexStyled";
import { Pagination } from "@mui/material";

const Pokedex = () => {
  const navigate = useNavigate();

  const { getPokeByName, removePokeFromDex, onChangePage } =
    useContext(GlobalStateContext);

  return (
    <PokedexBox>
      <h3>Esta é sua Pokedex</h3>
      <BackBtn
        onClick={() => {
          goBack(navigate);
        }}
      >
        Voltar
      </BackBtn>

      {getPokeByName?.map((poke) => {
        return (
          <div>
            <p key={poke.id}> {poke.name} </p>
            

            <img
              width={"50px"}
              src={poke.sprites.other.dream_world.front_default}
              alt={poke.name}
            />
            <button
              onClick={() => {
                removePokeFromDex(poke);
              }}
            >
              Remover
            </button>
            <button
              onClick={() => goToPokeDetail(navigate, poke.name)}
              key={poke.name}
            >
              Ver Detalhes
            </button>
          </div>
        );
      })}
      <div>
        <Pagination count={20} color="primary" onChange={onChangePage} />
      </div>
    </PokedexBox>
  );
};

export default Pokedex;
