import React, { useState } from "react";
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
        display: flex;
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
        align-items: top;
        gap: 5px;
    }

    .div_control div {
        display:flex;
        align-items: center;
    }
    .input {
        width:25px;
        padding: 1px;
    }
`;



export const Card = ({ imagen, titulo, precio, setCarrito }) => {
    const tallas = [null, 40, 41, 42, 43, 44];
    const [cantidad, setCantidad] = useState(1);
    const [tallaSeleccionada, setTallaSeleccionada] = useState(null);


    const aumentarCantidad = () => {
        setCantidad(prev => prev + 1);
    };

    const reducirCantidad = () => {
        if (cantidad > 1) {
            setCantidad(prev => prev - 1);
        }
    };



    const añadirAlCarrito = () => {
        // if (!tallaSeleccionada || tallaSeleccionada === "Talla") return;

        setCarrito(prev => {
            const existeArticulo = prev.find(articulo => 
                articulo.nombre === titulo && articulo.talla === tallaSeleccionada
            );

            if (existeArticulo) {
                return prev.map(articulo => 
                    articulo.nombre === titulo && articulo.talla === tallaSeleccionada
                        ? { ...articulo, cantidad: articulo.cantidad + cantidad }
                        : articulo
                );
            } else {
                return [...prev, { nombre: titulo, precio, cantidad, talla: tallaSeleccionada }];
            }
        });

        setCantidad(1);
        setTallaSeleccionada(null);
    };



    // const añadirAlCarrito = () => {

    //     const nuevoArticulo = {
    //         nombre: titulo,
    //         precio: precio,
    //         cantidad: cantidad,
    //         talla: tallaSeleccionada
    //     };

    //     setCarrito(prev => [...prev, nuevoArticulo]); // Usa el `setCarrito` de `App.js`
    //     setCantidad(1);
    //     setTallaSeleccionada(null);
    // };



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
                <select value={tallaSeleccionada || "Talla"}  onChange={(e) => setTallaSeleccionada(e.target.value)}>
                    {tallas.map((talla, index) => (
                        <option key={index} value={talla}>
                          {talla === null ? "Talla" : `EUR ${talla}`}
                        </option>
                        
                    ))}
                </select>
            </div>
            <div className="div_control">
                <div>
                    <button onClick={reducirCantidad}>-</button>
                    <input className="input" type="number" value={cantidad} readOnly />
                    <button onClick={aumentarCantidad}>+</button>
                </div>
                <div>
                    <button onClick={() => añadirAlCarrito()} disabled={(tallaSeleccionada === "Talla" || tallaSeleccionada === null) || cantidad === 0}>Añadir al carrito</button>
                </div>
            </div>
        </Contenedor_general>
)}

export default Card;