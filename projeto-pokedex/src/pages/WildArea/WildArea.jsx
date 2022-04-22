import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goBack, goToPokeDetail } from "../../Navigator/navigation";

import { Pagination } from "@mui/material";

const WildArea = () => {
  const navigate = useNavigate();
  const { chosenPoke, onChangePage, addToPokedex } =
    useContext(GlobalStateContext);
  return (
    <div>
      <button
        onClick={() => {
          goBack(navigate);
        }}
      >
        Voltar
      </button>
      {chosenPoke?.map((poke) => {
        return (
          <div>
            <p key={poke.id}>{poke.name}</p>
            <img
              width={"100px"}
              src={poke.sprites.other.dream_world.front_default}
              alt={chosenPoke.name}
            />
            <button onClick={() => addToPokedex(poke)}>
              {" "}
              Capturar Pokémon{" "}
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
    </div>
  );
};

export default WildArea;
