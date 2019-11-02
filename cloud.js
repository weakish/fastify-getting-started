const AV = require('leanengine');

AV.Cloud.define('hello', function(request) {
    return 'Hello world!';
});