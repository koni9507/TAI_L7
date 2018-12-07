const routes = function (router, config)
{
  categoryEndpoint(router);
  productEndpoint(router);
  userEndpoint(router);
};

export default routes;
