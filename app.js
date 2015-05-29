
/**
 * Module dependencies
 */

var WPCOM = require('wpcom');
var oauth = require('wpcom-oauth-cors')('41012', { scope: "global" });

oauth.get(function(token){
  console.log(token);

  // Create wpcom instance given the token
  var wpcom = WPCOM(token.access_token);

  // expose wpcom globally to test
  window.wpcom = wpcom;
});

document.getElementById('reset').onclick = function(e) {
  oauth.clean();
};
