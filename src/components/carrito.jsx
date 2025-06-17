import React from "react";
import styled from "styled-components";

const EstiloGeneral = styled.article`
  button.ico_car_menos img {
    max-width: 14px;
    max-height: 14px;
  }

`;


export const Carrito = ({ carrito = [], eliminarDelCarrito, setCarrito }) => {
    const aumentarCantidad = (index) => {
        setCarrito(prev => {
            const nuevoCarrito = [...prev];
            nuevoCarrito[index].cantidad += 1;
            return nuevoCarrito;
        });
    };

    const reducirCantidad = (index) => {
        setCarrito(prev => {
            const nuevoCarrito = [...prev];
            if (nuevoCarrito[index].cantidad > 1) {
                nuevoCarrito[index].cantidad -= 1;
            }
            return nuevoCarrito;
        });
    };


    return (
        <EstiloGeneral>
            <h3>Carrito de Compras</h3>
            {carrito.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <ul>
                    {carrito.map((articulo, index) => (
                        <li key={index}>
                            {articulo.nombre} - {new Intl.NumberFormat("es-CO", {
                                style: "currency",
                                currency: "COP"
                            }).format(articulo.precio * articulo.cantidad)} | Cantidad: {articulo.cantidad} | Talla: EUR {articulo.talla}
                            <button onClick={() => reducirCantidad(index)} disabled={articulo.cantidad === 1}>➖</button>
                            <button onClick={() => aumentarCantidad(index)}>➕</button>
                            <button className="ico_car_menos" onClick={() => eliminarDelCarrito(index)}><img className="ico_car_menos" src="imagenes/iconos/carrito-menos.png"/></button>

                        </li>
                    ))}
                </ul>
            )}            
            <div>
                <h3>Total de la compra: {new Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP"
                }).format(carrito.reduce((total, articulo) => total + (articulo.precio * articulo.cantidad), 0))}</h3>
            </div>
        </EstiloGeneral>  
    );
};

export default Carrito;

                    //  ❌ 