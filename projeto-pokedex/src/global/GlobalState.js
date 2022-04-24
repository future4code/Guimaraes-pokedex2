import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {
  //Organização:
  //1) Todos os estados gerais da aplicação:
  const [getPokeByName, setGetPokeByName] = useState([]);
  const [chosenPoke, setChosenPoke] = useState([]);
  const [pokemonsUrls, setPokemonsUrls] = useState([]);
  const [numberPage, setNumberPage] = useState(1);
  const page = numberPage * 20;
  const [pokemonData, setPokemonData] = useRequestData(
    `${BASE_URL}/pokemon?limit=20&offset=${page}`
  );
  const onChangePage = (e, value) => setNumberPage(value);

  useEffect(() => {
    const list = []; //cria uma lista que é um array vazio
    pokemonData &&
      pokemonData.results.map((poke) => {
        list.push(poke.url); //mapeia a API e insere na lista os pokémons por url
        setPokemonsUrls(list); //atribui ao state 'pokemonsUrls' a lista acima
      });
  }, [pokemonData]);

  useEffect(() => {
    const dataPokemon = []; //cria um array vazio
    pokemonsUrls &&
      pokemonsUrls.map((poke) => {
        /* mapeia a lista com urls anteriormente criada */
        axios
          .get(poke)
          .then((res) => {
            dataPokemon.push(res.data);
            if (dataPokemon.length === 20) {
              setChosenPoke(dataPokemon);
            }
          })
          .catch((err) => alert(err));

          const image = `https://professorlotus.com/Sprites/${poke.name}.gif`
          return {
            ...pokemonsUrls,
            image
          }
      });

  }, [pokemonsUrls]);

  //3) Funções de adicionar e remover da pokedex
  const addToPokedex = (poke) => {
    const pokeIndex = chosenPoke.findIndex(
      (pokemon) => pokemon.name === poke.name
    );
    const newPokemonList = [...chosenPoke];
    newPokemonList.splice(pokeIndex, 1);
    const newPokedexList = [...getPokeByName, chosenPoke[pokeIndex]];
    setChosenPoke(newPokemonList);
    setGetPokeByName(newPokedexList);

    alert("Eu escolho você!");
  };

  const removePokeFromDex = (poke) => {
    const pokeIndex = getPokeByName.findIndex(
      (pokemon) => pokemon.name === poke.name
    );
    const newPokedexList = [...getPokeByName];
    newPokedexList.splice(pokeIndex, 1);
    const newPokemonList = [...chosenPoke, getPokeByName[pokeIndex]];

    setChosenPoke(newPokemonList);
    setGetPokeByName(newPokedexList);

    alert("O Pokémon foi devolvido à natureza! :') ");
  };

  //3)Organização das informações.
  //insere os estados e as funções em uma única const que será repassada por props
  const pokemon = {
    chosenPoke,
    onChangePage,
    getPokeByName,
    addToPokedex,
    removePokeFromDex,
  };
  //4) Provider que irá receber como filhos os componentes que precisarão dessas infos:
  return (
    <GlobalStateContext.Provider value={pokemon}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
