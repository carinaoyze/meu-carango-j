import React from 'react';
import MasterLayout from '../../components/MasterLayout';
import VeiculosLista from '../../components/VeiculosLista';

import {Helmet} from 'react-helmet-async';

export default function Veiculos() {
    return (
        <MasterLayout>
            <Helmet>
                <title>MeuCarango | Veículos</title>
            </Helmet>
            <main className="container">
                <h1 className="cabecalho-pagina">Veículos</h1>
                <VeiculosLista quantidade={12} mostrarTitulo={false}/>
            </main>
        </MasterLayout>
    )
}