const notFoundMiddleware = (req, res) => {
  res.status(404).json(`Page not Found`);
};

module.exports = notFoundMiddleware;
