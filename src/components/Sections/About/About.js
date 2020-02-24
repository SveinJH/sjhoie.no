import React from 'react'

import classes from './About.module.scss'
import personSVG from '../../../images/person.svg'

const about = () => {
    return (
        <div className={classes.About}>
            <div className={classes.About__info}>
                <div className="heading-1">Svein Jakob Høie</div>
                <div className="heading-3">Dataingeniørstudent, 2. år</div>
                <div className="heading-4">NTNU, Trondheim</div>
                <p>
                    Mitt navn er Svein Jakob Høie og jeg er en 21 år gammel mann
                    som for tiden studerer til å bli dataingeniør ved NTNU i
                    Trondheim. Jeg er over gjennomsnittet interessert i alt som
                    har med teknologi å gjøre, og mye av tiden min går med til å
                    utforske nettopp dette.
                    <br /> <br />
                    Denne nettsiden er ment som en liten oversikt over hvilke
                    teknologier jeg har brukt i forskjellige sammenhenger, samt
                    en visning av noen prosjekter jeg har gjennomført.
                    <br /> <br />
                    Ta gjerne kontakt om du lurer på noe!
                </p>
            </div>
            <img
                className={classes.About__image}
                src={personSVG}
                alt="Person SVG"
            />
        </div>
    )
}

export default about
