import React from "react";
import styled from "styled-components";


const Contenedor_general = styled.article`

.div_control{
    display: flex;
    justify-content: center;
}

.input {
    width: 15px;
}
`;



export const Card = ({ imagen }) => {
    return (
        <Contenedor_general>
           Mi tarjeta
            <img src={imagen} alt="Imagen de la card" height="200px"/>
            <div className="div_control">
                <button>+</button>
                <input className="input" type="number"/>
                <button>-</button>
            </div>
        </Contenedor_general>
)}

export default Card;