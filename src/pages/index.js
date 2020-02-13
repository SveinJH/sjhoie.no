import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'
import Main from '../components/UI/Main/Main'
import SideDrawer from '../components/UI/SideDrawer/SideDrawer'

const IndexPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Svein Jakob Høie</title>
            </Helmet>
            <Layout>
                <SideDrawer>SIDEDRAWER</SideDrawer>
                <Main>MAIN</Main>
            </Layout>
        </>
    )
}

export default IndexPage
