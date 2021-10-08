module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "frontend-basic-2022-textbook",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "textbook",
        path: `${__dirname}/textbook`,
      },
    },
    "gatsby-plugin-typegen",
  ],
};
