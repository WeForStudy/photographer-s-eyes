const path = require('path');

module.exports = {
  overrideWebpackConfig: {
    output: {
      path: __dirname + '/dist',
    }
    // alias: {
    //   '@': path.resolve(__dirname, 'src/'),
    //   '@apis': path.resolve(__dirname, 'src/apis'),
    // }
  },
    style: {
      sass: {
        loaderOptions: {
          additionalData: `
            @import "src/styles/variables.scss";
          `,
        },
      },
    },
  };