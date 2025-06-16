import React, { useState } from "react";
import { Header } from "./components/header";
import { Card } from "./components/card";
import { Carrito } from "./components/carrito";
import styled from "styled-components";

const Contenedor_general = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  .Contenedor1 {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    border: 1px solid grey;
  }

  .ProductosContainer {
    display: flex;
    flex-wrap: wrap; /* Permite que los productos se distribuyan en filas */
    gap: 10px;
    width: 70%;
  }

  .Card {
    width: 50%; /* Para que entren dos por fila */
  }

  .Card img {
    width: 200px; /* Ajusta todas al mismo ancho */
    height: 200px; /* Todas del mismo alto */
    object-fit: cover; /* Evita deformaciones */
  }

  .Card:last-child {
    width: 100%; /* Última imagen ocupa toda la tercera fila */
  }

  .Carrito {
    right: 0px;
    width: 30%;
    border: 1px solid grey;
  }
`;


const App = () => {
  const [carrito, setCarrito] = useState([]); 

  const eliminarDelCarrito = (index) => {
      setCarrito(prev => prev.filter((_, i) => i !== index));
  };
  return (
    <Contenedor_general>
      <Header />
      <div className="Contenedor1">
        <div className="ProductosContainer">
          <Card className="Card" imagen="imagenes/adidas_samba_hombre/adidas_samba1.jpg" titulo="Adidas Samba Hombre / Ref.1" precio="130000" setCarrito={setCarrito}/>
          <Card className="Card" imagen="imagenes/adidas_samba_hombre/adidas_samba2.jpg" titulo="Adidas Samba Hombre / Ref.2" precio="130000" setCarrito={setCarrito}/>
          <Card className="Card" imagen="imagenes/adidas_samba_hombre/adidas_samba3.jpg" titulo="Adidas Samba Hombre / Ref.3" precio="130000" setCarrito={setCarrito}/>
          <Card className="Card" imagen="imagenes/adidas_samba_hombre/adidas_samba4.jpg" titulo="Adidas Samba Hombre / Ref.4" precio="130000" setCarrito={setCarrito}/>
          <Card className="Card" imagen="imagenes/adidas_samba_hombre/adidas_samba5.jpg" titulo="Adidas Samba Hombre / Ref.5" precio="130000" setCarrito={setCarrito}/>

          <Card className="Card" imagen="imagenes/DC_Hombre/dc_hombre1.jpg" titulo="DC_Hombre / Ref.1" precio="130000" setCarrito={setCarrito}/>
          <Card className="Card" imagen="imagenes/DC_Hombre/dc_hombre2.jpg" titulo="DC_Hombre / Ref.2" precio="130000" setCarrito={setCarrito}/>
          <Card className="Card" imagen="imagenes/DC_Hombre/dc_hombre3.jpg" titulo="DC_Hombre / Ref.3" precio="130000" setCarrito={setCarrito}/>
          <Card className="Card" imagen="imagenes/DC_Hombre/dc_hombre4.jpg" titulo="DC_Hombre / Ref.4" precio="130000" setCarrito={setCarrito}/>
          <Card className="Card" imagen="imagenes/DC_Hombre/dc_hombre5.jpg" titulo="DC_Hombre / Ref.5" precio="130000" setCarrito={setCarrito}/>

          <Card className="Card" imagen="imagenes/nike_sb/nike_sb1.jpg" titulo="Nike sb / Ref.1" precio="130000" setCarrito={setCarrito}/>
          <Card className="Card" imagen="imagenes/nike_sb/nike_sb2.jpg" titulo="Nike sb / Ref.2" precio="130000" setCarrito={setCarrito}/>
          <Card className="Card" imagen="imagenes/nike_sb/nike_sb3.jpg" titulo="Nike sb / Ref.3" precio="130000" setCarrito={setCarrito}/>
          <Card className="Card" imagen="imagenes/nike_sb/nike_sb4.jpg" titulo="Nike sb / Ref.4" precio="130000" setCarrito={setCarrito}/>
          <Card className="Card" imagen="imagenes/nike_sb/nike_sb5.jpg" titulo="Nike sb / Ref.5" precio="130000" setCarrito={setCarrito}/>
          <Card className="Card" imagen="imagenes/nike_sb/nike_sb6.jpg" titulo="Nike sb / Ref.6" precio="130000" setCarrito={setCarrito}/>                                                        
        </div>
        <div className="Carrito">
          <Carrito carrito={carrito} setCarrito={setCarrito} eliminarDelCarrito={eliminarDelCarrito} />
        </div>
      </div>
    </Contenedor_general>
  );
};

export default App;
