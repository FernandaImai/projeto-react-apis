import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { Container, Pokedex, Title } from "./PokedexPageStyle";
import Header from "../../Components/Header/Header";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { BASE_URL } from "../../constants/BASE_URL";
import { DivPokedex } from "./PokedexPageStyle";

const PokedexPage = ({pokemon})=> {

  const context = useContext(GlobalContext)
  const { pokedex,removeFromPokedex } = context;

  return (
    <Container>
      <Header />
      <Title>Meus Pokémons</Title>
      <Pokedex>
        {pokedex.map((pokemon) => (
          <PokemonCard
          key={pokemon.name}
          pokemonUrl= {`${BASE_URL}${pokemon.name}`}
          removeFromPokedex={removeFromPokedex}
          />
        ))}
    </Pokedex>
    </Container>

    
    
  );
}

export default PokedexPage;