import React from 'react'

import classes from './Projects.module.scss'

const projectsInfo = []

const projects = () => {
    const projectContainers = projectsInfo.map(project => {
        return (
            <div className={classes.Projects__container}>
                <div
                    className={[
                        classes.Projects__side,
                        classes.Projects__side_front,
                    ].join(' ')}
                >
                    <div className="heading-5">{project.name}</div>
                </div>
                <div
                    className={[
                        classes.Projects__side,
                        classes.Projects__side_back,
                    ].join(' ')}
                >
                    {project.description}
                </div>
            </div>
        )
    })

    return (
        <div className={classes.Projects}>
            <div className="heading-2">Prosjekter</div>
            <div className={classes.Projects__containers}>
                {projectContainers}
            </div>
        </div>
    )
}

export default projects
