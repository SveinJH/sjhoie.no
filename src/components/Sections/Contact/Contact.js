import React from 'react'

import classes from './Contact.module.scss'
import Icons from '../../../images/sprites.svg'
import Icon from '../../UI/Icon/Icon'

const contactIcons = [
    {
        name: 'github',
        href: 'https://github.com/sveinjh',
    },
    {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/sveinjakobhoie/',
    },
]

const contact = () => {
    return (
        <div className={classes.Contact}>
            <div className="heading-1" style={{ color: '#333' }}>
                Kontakt meg
            </div>
            <p className={classes.Contact__info}>
                Har du spørsmål eller vil komme i kontakt med meg er det bare å
                sende meg en e-post! Du finner meg også på{' '}
                <span
                    style={{
                        color: '#fca709',
                        fontStyle: 'italic',
                        fontWeight: '600',
                    }}
                >
                    GitHub
                </span>{' '}
                og{' '}
                <span
                    style={{
                        color: '#fca709',
                        fontStyle: 'italic',
                        fontWeight: '600',
                    }}
                >
                    LinkedIn
                </span>
            </p>
            <div className={classes.Contact__email}>
                <a href="mailto:sveinjakob@hoie.dev">sveinjakob@hoie.dev</a>
            </div>
            <div className={classes.Contact__icons}>
                {contactIcons.map(contactIcon => {
                    return (
                        <div className={classes.Contact__icon}>
                            <a
                                target="_blank"
                                href={contactIcon.href}
                                rel="noopener noreferrer"
                            >
                                <Icon
                                    name={contactIcon.name}
                                    size={64}
                                    icons={Icons}
                                />
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default contact
