const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    proxy('/qpi', {
      target: 'http://localhost:3033',
      pathRewrite: {
        '^/qpi': '/',
      },
    }),
  );
};
