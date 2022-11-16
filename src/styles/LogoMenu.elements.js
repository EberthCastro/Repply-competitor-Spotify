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

  &:hover {
    color: Grey;
  }
`;

export const Navbar = styled.nav`
  grid-area: navbar;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    text-decoration: none;
    outline: none;
    color: antiquewhite;
  }

  &:hover {
    color: Grey;
  }
`;

// export const A = styled.a`
//   text-decoration: none;
//   outline: none;
//   color: antiquewhite;

//   &:hover {
//     color: Grey;
//   }
// `;

export const Herosection = styled.div`
  padding-top: 7rem;
  display: grid;
  grid-template-columns: 1.8fr 1.2fr;
  grid-template-areas: "banner cta";
  font-size: 1.5rem;
  color: antiquewhite;
  width: 100vw;
  height: 100vh;
`;

export const Banner = styled.div`
  grid-area: banner;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Cta = styled.div`
  grid-area: cta;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  height: 100%;
`;

export const Girlimg = styled.img`
  width: 40%;
  height: 80%;
  padding-left: 4rem;
`;

export const Button = styled.button`
  width: 7rem;
  padding: 1rem 1rem 1rem 1rem;
  color: antiquewhite;
  background-color: #2796ff;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;

  a {
    text-decoration: none;
    outline: none;
    color: antiquewhite;
  }
`;
