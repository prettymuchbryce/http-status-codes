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

var codes = {};
var statusCodes = {};
var statusTexts = {};

exports.ACCEPTED = 202
exports.BAD_GATEWAY = 502
exports.BAD_REQUEST = 400
exports.CONFLICT = 409
exports.CONTINUE = 100
exports.CREATED = 201
exports.EXPECTATION_FAILED = 417
exports.FAILED_DEPENDENCY  = 424
exports.FORBIDDEN = 403
exports.GATEWAY_TIMEOUT = 504
exports.GONE = 410
exports.HTTP_VERSION_NOT_SUPPORTED = 505
exports.IM_A_TEAPOT = 418
exports.INSUFFICIENT_SPACE_ON_RESOURCE = 419
exports.INSUFFICIENT_STORAGE = 507
exports.INTERNAL_SERVER_ERROR = 500
exports.LENGTH_REQUIRED = 411
exports.LOCKED = 423
exports.METHOD_FAILURE = 420
exports.METHOD_NOT_ALLOWED = 405
exports.MOVED_PERMANENTLY = 301
exports.MOVED_TEMPORARILY = 302
exports.MULTI_STATUS = 207
exports.MULTIPLE_CHOICES = 300
exports.NETWORK_AUTHENTICATION_REQUIRED = 511
exports.NO_CONTENT = 204
exports.NON_AUTHORITATIVE_INFORMATION = 203
exports.NOT_ACCEPTABLE = 406
exports.NOT_FOUND = 404
exports.NOT_IMPLEMENTED = 501
exports.NOT_MODIFIED = 304
exports.OK = 200
exports.PARTIAL_CONTENT = 206
exports.PAYMENT_REQUIRED = 402
exports.PERMANENT_REDIRECT = 308
exports.PRECONDITION_FAILED = 412
exports.PRECONDITION_REQUIRED = 428
exports.PROCESSING = 102
exports.PROXY_AUTHENTICATION_REQUIRED = 407
exports.REQUEST_HEADER_FIELDS_TOO_LARGE = 431
exports.REQUEST_TIMEOUT = 408
exports.REQUEST_TOO_LONG = 413
exports.REQUEST_URI_TOO_LONG = 414
exports.REQUESTED_RANGE_NOT_SATISFIABLE = 416
exports.RESET_CONTENT = 205
exports.SEE_OTHER = 303
exports.SERVICE_UNAVAILABLE = 503
exports.SWITCHING_PROTOCOLS = 101
exports.TEMPORARY_REDIRECT = 307
exports.TOO_MANY_REQUESTS = 429
exports.UNAUTHORIZED = 401
exports.UNPROCESSABLE_ENTITY = 422
exports.UNSUPPORTED_MEDIA_TYPE = 415
exports.USE_PROXY = 305

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

