import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 100%;
    height: 100%;
    background: #5E5E5E;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 4rem;
    column-gap: 2%;
`;



export const Pokedex = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  
`;

export const Title = styled.h2`
display:flex-start;
color:white;
font-size:40px;
margin-top:-5%
`;



export const H3 = styled.h2`
    position: absolute;
    width: 50%;
    height: 20px;
    left: 40px;
    padding-top: 40px;
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    color: #FFFFFF;
`;