/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6
 */
export enum HttpStatusCodes {
  ACCEPTED = 202,
  BAD_GATEWAY = 502,
  BAD_REQUEST = 400,
  CONFLICT = 409,
  CONTINUE = 100,
  CREATED = 201,
  EXPECTATION_FAILED = 417,
  FAILED_DEPENDENCY = 424,
  FORBIDDEN = 403,
  GATEWAY_TIMEOUT = 504,
  GONE = 410,
  HTTP_VERSION_NOT_SUPPORTED = 505,
  IM_A_TEAPOT = 418,
  INSUFFICIENT_SPACE_ON_RESOURCE = 419,
  INSUFFICIENT_STORAGE = 507,
  INTERNAL_SERVER_ERROR = 500,
  LENGTH_REQUIRED = 411,
  LOCKED = 423,
  METHOD_FAILURE = 420,
  METHOD_NOT_ALLOWED = 405,
  MOVED_PERMANENTLY = 301,
  MOVED_TEMPORARILY = 302,
  MULTI_STATUS = 207,
  MULTIPLE_CHOICES = 300,
  NETWORK_AUTHENTICATION_REQUIRED = 511,
  NO_CONTENT = 204,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NOT_ACCEPTABLE = 406,
  NOT_FOUND = 404,
  NOT_IMPLEMENTED = 501,
  NOT_MODIFIED = 304,
  OK = 200,
  PARTIAL_CONTENT = 206,
  PAYMENT_REQUIRED = 402,
  PERMANENT_REDIRECT = 308,
  PRECONDITION_FAILED = 412,
  PRECONDITION_REQUIRED = 428,
  PROCESSING = 102,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  REQUEST_TIMEOUT = 408,
  REQUEST_TOO_LONG = 413,
  REQUEST_URI_TOO_LONG = 414,
  REQUESTED_RANGE_NOT_SATISFIABLE = 416,
  RESET_CONTENT = 205,
  SEE_OTHER = 303,
  SERVICE_UNAVAILABLE = 503,
  SWITCHING_PROTOCOLS = 101,
  TEMPORARY_REDIRECT = 307,
  TOO_MANY_REQUESTS = 429,
  UNAUTHORIZED = 401,
  UNPROCESSABLE_ENTITY = 422,
  UNSUPPORTED_MEDIA_TYPE = 415,
  USE_PROXY = 305,
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.3
 *
 * The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.
 */
export declare const ACCEPTED = HttpStatusCodes.ACCEPTED;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.3
 *
 * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
 */
export declare const BAD_GATEWAY = HttpStatusCodes.BAD_GATEWAY;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.1
 *
 * This response means that server could not understand the request due to invalid syntax.
 */
export declare const BAD_REQUEST = HttpStatusCodes.BAD_REQUEST;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.8
 *
 * This response is sent when a request conflicts with the current state of the server.
 */
export declare const CONFLICT = HttpStatusCodes.CONFLICT;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.1
 *
 * This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
 */
export declare const CONTINUE = HttpStatusCodes.CONTINUE;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.2
 *
 * The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.
 */
export declare const CREATED = HttpStatusCodes.CREATED;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.14
 *
 * This response code means the expectation indicated by the Expect request header field can't be met by the server.
 */
export declare const EXPECTATION_FAILED = HttpStatusCodes.EXPECTATION_FAILED;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.5
 *
 * The request failed due to failure of a previous request.
 */
export declare const FAILED_DEPENDENCY = HttpStatusCodes.FAILED_DEPENDENCY;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.3
 *
 * The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.
 */
export declare const FORBIDDEN = HttpStatusCodes.FORBIDDEN;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.5
 *
 * This error response is given when the server is acting as a gateway and cannot get a response in time.
 */
export declare const GATEWAY_TIMEOUT = HttpStatusCodes.GATEWAY_TIMEOUT;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.9
 *
 * This response would be sent when the requested content has been permenantly deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
 */
export declare const GONE = HttpStatusCodes.GONE;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.6
 *
 * The HTTP version used in the request is not supported by the server.
 */
export declare const HTTP_VERSION_NOT_SUPPORTED = HttpStatusCodes.HTTP_VERSION_NOT_SUPPORTED;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2324#section-2.3.2
 *
 * Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
 */
export declare const IM_A_TEAPOT = HttpStatusCodes.IM_A_TEAPOT;

/**
 * UNOFFICIAL w/ NO DOCS
 */
export declare const INSUFFICIENT_SPACE_ON_RESOURCE = HttpStatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.6
 *
 * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
 */
export declare const INSUFFICIENT_STORAGE = HttpStatusCodes.INSUFFICIENT_STORAGE;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.1
 *
 * The server has encountered a situation it doesn't know how to handle.
 */
export declare const INTERNAL_SERVER_ERROR = HttpStatusCodes.INTERNAL_SERVER_ERROR;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.10
 *
 * Server rejected the request because the Content-Length header field is not defined and the server requires it.
 */
export declare const LENGTH_REQUIRED = HttpStatusCodes.LENGTH_REQUIRED;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.4
 *
 * The resource that is being accessed is locked.
 */
export declare const LOCKED = HttpStatusCodes.LOCKED;

/**
 * @deprecated
 * A deprecated response used by the Spring Framework when a method has failed.
 */
export declare const METHOD_FAILURE = HttpStatusCodes.METHOD_FAILURE;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.5
 *
 * The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.
 */
export declare const METHOD_NOT_ALLOWED = HttpStatusCodes.METHOD_NOT_ALLOWED;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.2
 *
 * This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.
 */
export declare const MOVED_PERMANENTLY = HttpStatusCodes.MOVED_PERMANENTLY;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.3
 *
 * This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
 */
export declare const MOVED_TEMPORARILY = HttpStatusCodes.MOVED_TEMPORARILY;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.2
 *
 * A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
 */
export declare const MULTI_STATUS = HttpStatusCodes.MULTI_STATUS;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.1
 *
 * The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.
 */
export declare const MULTIPLE_CHOICES = HttpStatusCodes.MULTIPLE_CHOICES;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-6
 *
 * The 511 status code indicates that the client needs to authenticate to gain network access.
 */
export declare const NETWORK_AUTHENTICATION_REQUIRED = HttpStatusCodes.NETWORK_AUTHENTICATION_REQUIRED;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.5
 *
 * There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
 */
export declare const NO_CONTENT = HttpStatusCodes.NO_CONTENT;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.4
 * This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.
 */
export declare const NON_AUTHORITATIVE_INFORMATION = HttpStatusCodes.NON_AUTHORITATIVE_INFORMATION;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.6
 *
 * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.
 */
export declare const NOT_ACCEPTABLE = HttpStatusCodes.NOT_ACCEPTABLE;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.4
 *
 * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
 */
export declare const NOT_FOUND = HttpStatusCodes.NOT_FOUND;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.2
 *
 * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
 */
export declare const NOT_IMPLEMENTED = HttpStatusCodes.NOT_IMPLEMENTED;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.1
 *
 * This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.
 */
export declare const NOT_MODIFIED = HttpStatusCodes.NOT_MODIFIED;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.1
 *
 * The request has succeeded. The meaning of a success varies depending on the HTTP method:
 * GET: The resource has been fetched and is transmitted in the message body.
 * HEAD: The entity headers are in the message body.
 * POST: The resource describing the result of the action is transmitted in the message body.
 * TRACE: The message body contains the request message as received by the server
 */
export declare const OK = HttpStatusCodes.OK;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.1
 *
 * This response code is used because of range header sent by the client to separate download into multiple streams.
 */
export declare const PARTIAL_CONTENT = HttpStatusCodes.PARTIAL_CONTENT;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.2
 *
 * This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.
 */
export declare const PAYMENT_REQUIRED = HttpStatusCodes.PAYMENT_REQUIRED;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7538#section-3
 *
 * This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
 */
export declare const PERMANENT_REDIRECT = HttpStatusCodes.PERMANENT_REDIRECT;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.2
 *
 * The client has indicated preconditions in its headers which the server does not meet.
 */
export declare const PRECONDITION_FAILED = HttpStatusCodes.PRECONDITION_FAILED;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-3
 *
 * The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
 */
export declare const PRECONDITION_REQUIRED = HttpStatusCodes.PRECONDITION_REQUIRED;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.1
 *
 * This code indicates that the server has received and is processing the request, but no response is available yet.
 */
export declare const PROCESSING = HttpStatusCodes.PROCESSING;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.2
 *
 * This is similar to 401 but authentication is needed to be done by a proxy.
 */
export declare const PROXY_AUTHENTICATION_REQUIRED = HttpStatusCodes.PROXY_AUTHENTICATION_REQUIRED;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-5
 *
 * The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
 */
export declare const REQUEST_HEADER_FIELDS_TOO_LARGE = HttpStatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.7
 *
 * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
 */
export declare const REQUEST_TIMEOUT = HttpStatusCodes.REQUEST_TIMEOUT;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.11
 *
 * Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
 */
export declare const REQUEST_TOO_LONG = HttpStatusCodes.REQUEST_TOO_LONG;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.12
 *
 * The URI requested by the client is longer than the server is willing to interpret.
 */
export declare const REQUEST_URI_TOO_LONG = HttpStatusCodes.REQUEST_URI_TOO_LONG;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.4
 *
 * The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.
 */
export declare const REQUESTED_RANGE_NOT_SATISFIABLE = HttpStatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.6
 *
 * This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
 */
export declare const RESET_CONTENT = HttpStatusCodes.RESET_CONTENT;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.4
 *
 * Server sent this response to directing client to get requested resource to another URI with an GET request.
 */
export declare const SEE_OTHER = HttpStatusCodes.SEE_OTHER;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.4
 *
 * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
 */
export declare const SERVICE_UNAVAILABLE = HttpStatusCodes.SERVICE_UNAVAILABLE;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.2
 *
 * This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.
 */
export declare const SWITCHING_PROTOCOLS = HttpStatusCodes.SWITCHING_PROTOCOLS;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.7
 *
 * Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
 */
export declare const TEMPORARY_REDIRECT = HttpStatusCodes.TEMPORARY_REDIRECT;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-4
 *
 * The user has sent too many requests in a given amount of time ("rate limiting").
 */
export declare const TOO_MANY_REQUESTS = HttpStatusCodes.TOO_MANY_REQUESTS;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.1
 *
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 */
export declare const UNAUTHORIZED = HttpStatusCodes.UNAUTHORIZED;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.3
 *
 * The request was well-formed but was unable to be followed due to semantic errors.
 */
export declare const UNPROCESSABLE_ENTITY = HttpStatusCodes.UNPROCESSABLE_ENTITY;

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.13
 *
 * The media format of the requested data is not supported by the server, so the server is rejecting the request.
 */
export declare const UNSUPPORTED_MEDIA_TYPE = HttpStatusCodes.UNSUPPORTED_MEDIA_TYPE;

/**
 * @deprecated
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.6
 *
 * Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
 */
export declare const USE_PROXY = HttpStatusCodes.USE_PROXY;

/**
 * Convert the numeric status code to its appropriate title.
 * @param statusCode One of the available status codes in this package
 * @returns {String} The associated title of the passed status code
 * @throws {Error} The status code does not exist
 */
export declare function getStatusText(statusCode: number): string;

/**
 * Convert the status reason phrase to its appropriate numeric value
 * @param reasonPhrase One of the available reason phrases in this package
 * @returns {Number} The associated status code of the passed reason phrase
 * @throws {Error} The reason phrase does not exist
 */
export declare function getStatusCode(reasonPhrase: string): number;
 