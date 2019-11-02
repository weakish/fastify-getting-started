'use strict'

const AV = require('leanengine');
require('./cloud');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});
AV.Cloud.useMasterKey();

const fastify = require('fastify')({
  logger: true
})

fastify.use(AV.express())

fastify.get('/', function (request, reply) {
  reply.send({ root: true })
})

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

fastify.listen(process.env.LEANCLOUD_APP_PORT || 3000, '0.0.0.0', (err) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
})