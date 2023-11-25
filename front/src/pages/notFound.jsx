import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    }

    return(
        <div>
            <h1>Página não encontrada.</h1>
            <a onClick={() => handleBack()}>Ir para página inicial.</a>
        </div>
    )
};

export default NotFound;