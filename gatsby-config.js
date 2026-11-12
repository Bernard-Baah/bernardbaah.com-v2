const config = require('./src/config');

// Analytics is off until a GA4 measurement ID (G-XXXXXXXXXX) is supplied at build time.
const gaMeasurementId = process.env.GATSBY_GA_MEASUREMENT_ID;

module.exports = {
  siteMetadata: {
    title: 'Bernard Buabeng Baah',
    description:
      'Bernard Buabeng Baah designs and builds AWS architectures with Terraform. AWS Certified Cloud Practitioner and Data Center Infrastructure Technician at Amazon Web Services.',
    siteUrl: 'https://www.bernardbaah.com', // No trailing slash allowed!
    image: '/og.png', // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Bernard Buabeng Baah',
        short_name: 'Bernard Buabeng Baah',
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    `gatsby-plugin-offline`,
    ...(gaMeasurementId
      ? [
        {
          resolve: `gatsby-plugin-google-gtag`,
          options: {
            trackingIds: [gaMeasurementId],
            gtagConfig: { anonymize_ip: true },
          },
        },
      ]
      : []),
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-images
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
            },
          },
        ],
      },
    },
  ],
};
