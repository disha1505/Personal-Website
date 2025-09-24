function requestIpMiddleware(req, _res, next) {
  const forwardedFor = req.headers['x-forwarded-for'];
  const ip = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : (forwardedFor || req.socket?.remoteAddress || '').split(',')[0].trim();
  req.requestIp = ip || '0.0.0.0';
  next();
}

module.exports = { requestIpMiddleware };


