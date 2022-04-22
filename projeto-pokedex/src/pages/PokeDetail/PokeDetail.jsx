import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { BackBtn, PokeDetailBox } from "./PokeDetailStyled";
import { goBack, goToPokedex } from "../../Navigator/navigation";

const PokeDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const pokemon = useRequestData(`${BASE_URL}/pokemon/${params.name}`);

  const pokeStats =
    pokemon &&
    pokemon.stats.map((stat) => {
      return <p key={pokemon.id}>{stat.base_stat}</p>;
    });
  const pokeType =
    pokemon &&
    pokemon.type.map((type) => {
      return <p key={pokemon.id}> {type.type.name}</p>;
    });

  return (
    <PokeDetailBox>
      <BackBtn
        onClick={() => {
          goBack(navigate);
        }}
      >
        Voltar
      </BackBtn>
      <button
        onClick={() => {
          goToPokedex(navigate);
        }}
      >
        Pokedex
      </button>
      <h1>Status</h1>
      {pokemon && (
        <div>
          <p>Nome:{pokemon.name}</p>
          <p>Tipo:{pokeType}</p>
          {pokeStats}
        </div>
      )}
    </PokeDetailBox>
  );
};

export default PokeDetail;
