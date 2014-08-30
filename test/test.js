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
    39.6034810,
    -119.6822510,
    function (err, data) {
        assert.ok(data);
        assert.equal(data.status, 'OK');
        assert.equal(data.timeZoneId, 'America/Los_Angeles');
        assert.equal(data.timeZoneName, 'Hora de verano del Pacífico');
    },
    { language: 'es' }
);