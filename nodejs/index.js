
/**
 * Module dependencies
 */

var WPCOM = require('wpcom');

/**
 * Create wpcom instance
 */

var wpcom = WPCOM();

/**
 * Create Site instance for Buenos Aires
 * WordCamp 2015.
 */

var site = wpcom.site('buenosaires.wordcamp.org/2015');

// Get site info
site.get(function(err, data) {
  console.log(err);
  console.log(data);
});

