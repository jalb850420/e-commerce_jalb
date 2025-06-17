import React from "react";
import styled from "styled-components";

const Contenedor_general = styled.article`
    width: 100%;
  /* *{
    border: 1px solid red;
  } */
  .Header {
    display: flex;
    justify-content: space-between;
    align-items:center;
    gap: 10px;
    border: 1px solid grey;
    width: 96.8%;
    padding: 20px;
  }

  .car-header {
    /* position: absolute; */
    display: flex;
    justify-content:flex;
    align-items:center;
    right: 10px;
    height:100%;
  }

  .car-header img {
    width: 40px;
    height: 40px;
    /* align-items: center; */
  }
`;

export const Header = ({ carrito = [] }) => {
    const mostrarCarrito = () => {
        alert("sirvio");
    };
    return  (       
        <Contenedor_general>
            <header className="Header">
              <h1>
                My first E-commerce
              </h1>
              <div className="car-header" onClick={() => mostrarCarrito()}>
                <img src="imagenes/iconos/carrito-de-compras.png" alt="Icono del carrito" />
                <span>
                  ({carrito.reduce((acumulador, articulo) => acumulador + articulo.cantidad, 0)})
                </span>
              </div>
            </header>
        </Contenedor_general>
)}

export default Header;