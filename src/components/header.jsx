import React from "react";
import styled from "styled-components";

const Contenedor_general = styled.article`
    width: 100%;

  .Header {
    display: flex;
    gap: 10px;
    border: 1px solid grey;
    width: 100%;
    padding: 20px;
  }
`;

export const Header = () => {
    return  (       
        <Contenedor_general>
            <header className="Header">My first E-commerce</header>
        </Contenedor_general>
)}

export default Header;