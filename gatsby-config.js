/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Gatsby blog",
  },
  plugins: [
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "files",
    //     path: `${__dirname}/src/pages`,
    //   },
    // },
    "gatsby-transformer-remark"
  ],
};
