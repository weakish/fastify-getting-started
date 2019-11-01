'use strict'

const AV = require('leanengine');

module.exports = function (fastify, opts, next) {
  fastify.get('/todos', function (request, reply) {
    const Todo = AV.Object.extend('Todo');
    const query = new AV.Query(Todo);
    query.descending('createdAt');
    query.find().then(function(results) {
      reply.send(results);
    }, function(err) {
      if (err.code === 101) { // class or object does not exist
        reply.send({});
      } else {
        next(err);
      }
    });
  });

  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }
