import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;  
  font-family: 'Poppins', sans-serif;  
}

body{    
  display: flex;
  flex-direction: column;
  background-color: #2F303A; 

  p{
  font-size: 1.2rem;
}
}

`;

export default GlobalStyles;
