import React from "react";
import styled from "styled-components";


const Contenedor_general = styled.article`
display: block;
border: 1px solid grey;
border-radius:5px;
padding:5px;
justify-content: center;

  div {
    text-align: center;
    margin-bottom: 5px; /* Espaciado entre los bloques */
  }

div_img{
    display: "flex";
    /* justifyContent: "center";
    alignItems: "center"; */
    height: "250px";
    /* border: "1px solid grey"  */
}

img{
    height:300px;
    border-radius:5px;
}

.div_eleccion{
    display:flex;
    justify-content: space-around;
    align-items: center;
}

.div_eleccion select {
    height:30px;
}

.div_control{
    display: flex;
    justify-content: center;
    gap: 5px;
}

.input {
    width: 15px;
    
}
`;



export const Card = ({ imagen, titulo, precio }) => {
    const tallas = [null, 40, 41, 42, 43, 44];

    return (
        <Contenedor_general>
            <div>
                {titulo}
            </div>
            <div className="div_img">
                <img src={imagen} alt="Imagen de la card" style={{ display: "block", margin: "auto" }} />
            </div>
            <div className="div_eleccion">
                <p>{new Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP",
                    minimumFractionDigits: 2
                }).format(precio)}</p>
                <select>
                    {tallas.map((talla, index) => (
                        <option key={index} value={talla}>
                          {talla === null ? "Talla" : `EUR ${talla}`}
                        </option>
                        
                    ))}
                </select>
            </div>
            <div className="div_control">
                <div>
                    <button>+</button>
                    <input className="input" type="number"/>
                    <button>-</button>
                </div>
                <div>
                    <button onClick={() => añadirAlCarrito()}>Añadir al carrito</button>
                </div>
            </div>
        </Contenedor_general>
)}

export default Card;