module.exports = {
  pathPrefix: `/frontend-basic-2022-textbook`,
  siteMetadata: {
    siteUrl: "http://shinonome.io/frontend-basic-2022-textbook/",
    title: "frontend-basic-2022-textbook",
    exampleCommitHash: "cc79122",
    exampleChromaticAppId: "611bf05d266fc6003c453c3a",
    figmaIdAndFilename: "UXNBffUMdW2mO8wLctV3mJ/frontend_basic_2022_todo",
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
