import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import Toolbar from '../Toolbar/Toolbar'
import DescriptionItems from '../../UI/DescriptionItems/DescriptionItems'

import classes from './SideDrawerMobile.module.scss'

const sideDrawerMobile = props => {
    let styles = [classes.SideDrawerMobile, classes.Closed]

    if (props.show) {
        styles = [classes.SideDrawerMobile, classes.Open]
    }

    return (
        <>
            <Toolbar clicked={props.clicked} />
            <Backdrop show={props.show} clicked={props.clicked} />
            <div className={styles.join(' ')}>
                <div>
                    <DescriptionItems />
                </div>
            </div>
        </>
    )
}

export default sideDrawerMobile
