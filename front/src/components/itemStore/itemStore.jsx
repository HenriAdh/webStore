import React from "react";

const ItemStore = ({ id, img, title, desc, valor, onclick }) => {
    return (
        <div key={id} style={{ border: '1px solid black', height: '300px', width: '225px' }} onClick={(e) => {
            e.preventDefault();
            onclick(id);
        }}>
            <div>
                <br /><img alt="Imagem" src={`${img}.webp`} width={'180px'} />
            </div>
            <br /><span><b>{title}</b></span>
            <br /><span>{desc}</span>
            <br /><span>R${valor}</span>
        </div>
    )
}

export default ItemStore;