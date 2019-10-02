/**
 * Constants enumerating the HTTP status codes.
 *
 * All status codes defined in RFC1945 (HTTP/1.0, RFC2616 (HTTP/1.1),
 * RFC2518 (WebDAV), RFC6585 (Additional HTTP Status Codes), and
 * RFC7538 (Permanent Redirect) are supported.
 *
 * Based on the org.apache.commons.httpclient.HttpStatus Java API.
 *
 * Ported by Bryce Neal.
 */

var statusCodes = {};
var codes = {};

statusCodes[exports.ACCEPTED = 202] = "Accepted";
statusCodes[exports.BAD_GATEWAY = 502] = "Bad Gateway";
statusCodes[exports.BAD_REQUEST = 400] = "Bad Request";
statusCodes[exports.CONFLICT = 409] = "Conflict";
statusCodes[exports.CONTINUE = 100] = "Continue";
statusCodes[exports.CREATED = 201] = "Created";
statusCodes[exports.EXPECTATION_FAILED = 417] = "Expectation Failed";
statusCodes[exports.FAILED_DEPENDENCY  = 424] = "Failed Dependency";
statusCodes[exports.FORBIDDEN = 403] = "Forbidden";
statusCodes[exports.GATEWAY_TIMEOUT = 504] = "Gateway Timeout";
statusCodes[exports.GONE = 410] = "Gone";
statusCodes[exports.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP Version Not Supported";
statusCodes[exports.IM_A_TEAPOT = 418] = "I'm a teapot";
statusCodes[exports.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "Insufficient Space on Resource";
statusCodes[exports.INSUFFICIENT_STORAGE = 507] = "Insufficient Storage";
statusCodes[exports.INTERNAL_SERVER_ERROR = 500] = "Server Error";
statusCodes[exports.LENGTH_REQUIRED = 411] = "Length Required";
statusCodes[exports.LOCKED = 423] = "Locked";
statusCodes[exports.METHOD_FAILURE = 420] = "Method Failure";
statusCodes[exports.METHOD_NOT_ALLOWED = 405] = "Method Not Allowed";
statusCodes[exports.MOVED_PERMANENTLY = 301] = "Moved Permanently";
statusCodes[exports.MOVED_TEMPORARILY = 302] = "Moved Temporarily";
statusCodes[exports.MULTI_STATUS = 207] = "Multi-Status";
statusCodes[exports.MULTIPLE_CHOICES = 300] = "Multiple Choices";
statusCodes[exports.NETWORK_AUTHENTICATION_REQUIRED = 511] = "Network Authentication Required";
statusCodes[exports.NO_CONTENT = 204] = "No Content";
statusCodes[exports.NON_AUTHORITATIVE_INFORMATION = 203] = "Non Authoritative Information";
statusCodes[exports.NOT_ACCEPTABLE = 406] = "Not Acceptable";
statusCodes[exports.NOT_FOUND = 404] = "Not Found";
statusCodes[exports.NOT_IMPLEMENTED = 501] = "Not Implemented";
statusCodes[exports.NOT_MODIFIED = 304] = "Not Modified";
statusCodes[exports.OK = 200] = "OK";
statusCodes[exports.PARTIAL_CONTENT = 206] = "Partial Content";
statusCodes[exports.PAYMENT_REQUIRED = 402] = "Payment Required";
statusCodes[exports.PERMANENT_REDIRECT = 308] = "Permanent Redirect";
statusCodes[exports.PRECONDITION_FAILED = 412] = "Precondition Failed";
statusCodes[exports.PRECONDITION_REQUIRED = 428] = "Precondition Required";
statusCodes[exports.PROCESSING = 102] = "Processing";
statusCodes[exports.PROXY_AUTHENTICATION_REQUIRED = 407] = "Proxy Authentication Required";
statusCodes[exports.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "Request Header Fields Too Large";
statusCodes[exports.REQUEST_TIMEOUT = 408] = "Request Timeout";
statusCodes[exports.REQUEST_TOO_LONG = 413] = "Request Entity Too Large";
statusCodes[exports.REQUEST_URI_TOO_LONG = 414] = "Request-URI Too Long";
statusCodes[exports.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "Requested Range Not Satisfiable";
statusCodes[exports.RESET_CONTENT = 205] = "Reset Content";
statusCodes[exports.SEE_OTHER = 303] = "See Other";
statusCodes[exports.SERVICE_UNAVAILABLE = 503] = "Service Unavailable";
statusCodes[exports.SWITCHING_PROTOCOLS = 101] = "Switching Protocols";
statusCodes[exports.TEMPORARY_REDIRECT = 307] = "Temporary Redirect";
statusCodes[exports.TOO_MANY_REQUESTS = 429] = "Too Many Requests";
statusCodes[exports.UNAUTHORIZED = 401] = "Unauthorized";
statusCodes[exports.UNPROCESSABLE_ENTITY = 422] = "Unprocessable Entity";
statusCodes[exports.UNSUPPORTED_MEDIA_TYPE = 415] = "Unsupported Media Type";
statusCodes[exports.USE_PROXY = 305] = "Use Proxy";

codes[exports.ACCEPTED] = "ACCEPTED";
codes[exports.BAD_GATEWAY] = "BAD_GATEWAY";
codes[exports.BAD_REQUEST] = "BAD_REQUEST";
codes[exports.CONFLICT] = "CONFLICT";
codes[exports.CONTINUE] = "CONTINUE";
codes[exports.CREATED] = "CREATED";
codes[exports.EXPECTATION_FAILED] = "EXPECTATION_FAILED";
codes[exports.FAILED_DEPENDENCY4] = "FAILED_DEPENDENCY";
codes[exports.FORBIDDEN] = "FORBIDDEN";
codes[exports.GATEWAY_TIMEOUT] = "GATEWAY_TIMEOUT";
codes[exports.GONE] = "GONE";
codes[exports.HTTP_VERSION_NOT_SUPPORTED] = "HTTP_VERSION_NOT_SUPPORTED";
codes[exports.IM_A_TEAPOT] = "IM_A_TEAPOT";
codes[exports.INSUFFICIENT_SPACE_ON_RESOURCE] = "INSUFFICIENT_SPACE_ON_RESOURCE";
codes[exports.INSUFFICIENT_STORAGE] = "INSUFFICIENT_STORAGE";
codes[exports.INTERNAL_SERVER_ERROR] = "INTERNAL_SERVER_ERROR";
codes[exports.LENGTH_REQUIRED] = "LENGTH_REQUIRED";
codes[exports.LOCKED] = "LOCKED";
codes[exports.METHOD_FAILURE] = "METHOD_FAILURE";
codes[exports.METHOD_NOT_ALLOWED] = "METHOD_NOT_ALLOWED";
codes[exports.MOVED_PERMANENTLY] = "MOVED_PERMANENTLY";
codes[exports.MOVED_TEMPORARILY] = "MOVED_TEMPORARILY";
codes[exports.MULTI_STATUS] = "MULTI_STATUS";
codes[exports.MULTIPLE_CHOICES] = "MULTIPLE_CHOICES";
codes[exports.NETWORK_AUTHENTICATION_REQUIRED] = "NETWORK_AUTHENTICATION_REQUIRED";
codes[exports.NO_CONTENT] = "NO_CONTENT";
codes[exports.NON_AUTHORITATIVE_INFORMATION] = "NON_AUTHORITATIVE_INFORMATION";
codes[exports.NOT_ACCEPTABLE] = "NOT_ACCEPTABLE";
codes[exports.NOT_FOUND] = "NOT_FOUND";
codes[exports.NOT_IMPLEMENTED] = "NOT_IMPLEMENTED";
codes[exports.NOT_MODIFIED] = "NOT_MODIFIED";
codes[exports.OK] = "OK";
codes[exports.PARTIAL_CONTENT] = "PARTIAL_CONTENT";
codes[exports.PAYMENT_REQUIRED] = "PAYMENT_REQUIRED";
codes[exports.PERMANENT_REDIRECT] = "PERMANENT_REDIRECT";
codes[exports.PRECONDITION_FAILED] = "PRECONDITION_FAILED";
codes[exports.PRECONDITION_REQUIRED] = "PRECONDITION_REQUIRED";
codes[exports.PROCESSING] = "PROCESSING";
codes[exports.PROXY_AUTHENTICATION_REQUIRED] = "PROXY_AUTHENTICATION_REQUIRED";
codes[exports.REQUEST_HEADER_FIELDS_TOO_LARGE] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
codes[exports.REQUEST_TIMEOUT] = "REQUEST_TIMEOUT";
codes[exports.REQUEST_TOO_LONG] = "REQUEST_TOO_LONG";
codes[exports.REQUEST_URI_TOO_LONG] = "REQUEST_URI_TOO_LONG";
codes[exports.REQUESTED_RANGE_NOT_SATISFIABLE] = "REQUESTED_RANGE_NOT_SATISFIABLE";
codes[exports.RESET_CONTENT] = "RESET_CONTENT";
codes[exports.SEE_OTHER] = "SEE_OTHER";
codes[exports.SERVICE_UNAVAILABLE] = "SERVICE_UNAVAILABLE";
codes[exports.SWITCHING_PROTOCOLS] = "SWITCHING_PROTOCOLS";
codes[exports.TEMPORARY_REDIRECT] = "TEMPORARY_REDIRECT";
codes[exports.TOO_MANY_REQUESTS] = "TOO_MANY_REQUESTS";
codes[exports.UNAUTHORIZED] = "UNAUTHORIZED";
codes[exports.UNPROCESSABLE_ENTITY] = "UNPROCESSABLE_ENTITY";
codes[exports.UNSUPPORTED_MEDIA_TYPE] = "UNSUPPORTED_MEDIA_TYPE";
codes[exports.USE_PROXY] = "USE_PROXY";

exports.getStatusCode = function (statusCode) {
  if (codes.hasOwnProperty(statusCode)) {
    return codes[statusCode];
  } else {
    throw new Error("Status code does not exist: " + statusCode);
  }
};

exports.getStatusText = function(statusCode) {
  if (statusCodes.hasOwnProperty(statusCode)) {
    return statusCodes[statusCode];
  } else {
    throw new Error("Status code does not exist: " + statusCode);
  }
};
