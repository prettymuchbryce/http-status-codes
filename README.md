http-status-codes
=================

Constants enumerating the HTTP status codes. Based on the [Java Apache HttpStatus API](http://hc.apache.org/httpclient-3.x/apidocs/org/apache/commons/httpclient/HttpStatus.html).



All status codes defined in RFC1945 (HTTP/1.0, RFC2616 (HTTP/1.1), and RFC2518 (WebDAV) are supported.

####Installation

	npm install http-status-codes
	
####Usage

	HttpStatus = require('httpstatus');

	response.send(HttpStatus.OK);
	response.send(
		HttpStatus.INTERNAL_SERVER_ERROR, 
		{ error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR) }
	);
