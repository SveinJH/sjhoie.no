import React from 'react'

import About from '../../Sections/About/About'
import Skills from '../../Sections/Skills/Skills'
import Projects from '../../Sections/Projects/Projects'
import classes from './Main.module.scss'

const main = () => {
    return (
        <div className={classes.Main}>
            <About />
            <Skills />
            <Projects />
        </div>
    )
}

export default main
