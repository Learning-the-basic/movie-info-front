
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/v1/search/movie.json', {
      target: 'https://openapi.naver.com',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json', {
      target: 'https://kobis.or.kr',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/openapi-data2/wisenut/search_api/search_json2.jsp', {
      target: 'http://api.koreafilm.or.kr',
      changeOrigin: true,
    }),
  );
}