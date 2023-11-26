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
            <button onClick={() => handleBack()}>Ir para página inicial.</button>
        </div>
    )
};

export default NotFound;