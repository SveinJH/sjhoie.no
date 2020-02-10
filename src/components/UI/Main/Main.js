import React from 'react'

import About from '../../Sections/About/About'
import Skills from '../../Sections/Skills/Skills'
import classes from './Main.module.scss'

const main = () => {
    return (
        <div className={classes.Main}>
            <About />
            <Skills />
        </div>
    )
}

export default main
