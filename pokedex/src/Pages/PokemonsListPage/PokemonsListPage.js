import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { Container } from "./PokemonsListPageStyle";
import Header from "../../Components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function PokemonListPage() {
  const context = useContext(GlobalContext);
  const { pokelist, addToPokedex, pokedex } = context;

  
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <Container>
      <Header />
      <h1>Todos os Pokémons</h1>
      <section>
        {filteredPokelist().map((pokemon,i) => (
          <PokemonCard
            key={i}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default PokemonListPage;
