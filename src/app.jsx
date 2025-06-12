import React from "react";
import { Header } from "./components/header";
import { Card } from "./components/card"
import { Carrito } from "./components/carrito";
import styled from "styled-components";
import imagenProducto from '../public/imagenes/adidas_samba_hombre/adidas_samba1.jpg';

const Contenedor_general = styled.article`
  /* border: 1px solid black; */
  /* width: 300px; */
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  .Contenedor1 {
    display: flex;
    gap: 10px;
    border: 1px solid grey;
  }
`;

const App = () => {
    return (
        <Contenedor_general>
            <Header/>
            <div className="Contenedor1">
                <Card imagen="../public/imagenes/adidas_samba_hombre/adidas_samba1.jpg"/>
                <Card imagen="../public/imagenes/adidas_samba_hombre/adidas_samba2.jpg"/>
                <Card imagen="../public/imagenes/adidas_samba_hombre/adidas_samba3.jpg"/>
                <Card imagen="../public/imagenes/adidas_samba_hombre/adidas_samba4.jpg"/>
                <Card imagen="../public/imagenes/adidas_samba_hombre/adidas_samba5.jpg"/>

                <Carrito/>
            </div>
        </Contenedor_general>
)};

export default App;