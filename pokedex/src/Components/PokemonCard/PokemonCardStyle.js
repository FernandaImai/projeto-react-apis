import styled from "styled-components";

export const Container = styled.div`
   
  background-color: ${(props) => {return props.color}};
  position: relative;
  display: flex;
  margin-left:2%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  border-radius: 5%;
  img {
    height: 200px;
  }

`;


export const CaptureButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 8rem;
  height: 2rem;
  top: -380%;
  left: 70%;
  background: #FFFFFF;
  border-radius: 8px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const DetailButton = styled.button`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 45%;
    height: 18%;
    background: none;
    border: none;
    top: -420%;
    left: -70%; 
    font-style: normal;
    font-weight: 700;
    font-size: 120%;
    line-height: 140%;
    text-decoration-line: underline;
    color: #FFFFFF;

    :hover{
    color: black;
  }
  `;

export const RemoveButton = styled.button`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 8rem;
    height: 2rem;
    top: -380%;
    left: 60%;
    background: #FF6262;
    border-radius: 8px;
    border: none;
    color: white;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const Id = styled.p`
  position: relative;
  width: 10%;
  height: 30px;
  left: -40%;
  top: -140%;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 19px;
  color: #FFFFFF;
`;

export const Name = styled.h1`
  position: relative;
  width: 159px;
  height: 0px;
  background-color: black;
  left: -26%;
  top: -150%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #FFFFFF;
`;

export const Types = styled.div` 
  display: flex;
  position: relative;
  top: -135%;
  left: -25%;
 

  img{
    width: 90%;
    height: 90%;
  };
`;

export const Img = styled.img`
  position: relative;
  width: 50%;
  height: 9%;
  left: 25%;
  top: 45%;
  margin-top:40%
`;

export const ImgPokeBola = styled.img`
  position: relative;
  width: 60%;
  height: 100%;
  left: 19%;
  top:-25%;
  opacity: 0.47;
  transform: rotate(0deg)
`;
