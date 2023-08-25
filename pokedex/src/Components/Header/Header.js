import { useLocation, useNavigate, useParams} from "react-router-dom";
import { Container, Img1,Img2,Img3, ButtonPokedex, ButtonHome, RemoveButton, AddButton } from "./HeaderStyle";
import { goToDetail, goToHome, goToPokedex } from "../../Routes/coordinator";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import {GlobalContext} from '../../contexts/GlobalContext'

function Header({details}) {

  const context = useContext(GlobalContext)

  const {removeFromPokedex, addToPokedex} = context

  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();
  const {name} = useParams()

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
          
            <Img1 src={logo} />
          
            <ButtonPokedex onClick={() => goToPokedex(navigate)}>
              Pokedéx
            </ButtonPokedex>

          </>
        );
      case "/pokedex":
        return (
          <>
          <Img2 src={logo} />
            <ButtonHome onClick={() => goToHome(navigate)}>
              Ver todos os pokémons
            </ButtonHome>
          </>
        );

        case `/details/${name}`:
          return (
            <>
            <Img3 src={logo} />
            <ButtonHome onClick={() => goToHome(navigate)} >
              Todos os pokémons
            </ButtonHome>
            <RemoveButton onClick={() => removeFromPokedex(details,navigate)} >
              Excluir
            </RemoveButton>
  
            <AddButton onClick={() => addToPokedex(details,navigate)} >
              <p>Adicionar</p>
            </AddButton>
            </>
        );
      default:
        return (
          <>
            <buttonHome onClick={() => goToHome(navigate)}>
              Todos os pokémons
            </buttonHome>

            <RemoveButton onClick={()=>goToPokedex(navigate)}>
              Excluir
            </RemoveButton>
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
