import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goBack, goToPokeDetail } from "../../Navigator/navigation";

import { Pagination } from "@mui/material";
import { BackBtn, PaginationBox, PokeArea, PokeBackArea, PokeBtn, PokeCardContainer, PokeContainer, PokeName } from "./WildAreaStyled";

const WildArea = () => {
  const navigate = useNavigate();
  const { chosenPoke, onChangePage, addToPokedex } =
    useContext(GlobalStateContext);

  return (
    <div>
      <PokeContainer>
        {chosenPoke?.map((poke) => {
          return (
                <PokeCardContainer>
                  <PokeArea>
                    <p><span>#0{poke.order}</span></p>
                    <h3 key={poke.id}>{poke.name[0].toUpperCase() + poke.name.slice(1).toLowerCase()}</h3>
                    <img
                      src={poke.sprites.other.dream_world.front_default}
                      alt={chosenPoke.name}
                    />
                    <PokeBtn>
                      <button onClick={() => addToPokedex(poke)}>
                        {" "}
                        Capturar Pokémon{" "}
                      </button>
                    </PokeBtn>
                  </PokeArea>
                  <PokeBackArea>
                    {/* <p>{poke.name}</p> */}
                    <p><span>Tipo: </span>{poke.types[0].type.name[0].toUpperCase() + poke.types[0].type.name.slice(1).toLowerCase()}</p>
                    <p><span>Habilidade: </span>{poke.abilities[0].ability.name[0].toUpperCase() + poke.abilities[0].ability.name.slice(1).toLowerCase()}</p>
                    <p><span>Move: </span>{poke.moves[0].move.name[0].toUpperCase() + poke.moves[0].move.name.slice(1).toLowerCase()}</p>
                    <p><span>HP: </span>{poke.stats[0].base_stat}</p>
                    <p><span>Ataque: </span>{poke.stats[1].base_stat}</p>
                    <p><span>Defesa: </span>{poke.stats[2].base_stat}</p>
                    <p><span>Velocidade: </span>{poke.stats[5].base_stat}</p>
                  </PokeBackArea>
                </PokeCardContainer>
          );
        })}
      </PokeContainer>
      <PaginationBox>
          <Pagination count={20} color="primary"  onChange={onChangePage} />
      </PaginationBox>
      <BackBtn>
          <button
            onClick={() => {goBack(navigate);}}>Voltar</button>
      </BackBtn>
    </div>
  );
};

export default WildArea;
