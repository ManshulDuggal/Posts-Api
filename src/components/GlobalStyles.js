import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


*{
box-sizing: border-box;
margin: 0px;
padding: 0px;


/* *{
background-color: hsl(205, 35.29%, 93.33%);
} */
* {
  scrollbar-width: none;
}

*::-webkit-scrollbar {
  width: 0.3rem;
  
 
}

*::-webkit-scrollbar-button {
  background: transparent;
  
}

*::-webkit-scrollbar-track {
  background: transparent;
 
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(109, 105, 105, 0);
  border-radius: 50px;
  border: solid 10px;
  color: black;

}

//profile image
.profile {
        overflow: hidden;
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }


    .active-button {
            background-color: hsl(153.79,73.11%,76.67%);
        }


        .delete-icon{
          background-color: white;
          border-radius: 50%;
          width: 40%;
          margin:0rem 2rem; 
          padding: 1rem;
          box-shadow:black 0px 0px 20px;
        }
}

`;
export default GlobalStyles;
