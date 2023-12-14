import React from "react"

const Links = ({links=[]}) => {
    return (
        <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'nowrap',
                padding: '10px'
        }}>
            {links.map((link, index) => (
                <a key={index} href={'home/' + link.link}>{link.label}</a>
            ))}
        </div>
    )
}

export default Links;