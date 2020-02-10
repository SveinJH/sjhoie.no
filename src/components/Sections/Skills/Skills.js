import React from 'react'

import classes from './Skills.module.scss'
import Icon from '../../UI/Icon/Icon'
import Icons from '../../../images/sprites.svg'

const skillInfo = [
    {
        name: 'Javascript',
        icon: 'javascript',
    },
    {
        name: 'React',
        icon: 'react',
    },
    {
        name: 'Java',
        icon: '',
    },
    {
        name: 'Git',
        icon: '',
    },
]

const skills = () => {
    const skillContainers = skillInfo.map(skill => {
        return (
            <div className={classes.Skills__container}>
                <Icon icons={Icons} size={100} name={skill.icon} />
                <div className="heading-5">{skill.name}</div>
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
