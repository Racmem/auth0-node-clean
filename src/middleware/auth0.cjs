const jwt = require('express-jwt')
const jwKsRsa = require('jwks-rsa')
const jwtAuthz = require('express-jwt-authz')
const { messages } = require('auth0-node-clean/constants')

const checkJwt = jwt({
  secret: jwKsRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: [`https://${process.env.AUTH0_DOMAIN}/`],
  algorithms: ['RS256'],
})

const checkScopes = jwtAuthz(['read:users'])

const errorMessage = (err, req, res, next) => {
  if (err.status === 401) {
    res.status(err.status).json({ message: messages.unauthorizedError })
  }
}

module.exports = {
  checkJwt,
  checkScopes,
  errorMessage,
}
