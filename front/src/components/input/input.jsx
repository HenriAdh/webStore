import React from "react";
import css from './input.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputText = ({
    type='text',
    id,
    value,
    placeholder='',
    onChange=()=>{},
    style={},
    required=true,
    fieldStyle={},
    icon,
}) => {
    return(
        <div
            className={css.inputField}
            style={fieldStyle}
        >
            <FontAwesomeIcon icon={icon} />
            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                value={value}
                className={css.input}
                style={style}
                onChange={(e) => onChange(e)}
                required={required}
            />
        </div>
    )
}

export default InputText;