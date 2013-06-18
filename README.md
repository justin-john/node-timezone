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
                    latitude, // Latitude coordinate
                    longitude, // Longitude coordinate
                    function (err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(data);
                        }
                    }
                );
```
More details can be found on docs of [Google TimeZone API](https://developers.google.com/maps/documentation/timezone).

## License

(c) 2013 Justin John Mathews<justinjohnmathews@gmail.com>, MIT license.


