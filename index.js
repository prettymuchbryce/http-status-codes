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

var statusCodeData = {
  ACCEPTED: {
    statusCode: 202,
    reasonPhrase: "Accepted"
  },
  BAD_GATEWAY: {
    statusCode: 502,
    reasonPhrase: "Bad Gateway"
  },
  BAD_REQUEST: {
    statusCode: 400,
    reasonPhrase: "Bad Request"
  },
  CONFLICT: {
    statusCode: 409,
    reasonPhrase: "Conflict"
  },
  CONTINUE: {
    statusCode: 100,
    reasonPhrase: "Continue"
  },
  CREATED: {
    statusCode: 201,
    reasonPhrase: "Created"
  },
  EXPECTATION_FAILED: {
    statusCode: 417,
    reasonPhrase: "Expectation Failed"
  },
  FAILED_DEPENDENCY : {
    statusCode: 424,
    reasonPhrase: "Failed Dependency"
  },
  FORBIDDEN: {
    statusCode: 403,
    reasonPhrase: "Forbidden"
  },
  GATEWAY_TIMEOUT: {
    statusCode: 504,
    reasonPhrase: "Gateway Timeout"
  },
  GONE: {
    statusCode: 410,
    reasonPhrase: "Gone"
  },
  HTTP_VERSION_NOT_SUPPORTED: {
    statusCode: 505,
    reasonPhrase: "HTTP Version Not Supported"
  },
  IM_A_TEAPOT: {
    statusCode: 418,
    reasonPhrase: "I'm a teapot"
  },
  INSUFFICIENT_SPACE_ON_RESOURCE: {
    statusCode: 419,
    reasonPhrase: "Insufficient Space on Resource"
  },
  INSUFFICIENT_STORAGE: {
    statusCode: 507,
    reasonPhrase: "Insufficient Storage"
  },
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    reasonPhrase: "Server Error"
  },
  LENGTH_REQUIRED: {
    statusCode: 411,
    reasonPhrase: "Length Required"
  },
  LOCKED: {
    statusCode: 423,
    reasonPhrase: "Locked"
  },
  METHOD_FAILURE: {
    statusCode: 420,
    reasonPhrase: "Method Failure"
  },
  METHOD_NOT_ALLOWED: {
    statusCode: 405,
    reasonPhrase: "Method Not Allowed"
  },
  MOVED_PERMANENTLY: {
    statusCode: 301,
    reasonPhrase: "Moved Permanently"
  },
  MOVED_TEMPORARILY: {
    statusCode: 302,
    reasonPhrase: "Moved Temporarily"
  },
  MULTI_STATUS: {
    statusCode: 207,
    reasonPhrase: "Multi-Status"
  },
  MULTIPLE_CHOICES: {
    statusCode: 300,
    reasonPhrase: "Multiple Choices"
  },
  NETWORK_AUTHENTICATION_REQUIRED: {
    statusCode: 511,
    reasonPhrase: "Network Authentication Required"
  },
  NO_CONTENT: {
    statusCode: 204,
    reasonPhrase: "No Content"
  },
  NON_AUTHORITATIVE_INFORMATION: {
    statusCode: 203,
    reasonPhrase: "Non Authoritative Information"
  },
  NOT_ACCEPTABLE: {
    statusCode: 406,
    reasonPhrase: "Not Acceptable"
  },
  NOT_FOUND: {
    statusCode: 404,
    reasonPhrase: "Not Found"
  },
  NOT_IMPLEMENTED: {
    statusCode: 501,
    reasonPhrase: "Not Implemented"
  },
  NOT_MODIFIED: {
    statusCode: 304,
    reasonPhrase: "Not Modified"
  },
  OK: {
    statusCode: 200,
    reasonPhrase: "OK"
  },
  PARTIAL_CONTENT: {
    statusCode: 206,
    reasonPhrase: "Partial Content"
  },
  PAYMENT_REQUIRED: {
    statusCode: 402,
    reasonPhrase: "Payment Required"
  },
  PERMANENT_REDIRECT: {
    statusCode: 308,
    reasonPhrase: "Permanent Redirect"
  },
  PRECONDITION_FAILED: {
    statusCode: 412,
    reasonPhrase: "Precondition Failed"
  },
  PRECONDITION_REQUIRED: {
    statusCode: 428,
    reasonPhrase: "Precondition Required"
  },
  PROCESSING: {
    statusCode: 102,
    reasonPhrase: "Processing"
  },
  PROXY_AUTHENTICATION_REQUIRED: {
    statusCode: 407,
    reasonPhrase: "Proxy Authentication Required"
  },
  REQUEST_HEADER_FIELDS_TOO_LARGE: {
    statusCode: 431,
    reasonPhrase: "Request Header Fields Too Large"
  },
  REQUEST_TIMEOUT: {
    statusCode: 408,
    reasonPhrase: "Request Timeout"
  },
  REQUEST_TOO_LONG: {
    statusCode: 413,
    reasonPhrase: "Request Entity Too Large"
  },
  REQUEST_URI_TOO_LONG: {
    statusCode: 414,
    reasonPhrase: "Request-URI Too Long"
  },
  REQUESTED_RANGE_NOT_SATISFIABLE: {
    statusCode: 416,
    reasonPhrase: "Requested Range Not Satisfiable"
  },
  RESET_CONTENT: {
    statusCode: 205,
    reasonPhrase: "Reset Content"
  },
  SEE_OTHER: {
    statusCode: 303,
    reasonPhrase: "See Other"
  },
  SERVICE_UNAVAILABLE: {
    statusCode: 503,
    reasonPhrase: "Service Unavailable"
  },
  SWITCHING_PROTOCOLS: {
    statusCode: 101,
    reasonPhrase: "Switching Protocols"
  },
  TEMPORARY_REDIRECT: {
    statusCode: 307,
    reasonPhrase: "Temporary Redirect"
  },
  TOO_MANY_REQUESTS: {
    statusCode: 429,
    reasonPhrase: "Too Many Requests"
  },
  UNAUTHORIZED: {
    statusCode: 401,
    reasonPhrase: "Unauthorized"
  },
  UNPROCESSABLE_ENTITY: {
    statusCode: 422,
    reasonPhrase: "Unprocessable Entity"
  },
  UNSUPPORTED_MEDIA_TYPE: {
    statusCode: 415,
    reasonPhrase: "Unsupported Media Type"
  },
  USE_PROXY: {
    statusCode: 305,
    reasonPhrase: "Use Proxy"
  },
};

