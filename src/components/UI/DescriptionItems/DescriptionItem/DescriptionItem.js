import React from 'react'

import classes from './DescriptionItem.module.scss'
import Icon from '../../Icon/Icon'

const descriptionItem = props => {
    return (
        <div className={classes.DescriptionItem}>
            <div className={classes.DescriptionItem__icon}>
                <Icon icons={props.icons} name={props.name} size={props.size} />
            </div>
            <div>{props.info}</div>
        </div>
    )
}

export default descriptionItem
