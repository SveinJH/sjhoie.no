import React from 'react'

const icon = props => {
    return (
        <svg
            className={`icon icon-${props.name}`}
            width={props.size}
            height={props.size}
        >
            <use xlinkHref={`${props.icons}#icon-${props.name}`} />
        </svg>
    )
}

export default icon
