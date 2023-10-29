module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        sizeLimit: 100000,
      },
    },
  },
  // "strapi-plugin-populate-deep": {
  //   config: {
  //     defaultDepth: 3, // Default is 5
  //   },
  // },
});
