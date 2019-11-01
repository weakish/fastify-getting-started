'use strict'

const Fastify = require('fastify')
const AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});
AV.Cloud.useMasterKey();

const app = Fastify({
    logger: true,
    pluginTimeout: 10000
})

app.register(require('./app.js'))

app.listen(process.env.LEANCLOUD_APP_PORT || 3000, '0.0.0.0', (err) => {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
})