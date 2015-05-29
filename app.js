
/**
 * Module dependencies
 */

var WPCOM = require('wpcom');
var oauth = require('wpcom-oauth-cors')('41012', { scope: "global" });

oauth.get(function(data){
  document.getElementById('token').innerHTML = data.access_token;

  // Create wpcom instance given the token
  var wpcom = WPCOM(data.access_token);

  // expose wpcom globaly to test in console
  window.wpcom = wpcom;
});

document.getElementById('reset').onclick = function(e) {
  oauth.clean();
};
