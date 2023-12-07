import React from "react";
import css from './buttom.module.css';

const Buttom = ({
    id,
    value,
    onclick=()=>{},
    type='submit',
    style={},
    fieldStyle={},
}) => {
    return(
        <div
            style={fieldStyle}
        >
            <input 
                type={type}
                id={id}
                name={id}
                value={value}
                onClick={() => onclick()}
                className={css.buttom}
                style={style}
            />
        </div>
    )
}

export default Buttom;