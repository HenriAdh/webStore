import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ title, icon, search, list }) => {
    return (
        <div style={{ border: '2px solid black', backgroundColor: '#FFF', display: 'flex', justifyContent: 'space-evenly' }}>
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <h2>{title}</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", }}>
                <button style={{backgroundColor: 'inherit', padding: 5}}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faUser} />
                </button>
            </div>
        </div>
    )
}

export default NavBar;