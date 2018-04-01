import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";

export default () => injectGlobal`
    ${styledNormalize}
  
    html,
    body,
    #root {
      height: 100%;
      margin: 0;
      padding: 0;
      width: 100%;
    }
    
    body {
      background-color: #faf8ef;
      color: #776e65;
      font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
    }
    
    * {
      box-sizing: border-box;
    
      &::before,
      &::after {
        box-sizing: border-box;
      }
    }
    
    input {
      outline: none;
    }
    
    ul {
      list-style-type: none;
      text-decoration: none;
    }
    
    p {
      margin: 0;
      padding: 0;
    }
    
    a {   
      cursor: pointer;
      &:hover {
        text-decoration: none;
      }
    }
    
    img {
      max-width: 100%;
      vertical-align: middle;
    }
`;
