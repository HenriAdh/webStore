import React from "react";

const FilterSize = ({
    setSize,
    visible
}) => {
    return (
        <div 
            style={{ 
                display: visible ? 'block' : 'none', 
                marginTop: '10px',
            }}
        >
            <select 
                style={{
                    padding: '3px 5px'
                }}
                onChange={(e) => {
                    e.preventDefault();
                    return setSize(e.target.value);
                }}
            >
                <option value="XPP">XPP</option>
                <option value="PP">PP</option>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="GG">GG</option>
                <option value="XGG">XGG</option>
            </select>
        </div>
    )
}

export default FilterSize;