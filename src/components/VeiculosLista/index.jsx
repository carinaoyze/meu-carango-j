import React from 'react';
import VeiculoCard from '../VeiculoCard';

import '../../assets/css/veiculos.css';

export default function VeiculosLista({ quantidade, mostrarTitulo }) {

    const renderVeiculosCards = () =>{
        const listaVeiculos = [];
        for(let i = 1; i<=quantidade; i++){
            listaVeiculos.push(
                <VeiculoCard key={i} />
            );
        }

        return listaVeiculos;
    }

    return (
        <section className="container lista-veiculos">
            { mostrarTitulo && <h2>Veículos</h2> } {/* && operador binario, else false */ }
            <ul className="flex">
               {renderVeiculosCards()}
            </ul>
        </section>
    )
}

VeiculosLista.defaultProps = {
    quantidade: 4,
    mostrarTitulo:true
}
