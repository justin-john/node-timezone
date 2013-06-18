node-timezone
=============

Node.js client library for accessing [Google Time Zone API](https://developers.google.com/maps/documentation/timezone). It provides time offset data for locations on the surface of the earth. Requesting the time zone information for a specific Latitude/Longitude pair will return the name of that time zone, the time offset from UTC, and the Daylight Savings offset.

## Installation

```bash
$ npm install timezoner 
```

## Usage

```js
    var timezoner = require('timezoner');
    timezoner.getTimeZone(
                    39.6034810, // Latitude coordinate
                    -119.6822510, // Longitude coordinate
                    function (err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(data);
                        }
                    }
                );

```
#####Response data:  
    {
	   "dstOffset" : 0.0,
	   "rawOffset" : -28800.0,
	   "status" : "OK",
	   "timeZoneId" : "America/Los_Angeles",
	   "timeZoneName" : "Pacific Standard Time"
	}

More details can be found on docs of [Google TimeZone API](https://developers.google.com/maps/documentation/timezone).

## License

(c) 2013 Justin John Mathews <justinjohnmathews@gmail.com>, MIT license.


