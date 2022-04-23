import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goBack, goToPokeDetail } from "../../Navigator/navigation";

import { Pagination } from "@mui/material";
import { PokeArea, PokeBackArea, PokeBtn, PokeCardContainer, PokeContainer, PokeMain, PokeName } from "./WildAreaStyled";

const WildArea = () => {
  const navigate = useNavigate();
  const { chosenPoke, onChangePage, addToPokedex } =
    useContext(GlobalStateContext);
  return (
    <PokeContainer>
      {chosenPoke?.map((poke) => {
        return (
            <PokeMain>
              <PokeCardContainer>
                <PokeArea>
                  <p>#{poke.order}</p>
                  <p key={poke.id}>{poke.name}</p>
                  <img
                    src={poke.sprites.other.dream_world.front_default}
                    alt={chosenPoke.name}
                  />
                  <PokeBtn>
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
                  </PokeBtn>
                </PokeArea>
                <PokeBackArea>
                  <p>#{poke.order}</p>
                  <p>{poke.name}</p>
                  <p><span>Tipo: </span>{poke.types[0].type.name}</p>
                  <p><span>Habilidade: </span>{poke.abilities[0].ability.name}</p>
                  <p><span>Move: </span>{poke.moves[0].move.name}</p>
                  <p><span>HP: </span>{poke.stats[0].base_stat}</p>
                  <p><span>Ataque: </span>{poke.stats[1].base_stat}</p>
                  <p><span>Defesa: </span>{poke.stats[2].base_stat}</p>
                  <p><span>Velocidade: </span>{poke.stats[5].base_stat}</p>
                </PokeBackArea>
              </PokeCardContainer>
            </PokeMain>
            
        );
      })}
      <div>
        <Pagination count={20} color="primary" onChange={onChangePage} />
      </div>
      <button
        onClick={() => {
          goBack(navigate);
        }}
      >
        Voltar
      </button>
    </PokeContainer>
  );
};

export default WildArea;
