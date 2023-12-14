import React from "react";
import css from './loading.module.css'

const Loading = ({ visible }) => {
    return (
        <div className={css.loading}></div>
    )
}

export default Loading;