import React from 'react'

import DescriptionItems from '../../UI/DescriptionItems/DescriptionItems'

import classes from './SideDrawer.module.scss'

const sideDrawer = props => {
    return (
        <div className={classes.SideDrawer}>
            <DescriptionItems />
            <div className={classes.SideDrawer__copyright}>
                Copyright © 2020 Svein Jakob Høie
            </div>
        </div>
    )
}

export default sideDrawer
