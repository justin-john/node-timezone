node-timezone
=============

Node.js client library for accessing [Google Time Zone API](https://developers.google.com/maps/documentation/timezone).

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


