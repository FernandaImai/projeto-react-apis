import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../constants/BASE_URL"
import Header from "../../Components/Header/Header"
import { Container, H3, Section, Img1, Img2, ImgSprite, Stats, Moves, Data, Id, Name, ImgPoke, Pokebola, PokeContainer } from "./PokemonDetailPageStyle"
import PokeBola from '../../assets/pokebola.png'
import { getColors } from "../../utils/color"
import { getTypes } from "../../utils/type"



export default function PokemonDetails(){
   
   
    const [details, setDetails] = useState({})
   

    const {name} = useParams()
    useEffect(() => {
        fetchPokeDetails()
    },[name])

    const fetchPokeDetails= async () => {
        try{
            const res = await axios.get(`${BASE_URL}${name}`)
            setDetails(res.data)
        }
        catch(e){
            console.log('erro ao buscar detalhes')
        }
    }

    const typeName = details.types?.map((type) => type.type)

    return(
        <Container>
            <Header details={details} />
            <H3>Detalhes</H3>
            

            <Section color={getColors(details.types?.[0].type.name)}>
                <Img1>
                    <ImgSprite src={details.sprites?.front_default}/>
                </Img1>
                <Img2>
                    <ImgSprite src={details.sprites?.back_default}/>
                </Img2>

                <Stats>
                    <h2>Base Stats</h2>
                    <ul>
                    {details.stats?.map((stat) => {
                        return (
                                  
                                 <li key={stat.stat.name}>
                                    {stat.stat.name}: {stat.base_stat} 
                                </li>
                             
                               )   
                    })}
                    </ul>
                </Stats>
                    
                <Moves>
                    <h2>Moves:</h2>
                    {details.moves?.map((golpes) => {
                        return <ul>
                        <li>
                            {golpes.move.name}
                        </li>
                    </ul>
                    }).slice(0, 5)}

                </Moves>

                <Data>
                    <Id>#0{details.id }</Id>
                    <Name>{details.name}</Name>
                    {typeName?.map((type) => 
                        <img src={getTypes(type.name)} key={type.name}/>
                    )}
                   
                </Data>

                <ImgPoke>
                <img src={details.sprites?.other["official-artwork"].front_default} alt={details.name}/>
                </ImgPoke>
                
                
                <Pokebola src={PokeBola} />
            </Section>
            
            
        </Container>
    )
};