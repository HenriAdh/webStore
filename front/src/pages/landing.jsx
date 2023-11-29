import React from "react";
import css from './css/landing.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
    const navigate = useNavigate();
    const handleAccess = (e) => {
        e.preventDefault();
        navigate('/home');
    }

    return (
        <div 
            className={css.background}
        >
            <div
                className={css.form}
            >
                <h1>Bem vindo!</h1>
                <form action="" onSubmit={(e) => handleAccess(e)}>
                    <div
                        className={css.loginField}
                    >
                        <label
                            htmlFor='edtLogin'
                        ><FontAwesomeIcon icon={faUser} /> Login:  </label>
                        <input
                            placeholder="usuario.login"
                            type="text"
                            id="edtLogin"
                            name="login"
                            required
                            className={css.input}
                        />
                    </div>
                    <div
                        className={css.passField}
                    >
                        <label
                            htmlFor="edtPass"
                        ><FontAwesomeIcon icon={faLock} /> Senha: </label>
                        <input
                            type="password"
                            placeholder="U$esrP4ss"
                            id="edtPass"
                            name="pass"
                            required
                            className={css.input}
                        />
                    </div>
                    <div
                        className={css.buttomField}
                    >
                        <input
                            type="submit"
                            value={'Acessar'}
                            className={css.buttom}
                        />
                    </div>
                </form>
            </div>
            <div
                className={css.linkField}
            >
                <div
                    className={css.divLink}
                >
                    <span
                        className={css.link}
                        >Esqueci minha senha</span>
                    </div>
                <div
                    className={css.divLink}
                >
                    <span
                        className={css.link}
                    >Registrar</span>
                </div>
            </div>
        </div>
    )
};

export default Landing;