// export a mapping of status name to status code only

var statusCodes = Object.keys(statusCodeData).reduce((acc, statusName) => {
  acc[statusName] = statusCodeData[statusName].statusCode;
  return acc;
}, {});

exports.StatusCodes = statusCodes;

// export each status name individually, set to its status code

Object.keys(statusCodeData).forEach(statusName => {
  exports[statusName] = statusCodes[statusName];
});

// helper functions

var statusCodesToReason = Object.keys(statusCodeData).reduce((acc, statusName) => {
  var status = statusCodeData[statusName];
  acc[status.statusCode] = status.reasonPhrase;
  return acc;
}, {});

exports.getStatusText = function(statusCode) {
  if (statusCodesToReason.hasOwnProperty(statusCode)) {
    return statusCodesToReason[statusCode];
  }
  throw new Error("Status code does not exist: " + statusCode);
};

var reasonPhrasesToCode = Object.keys(statusCodesToReason).reduce((acc, statusCode) => {
  acc[statusCodesToReason[statusCode]] = statusCode;
  return acc;
}, {});

exports.getStatusCode = function(reasonPhrase) {
  if (reasonPhrasesToCode.hasOwnProperty(reasonPhrase)) {
    return parseInt(statusCodesToReason[reasonPhrase], 10);
  }
  throw new Error("Reason phrase does not exist: " + reasonPhrase);
};
