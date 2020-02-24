import React from 'react'

import classes from './Button.module.scss'

const button = props => {
    return (
        <>
            <button
                className={classes.Button}
                onClick={() => {
                    window.location.href = props.link
                }}
            >
                {props.text.toUpperCase()}
            </button>
        </>
    )
}

export default button
