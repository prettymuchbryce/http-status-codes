# http-status-codes

Constants enumerating the HTTP status codes. Based on the [Java Apache HttpStatus API](http://hc.apache.org/httpclient-3.x/apidocs/org/apache/commons/httpclient/HttpStatus.html).

All status codes defined in RFC1945 (HTTP/1.0), RFC2616 (HTTP/1.1), RFC2518 (WebDAV) and RFC6585 (Additional HTTP Status Codes) are supported.

## Installation

```console
npm install http-status-codes
```

## Usage (express 4.x)

```javascript
var HttpStatus = require('http-status-codes');

response
	.status(HttpStatus.OK)
	.send('ok');

response
	.status(HttpStatus.INTERNAL_SERVER_ERROR)
	.send({
		error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
	});
```
