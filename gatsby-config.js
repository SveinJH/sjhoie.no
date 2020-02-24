module.exports = {
    siteMetadata: {
        title: `Svein Jakob Høie`,
        description: `21 år gammel student med et hjerte for teknologi.`,
        author: `Svein Jakob Høie`,
    },
    plugins: [
        'gatsby-plugin-sass',
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'sveinjakobhoie',
                short_name: 'sjh',
                start_url: '/',
                display: 'minimal-ui',
                icon: 'src/images/S.png',
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
