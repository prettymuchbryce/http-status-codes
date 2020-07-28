# http-status-codes

Constants enumerating the HTTP status codes. Based on the [Java Apache HttpStatus API](http://hc.apache.org/httpclient-3.x/apidocs/org/apache/commons/httpclient/HttpStatus.html).

All status codes defined in RFC1945 (HTTP/1.0), RFC2616 (HTTP/1.1), RFC2518 (WebDAV), RFC6585 (Additional HTTP Status Codes), and RFC7538 (Permanent Redirect) are supported.

Completely library agnostic. No dependencies.

## Installation

```console
npm install http-status-codes --save
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

response
	.status(HttpStatus.getStatusCode('Server Error'))
	.send({
		error: 'Server Error'
	});
```

## Codes

Code  | Constant                            | Status Text
------|-------------------------------------|-----------------------------------
100   | CONTINUE                            | Continue
101   | SWITCHING_PROTOCOLS                 | Switching Protocols
102   | PROCESSING                          | Processing
200   | OK                                  | OK
201   | CREATED                             | Created
202   | ACCEPTED                            | Accepted
203   | NON_AUTHORITATIVE_INFORMATION       | Non Authoritative Information
204   | NO_CONTENT                          | No Content
205   | RESET_CONTENT                       | Reset Content
206   | PARTIAL_CONTENT                     | Partial Content
207   | MULTI_STATUS                        | Multi-Status
300   | MULTIPLE_CHOICES                    | Multiple Choices
301   | MOVED_PERMANENTLY                   | Moved Permanently
302   | MOVED_TEMPORARILY                   | Moved Temporarily
303   | SEE_OTHER                           | See Other
304   | NOT_MODIFIED                        | Not Modified
305   | USE_PROXY                           | Use Proxy
307   | TEMPORARY_REDIRECT                  | Temporary Redirect
308   | PERMANENT_REDIRECT                  | Permanent Redirect
400   | BAD_REQUEST                         | Bad Request
401   | UNAUTHORIZED                        | Unauthorized
402   | PAYMENT_REQUIRED                    | Payment Required
403   | FORBIDDEN                           | Forbidden
404   | NOT_FOUND                           | Not Found
405   | METHOD_NOT_ALLOWED                  | Method Not Allowed
406   | NOT_ACCEPTABLE                      | Not Acceptable
407   | PROXY_AUTHENTICATION_REQUIRED       | Proxy Authentication Required
408   | REQUEST_TIMEOUT                     | Request Timeout
409   | CONFLICT                            | Conflict
410   | GONE                                | Gone
411   | LENGTH_REQUIRED                     | Length Required
412   | PRECONDITION_FAILED                 | Precondition Failed
413   | REQUEST_TOO_LONG                    | Request Entity Too Large
414   | REQUEST_URI_TOO_LONG                | Request-URI Too Long
415   | UNSUPPORTED_MEDIA_TYPE              | Unsupported Media Type
416   | REQUESTED_RANGE_NOT_SATISFIABLE     | Requested Range Not Satisfiable
417   | EXPECTATION_FAILED                  | Expectation Failed
418   | IM_A_TEAPOT                         | I'm a teapot
419   | INSUFFICIENT_SPACE_ON_RESOURCE      | Insufficient Space on Resource
420   | METHOD_FAILURE                      | Method Failure
422   | UNPROCESSABLE_ENTITY                | Unprocessable Entity
423   | LOCKED                              | Locked
424   | FAILED_DEPENDENCY                   | Failed Dependency
428   | PRECONDITION_REQUIRED               | Precondition Required
429   | TOO_MANY_REQUESTS                   | Too Many Requests
431   | REQUEST_HEADER_FIELDS_TOO_LARGE     | Request Header Fields Too Large
451   | UNAVAILABLE_FOR_LEGAL_REASONS       | Unavailable For Legal Reasons
500   | INTERNAL_SERVER_ERROR               | Server Error
501   | NOT_IMPLEMENTED                     | Not Implemented
502   | BAD_GATEWAY                         | Bad Gateway
503   | SERVICE_UNAVAILABLE                 | Service Unavailable
504   | GATEWAY_TIMEOUT                     | Gateway Timeout
505   | HTTP_VERSION_NOT_SUPPORTED          | HTTP Version Not Supported
507   | INSUFFICIENT_STORAGE                | Insufficient Storage
511   | NETWORK_AUTHENTICATION_REQUIRED     | Network Authentication Required

## TypeScript

There is an included definition file that adds rules for use, comments, and links to official documentation.

### Usage

Option 1: Full import of package

```typescript
import * as HttpStatus from 'http-status-codes'

response
	.status(HttpStatus.OK)
	.send('ok')

response
	.status(HttpStatus.INTERNAL_SERVER_ERROR)
	.send({
		error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
	})

response
	.status(HttpStatus.getStatusCode('Server Error'))
	.send({
		error: 'Server Error'
	})
```

Option 2: Selective import

```typescript
import { OK, getStatusText, getStatusCode } from 'http-status-codes'

response
	.status(OK)
	.send(getStatusText(OK))

response
	.status(getStatusCode('Server Error')
	.send('Server Error')
```