statusCodes[exports.ACCEPTED] = "Accepted";
statusCodes[exports.BAD_GATEWAY] = "Bad Gateway";
statusCodes[exports.BAD_REQUEST] = "Bad Request";
statusCodes[exports.CONFLICT] = "Conflict";
statusCodes[exports.CONTINUE] = "Continue";
statusCodes[exports.CREATED] = "Created";
statusCodes[exports.EXPECTATION_FAILED] = "Expectation Failed";
statusCodes[exports.FAILED_DEPENDENCY ] = "Failed Dependency";
statusCodes[exports.FORBIDDEN] = "Forbidden";
statusCodes[exports.GATEWAY_TIMEOUT] = "Gateway Timeout";
statusCodes[exports.GONE] = "Gone";
statusCodes[exports.HTTP_VERSION_NOT_SUPPORTED] = "HTTP Version Not Supported";
statusCodes[exports.IM_A_TEAPOT] = "I'm a teapot";
statusCodes[exports.INSUFFICIENT_SPACE_ON_RESOURCE] = "Insufficient Space on Resource";
statusCodes[exports.INSUFFICIENT_STORAGE] = "Insufficient Storage";
statusCodes[exports.INTERNAL_SERVER_ERROR] = "Server Error";
statusCodes[exports.LENGTH_REQUIRED] = "Length Required";
statusCodes[exports.LOCKED] = "Locked";
statusCodes[exports.METHOD_FAILURE] = "Method Failure";
statusCodes[exports.METHOD_NOT_ALLOWED] = "Method Not Allowed";
statusCodes[exports.MOVED_PERMANENTLY] = "Moved Permanently";
statusCodes[exports.MOVED_TEMPORARILY] = "Moved Temporarily";
statusCodes[exports.MULTI_STATUS] = "Multi-Status";
statusCodes[exports.MULTIPLE_CHOICES] = "Multiple Choices";
statusCodes[exports.NETWORK_AUTHENTICATION_REQUIRED] = "Network Authentication Required";
statusCodes[exports.NO_CONTENT] = "No Content";
statusCodes[exports.NON_AUTHORITATIVE_INFORMATION] = "Non Authoritative Information";
statusCodes[exports.NOT_ACCEPTABLE] = "Not Acceptable";
statusCodes[exports.NOT_FOUND] = "Not Found";
statusCodes[exports.NOT_IMPLEMENTED] = "Not Implemented";
statusCodes[exports.NOT_MODIFIED] = "Not Modified";
statusCodes[exports.OK] = "OK";
statusCodes[exports.PARTIAL_CONTENT] = "Partial Content";
statusCodes[exports.PAYMENT_REQUIRED] = "Payment Required";
statusCodes[exports.PERMANENT_REDIRECT] = "Permanent Redirect";
statusCodes[exports.PRECONDITION_FAILED] = "Precondition Failed";
statusCodes[exports.PRECONDITION_REQUIRED] = "Precondition Required";
statusCodes[exports.PROCESSING] = "Processing";
statusCodes[exports.PROXY_AUTHENTICATION_REQUIRED] = "Proxy Authentication Required";
statusCodes[exports.REQUEST_HEADER_FIELDS_TOO_LARGE] = "Request Header Fields Too Large";
statusCodes[exports.REQUEST_TIMEOUT] = "Request Timeout";
statusCodes[exports.REQUEST_TOO_LONG] = "Request Entity Too Large";
statusCodes[exports.REQUEST_URI_TOO_LONG] = "Request-URI Too Long";
statusCodes[exports.REQUESTED_RANGE_NOT_SATISFIABLE] = "Requested Range Not Satisfiable";
statusCodes[exports.RESET_CONTENT] = "Reset Content";
statusCodes[exports.SEE_OTHER] = "See Other";
statusCodes[exports.SERVICE_UNAVAILABLE] = "Service Unavailable";
statusCodes[exports.SWITCHING_PROTOCOLS] = "Switching Protocols";
statusCodes[exports.TEMPORARY_REDIRECT] = "Temporary Redirect";
statusCodes[exports.TOO_MANY_REQUESTS] = "Too Many Requests";
statusCodes[exports.UNAUTHORIZED] = "Unauthorized";
statusCodes[exports.UNPROCESSABLE_ENTITY] = "Unprocessable Entity";
statusCodes[exports.UNSUPPORTED_MEDIA_TYPE] = "Unsupported Media Type";
statusCodes[exports.USE_PROXY] = "Use Proxy";

