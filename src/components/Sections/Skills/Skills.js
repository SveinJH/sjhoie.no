import React from 'react'

import classes from './Skills.module.scss'
import Icon from '../../UI/Icon/Icon'
import Icons from '../../../images/sprites.svg'

const skillInfo = [
    {
        name: 'Javascript',
        icon: 'javascript',
        description:
            'JavaScript is my favourite language out there at the moment.',
        rating: '\u2605',
    },
    {
        name: 'React',
        icon: 'react',
        description:
            'JavaScript is my favourite language out there at the moment.',
        rating: '\u2605',
    },
    {
        name: 'Java',
        icon: 'java',
        description:
            'JavaScript is my favourite language out there at the moment.',
        rating: '\u2605',
    },
    {
        name: 'Git',
        icon: 'git',
        description:
            'JavaScript is my favourite language out there at the moment.',
        rating: '\u2605',
    },
    {
        name: 'Node',
        icon: 'node-dot-js',
        description:
            'JavaScript is my favourite language out there at the moment.',
        rating: '\u2605',
    },
    {
        name: 'HTML',
        icon: 'html5',
        description:
            'JavaScript is my favourite language out there at the moment.',
        rating: '\u2605',
    },
    {
        name: 'CSS',
        icon: 'css3',
        description:
            'JavaScript is my favourite language out there at the moment.',
        rating: '\u2605',
    },
    {
        name: 'SASS',
        icon: 'sass',
        description:
            'JavaScript is my favourite language out there at the moment.',
        rating: '\u2606',
    },
    {
        name: 'MongoDB',
        icon: 'mongodb',
        description:
            'JavaScript is my favourite language out there at the moment.',
        rating: '\u2606',
    },
    {
        name: 'Firebase',
        icon: 'firebase',
        description:
            'JavaScript is my favourite language out there at the moment.',
        rating: '\u2605',
    },
    {
        name: 'MySQL',
        icon: 'mysql',
        description:
            'JavaScript is my favourite language out there at the moment.',
        rating: '\u2605',
    },
    {
        name: 'Gatsby',
        icon: 'gatsby',
        description:
            'JavaScript is my favourite language out there at the moment.',
        rating: '\u2605',
    },
]

const skills = () => {
    const skillContainers = skillInfo.map(skill => {
        return (
            <div className={classes.Skills__container}>
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
                    {skill.rating}
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
