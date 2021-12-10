const path = require('path');

module.exports = {
  // webpack: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src/'),
  //     '@apis': path.resolve(__dirname, 'src/apis'),
  //   }
  // },
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