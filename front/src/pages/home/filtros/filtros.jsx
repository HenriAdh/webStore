import React from "react";

const Filtros = ({ filtros={} }) => {
    const handleToggleView = () => {

    }
    return (
        <div style={{
            width: '20%',
            overflowY: 'scroll'
        }}>
            <h1>Filtro</h1>
            {
            filtros.map((filtro, index) => {
                const title = Object.keys(filtros)
                return (
                    <p onClick={() => handleToggleView()}>{title[index]}</p>
                )
            })}
            <p>Preço</p>
            <p>tamanho</p>
            <p>cor</p>
            <p>Genero</p>
            <p>sei la</p>
        </div>


    )
}

export default Filtros;