statusTexts[statusCodes[exports.ACCEPTED]] = exports.ACCEPTED;
statusTexts[statusCodes[exports.BAD_GATEWAY]] = exports.BAD_GATEWAY;
statusTexts[statusCodes[exports.BAD_REQUEST]] = exports.BAD_REQUEST;
statusTexts[statusCodes[exports.CONFLICT]] = exports.CONFLICT;
statusTexts[statusCodes[exports.CONTINUE]] = exports.CONTINUE;
statusTexts[statusCodes[exports.CREATED]] = exports.CREATED;
statusTexts[statusCodes[exports.EXPECTATION_FAILED]] = exports.EXPECTATION_FAILED;
statusTexts[statusCodes[exports.FAILED_DEPENDENCY]] = exports.FAILED_DEPENDENCY;
statusTexts[statusCodes[exports.FORBIDDEN]] = exports.FORBIDDEN;
statusTexts[statusCodes[exports.GATEWAY_TIMEOUT]] = exports.GATEWAY_TIMEOUT;
statusTexts[statusCodes[exports.GONE]] = exports.GONE;
statusTexts[statusCodes[exports.HTTP_VERSION_NOT_SUPPORTED]] = exports.HTTP_VERSION_NOT_SUPPORTED;
statusTexts[statusCodes[exports.IM_A_TEAPOT]] = exports.IM_A_TEAPOT;
statusTexts[statusCodes[exports.INSUFFICIENT_SPACE_ON_RESOURCE]] = exports.INSUFFICIENT_SPACE_ON_RESOURCE;
statusTexts[statusCodes[exports.INSUFFICIENT_STORAGE]] = exports.INSUFFICIENT_STORAGE;
statusTexts[statusCodes[exports.INTERNAL_SERVER_ERROR]] = exports.INTERNAL_SERVER_ERROR;
statusTexts[statusCodes[exports.LENGTH_REQUIRED]] = exports.LENGTH_REQUIRED;
statusTexts[statusCodes[exports.LOCKED]] = exports.LOCKED;
statusTexts[statusCodes[exports.METHOD_FAILURE]] = exports.METHOD_FAILURE;
statusTexts[statusCodes[exports.METHOD_NOT_ALLOWED]] = exports.METHOD_NOT_ALLOWED;
statusTexts[statusCodes[exports.MOVED_PERMANENTLY]] = exports.MOVED_PERMANENTLY;
statusTexts[statusCodes[exports.MOVED_TEMPORARILY]] = exports.MOVED_TEMPORARILY;
statusTexts[statusCodes[exports.MULTI_STATUS]] = exports.MULTI_STATUS;
statusTexts[statusCodes[exports.MULTIPLE_CHOICES]] = exports.MULTIPLE_CHOICES;
statusTexts[statusCodes[exports.NETWORK_AUTHENTICATION_REQUIRED]] = exports.NETWORK_AUTHENTICATION_REQUIRED;
statusTexts[statusCodes[exports.NO_CONTENT]] = exports.NO_CONTENT;
statusTexts[statusCodes[exports.NON_AUTHORITATIVE_INFORMATION]] = exports.NON_AUTHORITATIVE_INFORMATION;
statusTexts[statusCodes[exports.NOT_ACCEPTABLE]] = exports.NOT_ACCEPTABLE;
statusTexts[statusCodes[exports.NOT_FOUND]] = exports.NOT_FOUND;
statusTexts[statusCodes[exports.NOT_IMPLEMENTED]] = exports.NOT_IMPLEMENTED;
statusTexts[statusCodes[exports.NOT_MODIFIED]] = exports.NOT_MODIFIED;
statusTexts[statusCodes[exports.OK]] = exports.OK;
statusTexts[statusCodes[exports.PARTIAL_CONTENT]] = exports.PARTIAL_CONTENT;
statusTexts[statusCodes[exports.PAYMENT_REQUIRED]] = exports.PAYMENT_REQUIRED;
statusTexts[statusCodes[exports.PERMANENT_REDIRECT]] = exports.PERMANENT_REDIRECT;
statusTexts[statusCodes[exports.PRECONDITION_FAILED]] = exports.PRECONDITION_FAILED;
statusTexts[statusCodes[exports.PRECONDITION_REQUIRED]] = exports.PRECONDITION_REQUIRED;
statusTexts[statusCodes[exports.PROCESSING]] = exports.PROCESSING;
statusTexts[statusCodes[exports.PROXY_AUTHENTICATION_REQUIRED]] = exports.PROXY_AUTHENTICATION_REQUIRED;
statusTexts[statusCodes[exports.REQUEST_HEADER_FIELDS_TOO_LARGE]] = exports.REQUEST_HEADER_FIELDS_TOO_LARGE;
statusTexts[statusCodes[exports.REQUEST_TIMEOUT]] = exports.REQUEST_TIMEOUT;
statusTexts[statusCodes[exports.REQUEST_TOO_LONG]] = exports.REQUEST_TOO_LONG;
statusTexts[statusCodes[exports.REQUEST_URI_TOO_LONG]] = exports.REQUEST_URI_TOO_LONG;
statusTexts[statusCodes[exports.REQUESTED_RANGE_NOT_SATISFIABLE]] = exports.REQUESTED_RANGE_NOT_SATISFIABLE;
statusTexts[statusCodes[exports.RESET_CONTENT]] = exports.RESET_CONTENT;
statusTexts[statusCodes[exports.SEE_OTHER]] = exports.SEE_OTHER;
statusTexts[statusCodes[exports.SERVICE_UNAVAILABLE]] = exports.SERVICE_UNAVAILABLE;
statusTexts[statusCodes[exports.SWITCHING_PROTOCOLS]] = exports.SWITCHING_PROTOCOLS;
statusTexts[statusCodes[exports.TEMPORARY_REDIRECT]] = exports.TEMPORARY_REDIRECT;
statusTexts[statusCodes[exports.TOO_MANY_REQUESTS]] = exports.TOO_MANY_REQUESTS;
statusTexts[statusCodes[exports.UNAUTHORIZED]] = exports.UNAUTHORIZED;
statusTexts[statusCodes[exports.UNPROCESSABLE_ENTITY]] = exports.UNPROCESSABLE_ENTITY;
statusTexts[statusCodes[exports.UNSUPPORTED_MEDIA_TYPE]] = exports.UNSUPPORTED_MEDIA_TYPE;
statusTexts[statusCodes[exports.USE_PROXY]] = exports.USE_PROXY;

exports.getCode = function (statusCode) {
  if (codes.hasOwnProperty(statusCode)) {
    return codes[statusCode];
  } else {
    throw new Error("Status code does not exist: " + statusCode);
  }
};

exports.getStatusCode = function(reasonPhrase) {
  if (statusTexts.hasOwnProperty(reasonPhrase)) {
    return statusTexts[reasonPhrase];
  } else {
    throw new Error("Reason phrase does not exist: " + reasonPhrase);
  }
};

exports.getStatusText = function(statusCode) {
  if (statusCodes.hasOwnProperty(statusCode)) {
    return statusCodes[statusCode];
  } else {
    throw new Error("Status code does not exist: " + statusCode);
  }
};
