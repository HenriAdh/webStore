import React from "react";
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    const handleAccess = () => {
        navigate('/home');
    }
    return(
        <div>
            <h1>Landing</h1>
            <input type="button" value={'Acessar'} onClick={() => handleAccess()} />
        </div>
    )
};

export default Landing;