function logRoute(req, ers) {
    console.log(req.method, req.originalUrl)

    next();
}

module.exports = logRoute;
