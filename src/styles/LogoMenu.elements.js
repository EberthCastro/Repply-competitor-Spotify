import styled from "styled-components";

export const Navig = styled.div`
  padding: 2rem 0rem 2rem 0rem;
  display: grid;
  grid-template-areas: "logo navbar";
  font-size: 1.5rem;
  position: absolute;
  width: 100vw;
  
`;

export const Logon = styled.div`
  grid-area: logo;
  display: flex;
  margin-left: -10rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: antiquewhite;

  &:hover{
    color: Red;
  }
`;

export const Navbar = styled.nav`
  grid-area: navbar;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;  

  

`;

export const A = styled.p`
  text-decoration: none;
outline: none;
color: antiquewhite;

&:hover{
  color: Red;
}

`


