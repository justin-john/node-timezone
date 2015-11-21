/**
 * Timezoner
 */

var Timezone = function () {

    /**
     * Module Dependencies
     */

    var https = require('https'),
        querystring = require('querystring'),

        /**
         * Merge Objects
         *
         * @param {Object} existedObj, required
         * @param {Object} passedObj, required
         * @api private
         */
        mergeObjects = function (existedObj, passedObj) {
            var mergedObj = {};
            for (var key in existedObj) { mergedObj[key] = existedObj[key]; }
            for (var key in passedObj) { mergedObj[key] = passedObj[key]; }
            return mergedObj;
        },

	/**
         * Check coordinates are numbers
         *
         * @param {String} number, required
         * @api private
         */
	isNumber = function (n) {
	    return !isNaN(parseFloat(n)) && isFinite(n);
	},

        /**
         * Makes request to Google Time Zone API and passes result to a callback
         *
         * @param {Object} options, required
         * @param {Function} cb, required
         * @api private
         */
        request = function (options, cb) {
            var body = '';
            https
                .get(options, function (res) {
                    res.on('data', function (chunk) {
                        body += chunk;
                    }).on('error', function(e) {
                        return cb(e);
                    }).on('end', function() {
                        try {
                            body = JSON.parse(body);
                            if ( body.status === "OK" ) {
	                        cb(null, body);
                            } else {
                            	cb(new Error("Invalid data returned"));
                            }
                        } catch (ex) {
                            cb(ex);
                        }
                    });
                })
                .on('error', function (e) {
                    return cb(e);
                });
        },

        /**
         * Request timezone with given location coordinates from Google
         *
         * @param {String} lat, required
         * @param {String} lng, required
         * @param {Function} cb, required
         * @param {Object} options, optional
         * @api public
         */
        getTimeZone = function (lat, lng, cb, opts) {
            if (!isNumber(lat) || !isNumber(lng)) {
                return cb(new Error("Timezoner requires valid latitude and longitude coordinates."));
            }
            var timestamp = Math.round((new Date()).getTime() / 1000),
                options = { location: lat + ',' + lng, timestamp: timestamp },
                params;
            if (opts) {
                options = mergeObjects(options, opts);
            }
            params = {
                hostname: 'maps.googleapis.com',
                port: 443,
                path: '/maps/api/timezone/json?' + querystring.stringify(options)
            };
            return request(params, cb);
        };

    return {
        getTimeZone: getTimeZone
    };

}();

/**
 * Export
 */
module.exports = Timezone;
