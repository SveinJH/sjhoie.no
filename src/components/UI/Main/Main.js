import React from 'react'

import About from '../../Sections/About/About'
import Skills from '../../Sections/Skills/Skills'
import Projects from '../../Sections/Projects/Projects'
import Contact from '../../Sections/Contact/Contact'
import classes from './Main.module.scss'

const main = () => {
    return (
        <div className={classes.Main}>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default main
