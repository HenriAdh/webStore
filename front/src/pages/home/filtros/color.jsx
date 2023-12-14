import React from "react";

const FilterColor = ({
    setColor,
    visible
}) => {
    return (
        <div style={{ display: visible ? 'block' : 'none', marginTop: '10px' }}>
            <select 
                style={{
                    padding: '3px 5px'
                }}
                onChange={(e) => {
                    e.preventDefault();
                    return setColor(e.target.value);
                }}
            >
                <option value="white">Branco</option>
                <option value="black">Preto</option>
                <option value="silver">Prata</option>
                <option value="gold">Dourado</option>
                <option value="yellow">Amarelo</option>
                <option value="red">Vermelho</option>
                <option value="blue">Azul</option>
                <option value="orange">Laranja</option>
                <option value="purple">Violeta</option>
                <option value="green">Verde</option>
                <option value="grey">Cinza</option>
            </select>
        </div>
    )
}

export default FilterColor;