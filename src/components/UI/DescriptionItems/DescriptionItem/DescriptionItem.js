import React from 'react'

import classes from './DescriptionItem.module.scss'

const descriptionItem = props => {
    return (
        <div className={classes.DescriptionItem}>
            <div className={classes.DescriptionItem__icon}>
                <svg
                    className={`icon icon-${props.name}`}
                    width={props.size}
                    height={props.size}
                >
                    <use xlinkHref={`${props.icons}#icon-${props.name}`} />
                </svg>
            </div>
            <div>{props.info}</div>
        </div>
    )
}

export default descriptionItem
