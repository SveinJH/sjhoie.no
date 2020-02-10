import React from 'react'

import classes from './About.module.scss'
import personSVG from '../../../images/person.svg'

const about = () => {
    return (
        <div className={classes.About}>
            <div style={{ width: '50%' }}>
                <div className="heading-1">Svein Jakob Høie</div>
                <div className="heading-3">Dataingeniørstudent</div>
                <div className="heading-4">NTNU, Trondheim</div>
            </div>
            <div className={classes.About__image__container}>
                <img
                    className={classes.About__image}
                    src={personSVG}
                    alt="Person SVG"
                />
            </div>
        </div>
    )
}

export default about
