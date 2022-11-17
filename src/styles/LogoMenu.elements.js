import styled from "styled-components";

export const Navig = styled.div`
  padding: 2rem 0rem 2rem 0rem;
  display: grid;
  grid-template-columns: 1.8fr 1.2fr;
  grid-template-areas: "logo navbar";
  font-size: 1.2rem;
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
`;

export const Button = styled.button`
  padding: 1rem 1rem 1rem 1rem;
  color: antiquewhite;
  background-color: #2796ff;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  width: ${(props) => props.widthF};

  a {
    text-decoration: none;
    outline: none;
    color: antiquewhite;
  }
`;

export const Discover = styled.div`
  padding-top: 7rem;
  display: grid;
  grid-template-columns: 1.6fr 1.2fr;
  grid-template-areas: "section album";
  font-size: 1.5rem;
  color: antiquewhite;
  width: 100vw;
  height: 89vh;
  justify-content: center;
`;

export const Discoversection = styled.div`
  grid-area: section;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
`;
export const Albumimg = styled.img`
  width: 54%;
  height: 60%;
`;
export const Cover = styled.div`
  grid-area: album;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8rem;
`;
export const Contactform = styled.div`
  padding-top: 5rem;
  display: grid;
  grid-template-columns: 1.4fr 1.6fr;
  grid-template-areas: "join form";
  color: antiquewhite;
  width: 99vw;
  height: 89vh;
`;
export const Join = styled.div`
  grid-area: join;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 1rem;
  font-size: 4rem;
  font-weight: 800;

  .join-color {
    color: #ae457e;
  }
`;
export const Formmain = styled.div`
  grid-area: form;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Formcontainer = styled.div`
  background-color: #202027;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 1rem;
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-content: center; 
  gap: 1.2rem; 
`;
export const Input = styled.input`
  width: 100%;
  height: 2rem;
  background-color: #202027;
  border-color: wheat;
  color: antiquewhite;
  border-radius: 0.3rem;
  padding: 1rem 1rem 1rem 1rem; 
`;

export const Footermain = styled.div`
  padding: 2rem 0rem 1.5rem 0rem;
  position: absolute;
  display: grid;   
  grid-template-columns: 1.6fr 1.4fr;
  grid-template-areas: "menufooter social";  
  color: antiquewhite;
  width: 100vw;  
  background-color: #202027; 
`;
export const Menufooter = styled.div`
  grid-area: menufooter;
  display: flex;
  justify-content: center;  
  gap: 2rem; 
`;
export const SocialLinks = styled.div`
  grid-area: social;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const Socialnet = styled.div`
  display: flex;
  gap: 1rem; 
`;


