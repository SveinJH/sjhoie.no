import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'
import Main from '../components/UI/Main/Main'
import SideDrawer from '../components/UI/SideDrawer/SideDrawer'
import SideDrawerMobile from '../components/UI/SideDrawer/SideDrawerMobile'

const IndexPage = () => {
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const toggleSideDrawer = () => {
        setShowSideDrawer(!showSideDrawer)
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Svein Jakob Høie</title>
            </Helmet>
            <Layout>
                <SideDrawerMobile
                    show={showSideDrawer}
                    clicked={toggleSideDrawer}
                />
                <SideDrawer />
                <Main />
            </Layout>
        </>
    )
}

export default IndexPage
