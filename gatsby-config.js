/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
      {
        resolve: `gatsby-remark-images`,
        options: {
            maxWidth: 605,
          },
      },
      {
        resolve: `gatsby-remark-vscode`,
        options: {
            theme: 'Default Dark+',
              inlineCode: {
              marker: '•',
              theme: {
                default: 'Default Light+',
                dark: 'Default Dark+'
              }
            }
        }
      }
      ],
    },
  },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/contents/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/contents/projects`,
      },
    },
  ],
  siteMetadata: {
    title: 'Alfin Aditya',
    description: 'Hi i’m Alfin👏 i’m a Web Developer',
    image: 'src/contents/assets/logo.png',
    url: 'https://www.alfinaditya.com',
  },
};
