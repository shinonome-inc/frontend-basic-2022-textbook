module.exports = {
  pathPrefix: `/frontend-basic-2022-textbook`,
  siteMetadata: {
    siteUrl: "http://shinonome.io/frontend-basic-2022-textbook/",
    title: "frontend-basic-2022-textbook",
    figmaIdAndFilename: "UXNBffUMdW2mO8wLctV3mJ/frontend_basic_2022_todo",
  },
  plugins: [
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
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "textbook",
        path: `${__dirname}/textbook`,
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
