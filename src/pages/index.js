import React from 'react'

import Layout from '../components/Layout/Layout'
import Main from '../components/UI/Main/Main'
import SideDrawer from '../components/UI/SideDrawer/SideDrawer'

const IndexPage = () => {
    return (
        <Layout>
            <SideDrawer>SIDEDRAWER</SideDrawer>
            <Main>MAIN</Main>
        </Layout>
    )
}

export default IndexPage
