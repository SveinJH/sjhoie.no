import React from 'react'
import DescriptionItem from './DescriptionItem/DescriptionItem'

import Icons from '../../../images/sprites.svg'

import classes from './DescriptionItems.module.scss'
const items = [
    {
        info: 'Svein Jakob Høie',
        name: 'user',
    },
    {
        info: 'sveinjakob@hoie.dev',
        name: 'mail',
    },
    {
        info: '94 141 907',
        name: 'phone',
    },
    {
        info: 'Trondheim',
        name: 'map-pin',
    },
    {
        info: 'www.hoie.dev',
        name: 'link',
    },
    {
        info: 'SveinJH',
        name: 'github',
    },
]

const descriptionItems = () => {
    const descItems = items.map(item => {
        return (
            <DescriptionItem
                key={item.name}
                info={item.info}
                name={item.name}
                icons={Icons}
                size={28}
            />
        )
    })

    return <div className={classes.DescriptionItems}>{descItems}</div>
}

export default descriptionItems
