import React from "react"

const Links = ({links=[]}) => {
    return (
        <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'nowrap'
        }}>
            {links.map((link, index) => (
                <p key={index}>{link}</p>
            ))}
        </div>
    )
}

export default Links;