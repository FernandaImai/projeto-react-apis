import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASE_URL";
import { GlobalContext } from "./GlobalContext";

export const GlobalState =(props)=> {
  const [pokelist, setPokeList] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    fetchPokelist();
  }, []);

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPokeList(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (pokedex.length > 0) {
      const pokedexString = JSON.stringify(pokedex)
      localStorage.setItem('pokedex', pokedexString)
    }
  }, [pokedex])

  useEffect(() => {
    const getSavePokedex = JSON.parse(localStorage.getItem('pokedex'))
    if (getSavePokedex !== null) {
      setPokedex(getSavePokedex)
    }
  }, [])



  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );
    window.localStorage.removeItem('pokedex') 
    setPokedex(newPokedex);
  };

  const context = {
    pokelist,
    pokedex,
    addToPokedex,
    removeFromPokedex,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}


