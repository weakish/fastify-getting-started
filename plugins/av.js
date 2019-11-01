'use strict'

const fp = require('fastify-plugin')
const AV = require('leanengine');

module.exports = fp(function (fastify, opts, next) {
  fastify.use(AV.express());
  next()
})

// If you prefer async/await, use the following
//
// module.exports = fp(async function (fastify, opts) {
//   fastify.decorate('someSupport', function () {
//     return 'hugs'
//   })
// })
