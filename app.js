
/**
 * Module dependencies
 */

var WPCOM = require('wpcom');
var oauth = require('wpcom-oauth-cors')('41012', { scope: global });

oauth.get(function(token){
  console.log(token);
});

document.getElementById('reset').onclick = function(e) {
  oauth.clean();
};
