import React from "react";
import css from './preco.module.css';

const FiltroPreco = ({
    priceMin,
    setPriceMin,
    priceMax,
    setPriceMax,
    visible
}) => {
    return (
        <div style={{ display: visible ? 'flex' : 'none', justifyContent: "center", flexDirection: 'column', marginTop: '10px' }}>
            <div>
                <label>DE</label>
                <input
                    className={css.range}
                    type='range'
                    value={priceMin}
                    min={0}
                    max={10000}
                    onChange={(e) => {
                        e.preventDefault();
                        return setPriceMin(e.target.value)
                    }}
                />
                <span>R$ </span>
                <input
                    className={css.number}
                    type="number"
                    value={priceMin}
                    min={0}
                    max={10000}
                    onChange={(e) => {
                        e.preventDefault();
                        return setPriceMin(e.target.value);
                    }}
                />
            </div>
            <div>
                <label>ATÉ </label>
                <input
                    className={css.range}
                    type='range'
                    value={priceMax}
                    min={0}
                    max={10000}
                    onChange={(e) => {
                        e.preventDefault();
                        return setPriceMax(e.target.value);
                    }}
                />
                <span>R$ </span>
                <input
                    className={css.number}
                    type="number"
                    value={priceMax}
                    min={0}
                    max={10000}
                    onChange={(e) => {
                        e.preventDefault();
                        return setPriceMax(e.target.value);
                    }}
                />
            </div>
        </div>
    )
}

export default FiltroPreco;