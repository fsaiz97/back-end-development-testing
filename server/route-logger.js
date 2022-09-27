function logRoute(req, res) {
    console.log(req.method, req.originalUrl)

    next();
}

module.exports = logRoute;
