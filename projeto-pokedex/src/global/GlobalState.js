import React, { useState, useEffect, } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from 'axios'

const GlobalState = (props) => {
  //Organização:
  //1) Todos os estados gerais da aplicação:
  const [getPokeByName, setGetPokeByName] = useState({});
  const [getPokeByEncounter, setGetPokeByEncounter] = useState([]);

  //2) Requisições da API:    

  
    const getPokemonByName=()=>{
      axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=30`)
      .then((res)=>{
          setGetPokeByName(res.data.results.url) 
          res.data.results.forEach(pokemon => {
              axios.get(pokemon.url)
              .then(res=>{
                  setGetPokeByName(listaPokemons => [listaPokemons, res.data])
              }) 
          }); 
      })
      .catch((err)=>console.log((err)))
    }
    useEffect(()=>{
      getPokemonByName()
    },[])

    console.log(getPokeByName)  

  //3)Organização das informações.
  //Divididas em 3 categorias para facilitar a localização dos dados nos consumers:

  const states = { getPokeByName, getPokeByEncounter };
  const setters = { setGetPokeByName, setGetPokeByEncounter };
  const requests = { getPokemonByName };

  //4) Provider que irá receber como filhos os componentes que precisarão dessas infos:
  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;