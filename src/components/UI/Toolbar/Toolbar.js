import React from 'react'

import classes from './Toolbar.module.scss'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = props => {
    return (
        <div className={classes.Toolbar}>
            <DrawerToggle clicked={props.clicked} />
        </div>
    )
}

export default toolbar
