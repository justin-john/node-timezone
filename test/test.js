var assert = require('assert'),
    timezoner = require('../lib/timezone');

timezoner.getTimeZone(
    39.6034810, 
    -119.6822510, 
    function (err, data) {
        assert.ok(data);
        assert.equal(data.status, 'OK');
        assert.equal(data.timeZoneId, 'America/Los_Angeles');
    }
);
/* Results will return in SPANISH */
timezoner.getTimeZone(
    9.9312,
    76.2673,
    function (err, data) {
        assert.ok(data);
        assert.equal(data.status, 'OK');
        assert.equal(data.timeZoneId, 'Asia/Calcutta');
        assert.equal(data.timeZoneName, 'hora estándar de la India');
    },
    { language: 'es' }
);