import styled from "styled-components";



export const Container = styled.header`
  position: relative;
  width: 100%;
  height: 120px;
  left: 0px;
  bottom: 100px;
  background: #FFFFFF;
`;

export const ButtonPokedex = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding:10px;
  position: relative;
  width: 15%;
  height: 50%;
  left: 78%;
  bottom: 60%;
  background: #33A4F5;
  border-radius: 8px;
  margin-top:10vw;
  font-size:15px;
`;

export const P1 = styled.p`
  width: 106px;
  height: 36px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Img1 = styled.img`
  position: relative ;
  width: 20vw;
  height: 15vh;
  left: 35%;
  top: 100%;
  

`;
export const Img2 = styled.img`
  position: relative ;
  width: 20vw;
  height: 15vh;
  left: 35%;
  top: 10%;
  

`;
export const Img3 = styled.img`
  position: relative ;
  width: 20vw;
  height: 15vh;
  left: 35%;
  top: 10%;
  

`;

export const ButtonHome = styled.button`
  position: relative;
  width: 30%;
  height: 36px;
  right: 25%;
  bottom: 30%;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-decoration-line: underline;
  background: none;
  border: none;
  color: #1A1A1A;
  :hover{
    color:blue ;
  }

`;

export const RemoveButton = styled.button`
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 15%;
      height: 50px;
      bottom: 80%;
      left: 80%;
      background: #FF6262;
      border-radius: 8px;
      border: none;
      color: white;
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      flex: none;
      order: 1;
      flex-grow: 0;
      :hover{
    color: blue;
  }


`;

export const AddButton = styled.button`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 15%;
      height: 50px;
      left: 80%;
      bottom: 75%;
      background: #33A4F5;
      border-radius: 8px;
      border:none;
      color: white;
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      flex: none;
    
      :hover{
    color: red;
  }
`;