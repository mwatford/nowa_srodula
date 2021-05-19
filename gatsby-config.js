const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Nowa Środula`,
    description: `"Nowa Środula to 384 pięknych mieszkań w świetnej lokalizacji. Nowoczesna technologia. Spiesz się aby wybrać najlepsze mieszkanie dla Siebie. Skontaktuj się już dzisiaj."`,
    author: `mw`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nowa Środula`,
        start_url: `/`,
        theme_color: `#16f47f`,
        display: `minimal-ui`,
        icon: `static/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 300,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/api`,
        name: "api",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static`,
        name: "static",
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "133886408668567",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-BZH4WC9CKX", "AW-392310836"],
      },
      gtagConfig: {
        optimize_id: "OPT_COINTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      pluginConfig: {
        head: true,
        respectDNT: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
