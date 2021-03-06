import React from 'react'

import classes from './Skills.module.scss'
import Icon from '../../UI/Icon/Icon'
import Icons from '../../../images/sprites.svg'

const skillInfo = [
    {
        name: 'Java',
        icon: 'java',
        description:
            'Java har jeg brukt siden starten av dataingeniør-studiet, og føler meg komfortabel med det',
    },
    {
        name: 'Javascript',
        icon: 'javascript',
        description:
            'JavaScript er et språk jeg har god kjennskap til. Bruker det ofte i forbindelse med React',
    },
    {
        name: 'React',
        icon: 'react',
        description:
            'React er favoritten når det kommer til rammeverk. Kombinert med Hooks er det en fryd å bruke',
    },
    {
        name: 'Node',
        icon: 'node-dot-js',
        description:
            'Har brukt Node for å lage RESTful API til fullstack-prosjekter sammen med React',
    },
    {
        name: 'Python',
        icon: 'python',
        description:
            'Har startet å lære meg Python for å kunne automatisere enkelte oppgaver jeg ellers ville brukt mye tid på',
    },
    {
        name: 'PyTorch',
        icon: 'pytorch',
        description:
            'PyTorch er rammeverket vi benytter oss av på NTNU i faget "Anvendt Maskinlæring"',
    },

    {
        name: 'Git',
        icon: 'git',
        description:
            'Git versjonskontroll er en nødvendighet når jeg jobber med prosjekter. Enkel tilgang til alt alltid',
    },

    {
        name: 'HTML',
        icon: 'html5',
        description: 'HTML er HTML',
    },
    {
        name: 'CSS',
        icon: 'css3',
        description:
            'Tar i bruk både CSS Flexbox og Grid i mine prosjekter for å danne akkurat den layouten jeg er ute etter!',
    },
    {
        name: 'SASS',
        icon: 'sass',
        description:
            'SASS er for min del et veldig viktig verktøy for å få bedre oversikt, samt mer kompakt og leselig CSS',
    },
    {
        name: 'MongoDB',
        icon: 'mongodb',
        description:
            'Har brukt MongoDB sammen med NodeJS for å lagre data i en rask og oversiktlig NoSQL database',
    },
    {
        name: 'Firebase',
        icon: 'firebase',
        description:
            'Har brukt Firebase for raskt oppsett av serverløse applikasjoner, lagring av små mengder data og enkel autentisering',
    },
    {
        name: 'MySQL',
        icon: 'mysql',
        description:
            'Har brukt MySQL i flere teamprosjekt på NTNU, bl.a Scrum, og har god erfaring med det',
    },
]

const skills = () => {
    const skillContainers = skillInfo.map(skill => {
        return (
            <div key={skill.name} className={classes.Skills__container}>
                <div
                    className={[
                        classes.Skills__side,
                        classes.Skills__side_front,
                    ].join(' ')}
                >
                    <Icon icons={Icons} size={100} name={skill.icon} />
                    <div className="heading-5">{skill.name}</div>
                </div>
                <div
                    className={[
                        classes.Skills__side,
                        classes.Skills__side_back,
                    ].join(' ')}
                >
                    {skill.description}
                </div>
            </div>
        )
    })

    return (
        <div className={classes.Skills}>
            <div className="heading-2">Ferdigheter</div>
            <div className={classes.Skills__containers}>{skillContainers}</div>
        </div>
    )
}

export default skills
