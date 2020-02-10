import React from 'react'

import About from '../../Sections/About/About'
import classes from './Main.module.scss'

const main = () => {
    return (
        <div className={classes.Main}>
            <About />
        </div>
    )
}

export default main
