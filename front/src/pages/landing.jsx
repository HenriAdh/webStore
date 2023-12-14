import React, { useState } from "react";
import css from './css/landing.module.css';
import { useNavigate } from 'react-router-dom';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import InputText from "../components/input/input";
import Buttom from "../components/buttom/buttom";
import axios from '../api/axios'

const Landing = () => {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleAccess = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post('/login',
                JSON.stringify({login: login, password: pass}),
                {
                    headers: {
                        "Content-Type": 'application/json',
                        // 'Access-Control-Allow-Origin': 'http://localhost:3000'
                    },
                }
            )
            if(res?.data?.user) {
                document.cookie = 'JWT ' + res.data.token;
                return navigate('/home')
            }
            else alert('Erro ao veriifcar credenciais.');
        } catch (error) {
            alert(error?.response?.data?.message)
        }
    }

    const handleForgot = (e) => {
        e.preventDefault();
        navigate('/forgotpassword');
    }

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/register');
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
                        <InputText 
                            id={'edtLogin'}
                            value={login}
                            placeholder="Login"
                            onChange={(e)=>setLogin(e.target.value)}
                            icon={faUser}
                        />
                        <br/>
                        <InputText 
                            id={'edtPass'}
                            type={'password'}
                            value={pass}
                            placeholder="Senha"
                            onChange={(e)=>setPass(e.target.value)}
                            icon={faLock}
                        />
                        <br/>
                    </div>
                    <Buttom 
                        id={'btnAcessar'}
                        value={'Entrar'}
                    />
                </form>
                <div
                    className={css.divLink}
                >
                    <span
                        className={css.link}
                        onClick={(e) => handleRegister(e)}
                    >Registrar</span>
                    <br/>
                    <span
                        className={css.link}
                        onClick={(e) => handleForgot(e)}
                    >Esqueci minha senha</span>
                </div>
            </div>
        </div>
    )
};

export default Landing;