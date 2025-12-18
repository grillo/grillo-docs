// Plugin to suppress Windows path casing warnings in webpack
// These warnings are harmless and occur due to case-insensitive Windows paths

module.exports = function () {
  return {
    name: 'suppress-casing-warnings',
    configureWebpack() {
      return {
        ignoreWarnings: [
          {
            message: /only differ in casing/,
          },
        ],
      };
    },
  };
};
