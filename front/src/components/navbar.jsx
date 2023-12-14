import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import css from './navbar.module.css'

const NavBar = ({ title=<></>, contFav=0, onClickFav, contCart=0, onClickCart, contPerf=0, onClickPerf }) => {
    return (
        <div style={{ borderBottom: '2px solid black', backgroundColor: '#FFF', display: 'flex', justifyContent: 'space-evenly' }}>
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                {title}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: '5px'}}>
                <button className={css.icon}
                    onClick={(e) => {
                        e.preventDefault();
                        return onClickFav();
                    }}
                >
                    <FontAwesomeIcon icon={faHeart} /> {contFav}
                </button>
                <button className={css.icon}
                    onClick={(e) => {
                        e.preventDefault();
                        return onClickCart();
                    }}
                >
                    <FontAwesomeIcon icon={faCartShopping} /> {contCart}
                </button>
                <button className={css.icon} 
                    onClick={(e) => {
                        e.preventDefault();
                        return onClickPerf();
                    }}
                >
                    <FontAwesomeIcon icon={faUser} /> {contPerf}
                </button>
            </div>
        </div>
    )
}

export default NavBar;