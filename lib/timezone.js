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
            for (var name in existedObj) { mergedObj[name] = existedObj[attrname]; }
            for (var name in passedObj) { mergedObj[name] = passedObj[attrname]; }
            return mergedObj;
        },

        /**
         * Makes request to Google Time Zone API and passes result to a cb
         *
         * @param {Object} options, required
         * @param {Function} cb, required
         * @api private
         */

            request = function (options, cb) {
            https
                .get(options, function (res) {
                    res.on('data', function (d) {
                        return cb(null, JSON.parse(d));
                    });
                })
                .on('error', function (e) {
                    return cb(e);
                });
        },

        /**
         * Request timezone of given cordinates from Google
         *
         * @param {String} lat, required
         * @param {String} lng, required
         * @param {Function} cb, required
         * @param {Object} options, optional
         * @api public
         */
            getTimeZone = function (lat, lng, cb, opts) {

            if (!lat || !lng) {
                return cb(new Error("Time Zone requires latitude and longitude coordinates."));
            }

            var timestamp = Math.round((new Date()).getTime() / 1000),
                options = {sensor: false, timestamp:timestamp, location:lat+','+lng},
                params;
            if (opts) {
                options = mergeObjects(options, opts);
            }
            params = {
                hostname: 'maps.googleapis.com',
                port: 443,
                path: '/maps/api/timezone/json?' + querystring.stringify(options),
                method: 'GET'
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
