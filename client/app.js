
/**
 * Module dependencies
 */

var WPCOM = require('wpcom');
var oauth = require('wpcom-oauth-cors')('41012');


oauth.get(function(token){
  console.log(token);
});
