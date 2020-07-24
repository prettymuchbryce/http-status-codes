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
export const ACCEPTED = 202;
export const BAD_GATEWAY = 502;
export const BAD_REQUEST = 400;
export const CONFLICT = 409;
export const CONTINUE = 100;
export const CREATED = 201;
export const EXPECTATION_FAILED = 417;
export const FAILED_DEPENDENCY = 424;
export const FORBIDDEN = 403;
export const GATEWAY_TIMEOUT = 504;
export const GONE = 410;
export const HTTP_VERSION_NOT_SUPPORTED = 505;
export const IM_A_TEAPOT = 418;
export const INSUFFICIENT_SPACE_ON_RESOURCE = 419;
export const INSUFFICIENT_STORAGE = 507;
export const INTERNAL_SERVER_ERROR = 500;
export const LENGTH_REQUIRED = 411;
export const LOCKED = 423;
export const METHOD_FAILURE = 420;
export const METHOD_NOT_ALLOWED = 405;
export const MOVED_PERMANENTLY = 301;
export const MOVED_TEMPORARILY = 302;
export const MULTI_STATUS = 207;
export const MULTIPLE_CHOICES = 300;
export const NETWORK_AUTHENTICATION_REQUIRED = 511;
export const NO_CONTENT = 204;
export const NON_AUTHORITATIVE_INFORMATION = 203;
export const NOT_ACCEPTABLE = 406;
export const NOT_FOUND = 404;
export const NOT_IMPLEMENTED = 501;
export const NOT_MODIFIED = 304;
export const OK = 200;
export const PARTIAL_CONTENT = 206;
export const PAYMENT_REQUIRED = 402;
export const PERMANENT_REDIRECT = 308;
export const PRECONDITION_FAILED = 412;
export const PRECONDITION_REQUIRED = 428;
export const PROCESSING = 102;
export const PROXY_AUTHENTICATION_REQUIRED = 407;
export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
export const REQUEST_TIMEOUT = 408;
export const REQUEST_TOO_LONG = 413;
export const REQUEST_URI_TOO_LONG = 414;
export const REQUESTED_RANGE_NOT_SATISFIABLE = 416;
export const RESET_CONTENT = 205;
export const SEE_OTHER = 303;
export const SERVICE_UNAVAILABLE = 503;
export const SWITCHING_PROTOCOLS = 101;
export const TEMPORARY_REDIRECT = 307;
export const TOO_MANY_REQUESTS = 429;
export const UNAUTHORIZED = 401;
export const UNPROCESSABLE_ENTITY = 422;
export const UNSUPPORTED_MEDIA_TYPE = 415;
export const USE_PROXY = 305;

export const statusCodes = {
  [ACCEPTED]: "Accepted",
  [BAD_GATEWAY]: "Bad Gateway",
  [BAD_REQUEST]: "Bad Request",
  [CONFLICT]: "Conflict",
  [CONTINUE]: "Continue",
  [CREATED]: "Created",
  [EXPECTATION_FAILED]: "Expectation Failed",
  [FAILED_DEPENDENCY]: "Failed Dependency",
  [FORBIDDEN]: "Forbidden",
  [GATEWAY_TIMEOUT]: "Gateway Timeout",
  [GONE]: "Gone",
  [HTTP_VERSION_NOT_SUPPORTED]: "HTTP Version Not Supported",
  [IM_A_TEAPOT]: "I'm a teapot",
  [INSUFFICIENT_SPACE_ON_RESOURCE]: "Insufficient Space on Resource",
  [INSUFFICIENT_STORAGE]: "Insufficient Storage",
  [INTERNAL_SERVER_ERROR]: "Server Error",
  [LENGTH_REQUIRED]: "Length Required",
  [LOCKED]: "Locked",
  [METHOD_FAILURE]: "Method Failure",
  [METHOD_NOT_ALLOWED]: "Method Not Allowed",
  [MOVED_PERMANENTLY]: "Moved Permanently",
  [MOVED_TEMPORARILY]: "Moved Temporarily",
  [MULTI_STATUS]: "Multi-Status",
  [MULTIPLE_CHOICES]: "Multiple Choices",
  [NETWORK_AUTHENTICATION_REQUIRED]: "Network Authentication Required",
  [NO_CONTENT]: "No Content",
  [NON_AUTHORITATIVE_INFORMATION]: "Non Authoritative Information",
  [NOT_ACCEPTABLE]: "Not Acceptable",
  [NOT_FOUND]: "Not Found",
  [NOT_IMPLEMENTED]: "Not Implemented",
  [NOT_MODIFIED]: "Not Modified",
  [OK]: "OK",
  [PARTIAL_CONTENT]: "Partial Content",
  [PAYMENT_REQUIRED]: "Payment Required",
  [PERMANENT_REDIRECT]: "Permanent Redirect",
  [PRECONDITION_FAILED]: "Precondition Failed",
  [PRECONDITION_REQUIRED]: "Precondition Required",
  [PROCESSING]: "Processing",
  [PROXY_AUTHENTICATION_REQUIRED]: "Proxy Authentication Required",
  [REQUEST_HEADER_FIELDS_TOO_LARGE]: "Request Header Fields Too Large",
  [REQUEST_TIMEOUT]: "Request Timeout",
  [REQUEST_TOO_LONG]: "Request Entity Too Large",
  [REQUEST_URI_TOO_LONG]: "Request-URI Too Long",
  [REQUESTED_RANGE_NOT_SATISFIABLE]: "Requested Range Not Satisfiable",
  [RESET_CONTENT]: "Reset Content",
  [SEE_OTHER]: "See Other",
  [SERVICE_UNAVAILABLE]: "Service Unavailable",
  [SWITCHING_PROTOCOLS]: "Switching Protocols",
  [TEMPORARY_REDIRECT]: "Temporary Redirect",
  [TOO_MANY_REQUESTS]: "Too Many Requests",
  [UNAUTHORIZED]: "Unauthorized",
  [UNPROCESSABLE_ENTITY]: "Unprocessable Entity",
  [UNSUPPORTED_MEDIA_TYPE]: "Unsupported Media Type",
  [USE_PROXY]: "Use Proxy",
};

export const getStatusText = (statusCode) => {
  if (statusCodes.hasOwnProperty(statusCode)) {
    return statusCodes[statusCode];
  }
  throw new Error("Status code does not exist: " + statusCode);
};

export const getStatusCode = (reasonPhrase) => {
  for (const key of Object.keys(statusCodes)) {
    if (statusCodes[key] === reasonPhrase) {
      return parseInt(key, 10);
    }
  }
  throw new Error("Reason phrase does not exist: " + reasonPhrase);
};
