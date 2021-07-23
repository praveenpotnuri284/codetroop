module.exports = {
  siteMetadata: {
    title: `CodeTroop by PraveenPotnuri`,
    name: `Praveen Potnuri`,
   
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/praveenpotnuri284`
      },
      {
        name: `twitter`,
        url: `https://github.com/praveenpotnuri284`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/codeblock"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
