import React from 'react'
import { useTrail, animated, config } from 'react-spring'

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

const DescriptionItems = () => {
    const descriptionItemsTrail = useTrail(items.length, {
        config: config.stiff,
        delay: 400,
        opacity: 1,
        transform: 'translateX(0)',
        from: {
            opacity: 0,
            transform: 'translateX(-4rem)',
        },
    })

    const descItems = descriptionItemsTrail.map((props, i) => {
        return (
            <animated.div key={i} style={props}>
                <DescriptionItem
                    info={items[i].info}
                    name={items[i].name}
                    icons={Icons}
                    size={28}
                />
            </animated.div>
        )
    })

    return <div className={classes.DescriptionItems}>{descItems}</div>
}

export default DescriptionItems
