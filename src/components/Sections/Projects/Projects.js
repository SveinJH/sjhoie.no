import React from 'react'

import classes from './Projects.module.scss'
import Button from '../../UI/Button/Button'

import cruiseFix from '../../../images/project-2.jpg'
import hoie_dev from '../../../images/project-0.png'
import trillo from '../../../images/project-3.jpg'
import nexter from '../../../images/project-1.jpg'

const projectsInfo = [
    {
        image: hoie_dev,
        title: 'hoie.dev',
        links: [
            { text: 'Besøk', url: 'https://hoie.dev' },
            {
                text: 'GitHub',
                url: 'https://github.com/SveinJH/hoie.dev',
            },
        ],
    },
    {
        image: cruiseFix,
        title: 'CruiseFix',
        links: [
            {
                text: 'Besøk',
                url: 'http://folk.ntnu.no/sveijh/Prosjekt%20WU1/',
            },
            {
                text: 'GitHub',
                url: 'https://github.com/SveinJH/cruisefix',
            },
        ],
    },
    {
        image: nexter,
        title: 'Nexter',
        links: [
            {
                text: 'Besøk',
                url: 'https://nexter.hoie.dev',
            },
            {
                text: 'GitHub',
                url: 'https://github.com/SveinJH/nexter',
            },
        ],
    },
    {
        image: trillo,
        title: 'Trillo',
        links: [
            {
                text: 'Besøk',
                url: 'https://trillo.hoie.dev',
            },
            {
                text: 'GitHub',
                url: 'https://github.com/SveinJH/trillo',
            },
        ],
    },
]

const projects = () => {
    const projectContainers = projectsInfo.map(project => {
        return (
            <div className={classes.Project__container}>
                <div className="heading-5" style={{ fontSize: '2rem' }}>
                    {project.title}
                </div>
                <img
                    className={classes.Project__image}
                    src={project.image}
                    alt=""
                />

                <div className={classes.Project__buttons}>
                    {project.links.map(link => {
                        return <Button text={link.text} link={link.url} />
                    })}
                </div>
            </div>
        )
    })

    return (
        <div className={classes.Projects}>
            <div className="heading-2">Prosjekter</div>
            <div className={classes.Projects__container}>
                {projectContainers}
            </div>
        </div>
    )
}

export default projects
