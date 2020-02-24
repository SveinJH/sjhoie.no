import React from 'react'

import classes from './Projects.module.scss'
import Button from '../../UI/Button/Button'

const projectsInfo = [
    {
        image: '../../../../project-0.jpg',
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
        image: '../../../../project-2.jpg',
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
        image: '../../../../project-1.jpg',
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
        image: '../../../../project-3.jpg',
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

const Projects = props => {
    const projectContainers = projectsInfo.map(project => {
        return (
            <div key={project.title} className={classes.Project__container}>
                <div className="heading-5" style={{ fontSize: '2rem' }}>
                    {project.title}
                </div>
                <img
                    className={classes.Project__image}
                    src={project.image}
                    alt=""
                />

                <div className={classes.Project__buttons}>
                    {project.links.map((link, i) => {
                        return (
                            <Button key={i} text={link.text} link={link.url} />
                        )
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

export default Projects
