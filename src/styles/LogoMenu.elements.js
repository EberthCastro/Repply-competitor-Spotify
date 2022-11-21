import styled from "styled-components";

const media = {
  mobile: `@media(max-width: 1090px)`,
};

export const Navig = styled.div`
  padding: 2rem 0rem 2rem 0rem;
  display: grid;
  grid-template-columns: 1.8fr 1.2fr;
  grid-template-areas: "logo navbar";
  font-size: 1.2rem;
  position: absolute;
  width: 100vw;

  ${media.mobile} {
    font-size: 1rem;
  }
`;

export const Logon = styled.div`
  grid-area: logo;
  display: flex;
  /* margin-left: -10rem; */
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: antiquewhite;

  &:hover {
    color: Grey;
  }
`;

export const Nav = styled.nav`
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

  ${media.mobile} {
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
    padding: 0rem 2rem 0rem 4rem;
  }
`;

export const Banner = styled.div`
  grid-area: banner;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  ${media.mobile} {
    display: none;
  }
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

  ${media.mobile} {
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 0rem 2rem 0rem 2rem;
    gap: 2rem;
  }
`;

export const Discoversection = styled.div`
  grid-area: section;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;

  .new-icons{
    gap: 5rem;
    ${media.mobile} {
    align-items: center;
  }
  }

  ${media.mobile} {
    align-items: center;
  }
`;
export const Icons= styled.img`
  width: 5rem;
  height: 5rem;
  padding: 1.2rem;
  background-color: #202027; 
  margin: 1rem 0.4rem 1rem 0rem;
  display: flex;
  flex-direction: column;
  
  
`;
export const Icons2= styled.div`
  width: 8rem;
  height: 8rem; 
  display: flex;
  margin: 1rem 0.4rem 1rem 0rem;
  
  ${media.mobile} {
    align-items: center;
  }
  
`;
export const Albumimg = styled.img`
  width: 20rem;
  height: 20rem;
`;
export const Cover = styled.div`
  grid-area: album;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Contactform = styled.div`
  padding-top: 5rem;
  display: grid;
  grid-template-columns: 1.4fr 1.6fr;
  grid-template-areas: "join form";
  color: antiquewhite;
  width: 99vw;
  height: 89vh;

  ${media.mobile} {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 5rem 2rem 0rem 2rem;
    gap: 5rem;
    
  }
`;
export const Join = styled.div`
  grid-area: join;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 2rem;
  font-size: 2rem;
  font-weight: 600;

  h1{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .join-color2 {
    color: #ae457e;
  }

  ${media.mobile} {
    font-size: 1.5rem;
    display: flex;    
    justify-content: center;
    align-items: center;
    font-weight: 800;
    width: 20rem;    
    
  }
`;
export const Formmain = styled.div`
  grid-area: form;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.mobile} {   
   display: flex;   
   justify-content: center;   
  }
`;
export const Formcontainer = styled.div`
  background-color: #202027;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 1rem;
  width: 30rem;
  height: 24rem;
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
  border: 0.1rem solid;
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
  ${media.mobile} {   
   display: flex;   
   justify-content: center; 
   gap: 4rem;
   padding: 2rem 0rem 2rem 0rem;
       
  }
`;
export const Menufooter = styled.div`
  grid-area: menufooter;
  display: flex;
  justify-content: center;
  gap: 2rem;
  ${media.mobile} {   
   display: flex;   
   justify-content: center; 
   
    
  }
`;
export const SocialLinks = styled.div`
  grid-area: social;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  ${media.mobile} {   
   display: flex;   
   justify-content: center; 
        
  }
`;
export const Socialnet = styled.div`
  display: flex;
  gap: 1rem;

  ${media.mobile} {   
   p{
    display: none;
   }        
  }


`;
