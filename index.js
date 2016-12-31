/**
 * Constants enumerating the HTTP status codes.
 *
 * All status codes defined in RFC1945 (HTTP/1.0, RFC2616 (HTTP/1.1),
 * and RFC2518 (WebDAV) are supported.
 *
 * Based on the org.apache.commons.httpclient.HttpStatus Java API.
 *
 * Ported by Bryce Neal.
 */

var statusCodes = function( statusCode ) {
  if (statusCodes.hasOwnProperty(statusCode)) {
    return statusCodes[statusCode];
  } else {
    throw new Error("Status code does not exist: " + statusCode);
  }
};

statusCodes[statusCodes.ACCEPTED = 202] = "Accepted";
statusCodes[statusCodes.BAD_GATEWAY = 502] = "Bad Gateway";
statusCodes[statusCodes.BAD_REQUEST = 400] = "Bad Request";
statusCodes[statusCodes.CONFLICT = 409] = "Conflict";
statusCodes[statusCodes.CONTINUE = 100] = "Continue";
statusCodes[statusCodes.CREATED = 201] = "Created";
statusCodes[statusCodes.EXPECTATION_FAILED = 417] = "Expectation Failed";
statusCodes[statusCodes.FAILED_DEPENDENCY  = 424] = "Failed Dependency";
statusCodes[statusCodes.FORBIDDEN = 403] = "Forbidden";
statusCodes[statusCodes.GATEWAY_TIMEOUT = 504] = "Gateway Timeout";
statusCodes[statusCodes.GONE = 410] = "Gone";
statusCodes[statusCodes.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP Version Not Supported";
statusCodes[statusCodes.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "Insufficient Space on Resource";
statusCodes[statusCodes.INSUFFICIENT_STORAGE = 507] = "Insufficient Storage";
statusCodes[statusCodes.INTERNAL_SERVER_ERROR = 500] = "Server Error";
statusCodes[statusCodes.LENGTH_REQUIRED = 411] = "Length Required";
statusCodes[statusCodes.LOCKED = 423] = "Locked";
statusCodes[statusCodes.METHOD_FAILURE = 420] = "Method Failure";
statusCodes[statusCodes.METHOD_NOT_ALLOWED = 405] = "Method Not Allowed";
statusCodes[statusCodes.MOVED_PERMANENTLY = 301] = "Moved Permanently";
statusCodes[statusCodes.MOVED_TEMPORARILY = 302] = "Moved Temporarily";
statusCodes[statusCodes.MULTI_STATUS = 207] = "Multi-Status";
statusCodes[statusCodes.MULTIPLE_CHOICES = 300] = "Multiple Choices";
statusCodes[statusCodes.NETWORK_AUTHENTICATION_REQUIRED = 511] = "Network Authentication Required";
statusCodes[statusCodes.NO_CONTENT = 204] = "No Content";
statusCodes[statusCodes.NON_AUTHORITATIVE_INFORMATION = 203] = "Non Authoritative Information";
statusCodes[statusCodes.NOT_ACCEPTABLE = 406] = "Not Acceptable";
statusCodes[statusCodes.NOT_FOUND = 404] = "Not Found";
statusCodes[statusCodes.NOT_IMPLEMENTED = 501] = "Not Implemented";
statusCodes[statusCodes.NOT_MODIFIED = 304] = "Not Modified";
statusCodes[statusCodes.OK = 200] = "OK";
statusCodes[statusCodes.PARTIAL_CONTENT = 206] = "Partial Content";
statusCodes[statusCodes.PAYMENT_REQUIRED = 402] = "Payment Required";
statusCodes[statusCodes.PRECONDITION_FAILED = 412] = "Precondition Failed";
statusCodes[statusCodes.PRECONDITION_REQUIRED = 428] = "Precondition Required";
statusCodes[statusCodes.PROCESSING = 102] = "Processing";
statusCodes[statusCodes.PROXY_AUTHENTICATION_REQUIRED = 407] = "Proxy Authentication Required";
statusCodes[statusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "Request Header Fields Too Large";
statusCodes[statusCodes.REQUEST_TIMEOUT = 408] = "Request Timeout";
statusCodes[statusCodes.REQUEST_TOO_LONG = 413] = "Request Entity Too Large";
statusCodes[statusCodes.REQUEST_URI_TOO_LONG = 414] = "Request-URI Too Long";
statusCodes[statusCodes.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "Requested Range Not Satisfiable";
statusCodes[statusCodes.RESET_CONTENT = 205] = "Reset Content";
statusCodes[statusCodes.SEE_OTHER = 303] = "See Other";
statusCodes[statusCodes.SERVICE_UNAVAILABLE = 503] = "Service Unavailable";
statusCodes[statusCodes.SWITCHING_PROTOCOLS = 101] = "Switching Protocols";
statusCodes[statusCodes.TEMPORARY_REDIRECT = 307] = "Temporary Redirect";
statusCodes[statusCodes.TOO_MANY_REQUESTS = 429] = "Too Many Requests";
statusCodes[statusCodes.UNAUTHORIZED = 401] = "Unauthorized";
statusCodes[statusCodes.UNPROCESSABLE_ENTITY = 422] = "Unprocessable Entity";
statusCodes[statusCodes.UNSUPPORTED_MEDIA_TYPE = 415] = "Unsupported Media Type";
statusCodes[statusCodes.USE_PROXY = 305] = "Use Proxy";

exports = statusCodes;
