module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "frontend-basic-2022-textbook",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-typegen",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "textbook",
        path: `${__dirname}/textbook`,
      },
    },
  ],
};
