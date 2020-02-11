import React from 'react'

import classes from './About.module.scss'
import personSVG from '../../../images/person.svg'

const about = () => {
    return (
        <div className={classes.About}>
            <div style={{ width: '50%' }}>
                <div className="heading-1">Svein Jakob Høie</div>
                <div className="heading-3">Dataingeniørstudent, 2. år</div>
                <div className="heading-4">NTNU, Trondheim</div>
                <p
                    style={{
                        marginTop: '4rem',
                        width: '90%',
                        marginRight: '10%',
                    }}
                >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{' '}
                </p>
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
