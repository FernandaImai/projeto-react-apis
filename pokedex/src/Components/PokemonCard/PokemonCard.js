import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetail } from "../../Routes/coordinator";
import { Container, Img, ImgPokeBola, Id, Name, CaptureButton, RemoveButton, DetailButton, Types} from "./PokemonCardStyle";
import {GlobalContext} from '../../contexts/GlobalContext'
import pokebola from '../../assets/pokebola.png'
import { getColors } from "../../utils/color";
import { getTypes } from "../../utils/type";




function PokemonCard({pokemonUrl}) {

  const context = useContext(GlobalContext)
  const {addToPokedex, removeFromPokedex } = context;

  

  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState({});
 

  // guarda, porque ainda não renderizamos
  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemons(response.data);

    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  const typeName = pokemons.types?.map((type) => type.type)
  

  return (
    <Container color={getColors(pokemons.types?.[0].type.name)} >
      <Img src={pokemons.sprites?.other["official-artwork"].front_default} alt={pokemons.name} />
      <ImgPokeBola src={pokebola}/>
      <Id>#0{pokemons.id}</Id>
      <Name>{pokemons.name}</Name>

      <Types>
        {typeName?.map((type) => 
            <img src={getTypes(type.name)} key={type.name} alt={type.name}/>
        )} 
      </Types>
  

      <div>
        {location.pathname === "/" ? (
          <CaptureButton onClick={() => addToPokedex(pokemons)}>
            Capturar!
          </CaptureButton>
        ) : (
          <RemoveButton onClick={() => removeFromPokedex(pokemons)}>
            Excluir
          </RemoveButton>
        )}

        <DetailButton onClick={() => goToDetail(navigate, pokemons.name)}>
          Detalhes
        </DetailButton>
      </div>
    </Container>
  );
}

export default PokemonCard;
