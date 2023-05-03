// Generated file. Do not edit
import { StatusCodes } from "./status-codes";

export namespace StatusClasses {
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2
     *
     * Union of all status codes between 100 and 199:
     * - StatusCodes.CONTINUE
     * - StatusCodes.PROCESSING
     * - StatusCodes.SWITCHING_PROTOCOLS
     */
    export type Informational = 
        | StatusCodes.CONTINUE
        | StatusCodes.PROCESSING
        | StatusCodes.SWITCHING_PROTOCOLS;
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3
     *
     * Union of all status codes between 200 and 299:
     * - StatusCodes.ACCEPTED
     * - StatusCodes.CREATED
     * - StatusCodes.MULTI_STATUS
     * - StatusCodes.NO_CONTENT
     * - StatusCodes.NON_AUTHORITATIVE_INFORMATION
     * - StatusCodes.OK
     * - StatusCodes.PARTIAL_CONTENT
     * - StatusCodes.RESET_CONTENT
     */
    export type Successful = 
        | StatusCodes.ACCEPTED
        | StatusCodes.CREATED
        | StatusCodes.MULTI_STATUS
        | StatusCodes.NO_CONTENT
        | StatusCodes.NON_AUTHORITATIVE_INFORMATION
        | StatusCodes.OK
        | StatusCodes.PARTIAL_CONTENT
        | StatusCodes.RESET_CONTENT;
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4
     *
     * Union of all status codes between 300 and 399:
     * - StatusCodes.MOVED_PERMANENTLY
     * - StatusCodes.MOVED_TEMPORARILY
     * - StatusCodes.MULTIPLE_CHOICES
     * - StatusCodes.NOT_MODIFIED
     * - StatusCodes.PERMANENT_REDIRECT
     * - StatusCodes.SEE_OTHER
     * - StatusCodes.TEMPORARY_REDIRECT
     * - StatusCodes.USE_PROXY
     */
    export type Redirection = 
        | StatusCodes.MOVED_PERMANENTLY
        | StatusCodes.MOVED_TEMPORARILY
        | StatusCodes.MULTIPLE_CHOICES
        | StatusCodes.NOT_MODIFIED
        | StatusCodes.PERMANENT_REDIRECT
        | StatusCodes.SEE_OTHER
        | StatusCodes.TEMPORARY_REDIRECT
        | StatusCodes.USE_PROXY;
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5
     *
     * Union of all status codes between 400 and 499:
     * - StatusCodes.BAD_REQUEST
     * - StatusCodes.CONFLICT
     * - StatusCodes.EXPECTATION_FAILED
     * - StatusCodes.FAILED_DEPENDENCY
     * - StatusCodes.FORBIDDEN
     * - StatusCodes.GONE
     * - StatusCodes.IM_A_TEAPOT
     * - StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE
     * - StatusCodes.LENGTH_REQUIRED
     * - StatusCodes.LOCKED
     * - StatusCodes.METHOD_FAILURE
     * - StatusCodes.METHOD_NOT_ALLOWED
     * - StatusCodes.NOT_ACCEPTABLE
     * - StatusCodes.NOT_FOUND
     * - StatusCodes.PAYMENT_REQUIRED
     * - StatusCodes.PRECONDITION_FAILED
     * - StatusCodes.PRECONDITION_REQUIRED
     * - StatusCodes.PROXY_AUTHENTICATION_REQUIRED
     * - StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE
     * - StatusCodes.REQUEST_TIMEOUT
     * - StatusCodes.REQUEST_TOO_LONG
     * - StatusCodes.REQUEST_URI_TOO_LONG
     * - StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE
     * - StatusCodes.TOO_MANY_REQUESTS
     * - StatusCodes.UNAUTHORIZED
     * - StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS
     * - StatusCodes.UNPROCESSABLE_ENTITY
     * - StatusCodes.UNSUPPORTED_MEDIA_TYPE
     * - StatusCodes.MISDIRECTED_REQUEST
     */
    export type ClientError = 
        | StatusCodes.BAD_REQUEST
        | StatusCodes.CONFLICT
        | StatusCodes.EXPECTATION_FAILED
        | StatusCodes.FAILED_DEPENDENCY
        | StatusCodes.FORBIDDEN
        | StatusCodes.GONE
        | StatusCodes.IM_A_TEAPOT
        | StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE
        | StatusCodes.LENGTH_REQUIRED
        | StatusCodes.LOCKED
        | StatusCodes.METHOD_FAILURE
        | StatusCodes.METHOD_NOT_ALLOWED
        | StatusCodes.NOT_ACCEPTABLE
        | StatusCodes.NOT_FOUND
        | StatusCodes.PAYMENT_REQUIRED
        | StatusCodes.PRECONDITION_FAILED
        | StatusCodes.PRECONDITION_REQUIRED
        | StatusCodes.PROXY_AUTHENTICATION_REQUIRED
        | StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE
        | StatusCodes.REQUEST_TIMEOUT
        | StatusCodes.REQUEST_TOO_LONG
        | StatusCodes.REQUEST_URI_TOO_LONG
        | StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE
        | StatusCodes.TOO_MANY_REQUESTS
        | StatusCodes.UNAUTHORIZED
        | StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS
        | StatusCodes.UNPROCESSABLE_ENTITY
        | StatusCodes.UNSUPPORTED_MEDIA_TYPE
        | StatusCodes.MISDIRECTED_REQUEST;
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6
     *
     * Union of all status codes between 500 and 599:
     * - StatusCodes.BAD_GATEWAY
     * - StatusCodes.GATEWAY_TIMEOUT
     * - StatusCodes.HTTP_VERSION_NOT_SUPPORTED
     * - StatusCodes.INSUFFICIENT_STORAGE
     * - StatusCodes.INTERNAL_SERVER_ERROR
     * - StatusCodes.NETWORK_AUTHENTICATION_REQUIRED
     * - StatusCodes.NOT_IMPLEMENTED
     * - StatusCodes.SERVICE_UNAVAILABLE
     */
    export type ServerError = 
        | StatusCodes.BAD_GATEWAY
        | StatusCodes.GATEWAY_TIMEOUT
        | StatusCodes.HTTP_VERSION_NOT_SUPPORTED
        | StatusCodes.INSUFFICIENT_STORAGE
        | StatusCodes.INTERNAL_SERVER_ERROR
        | StatusCodes.NETWORK_AUTHENTICATION_REQUIRED
        | StatusCodes.NOT_IMPLEMENTED
        | StatusCodes.SERVICE_UNAVAILABLE;

    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2
     *
     * Union of all status codes between 100 and 199:
     * - StatusCodes.CONTINUE
     * - StatusCodes.PROCESSING
     * - StatusCodes.SWITCHING_PROTOCOLS
     */
    export namespace Informational {
        /** List of all codes */
        export const LIST: Number[] = [
            StatusCodes.CONTINUE,
            StatusCodes.PROCESSING,
            StatusCodes.SWITCHING_PROTOCOLS
            ];
    }

    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3
     *
     * Union of all status codes between 200 and 299:
     * - StatusCodes.ACCEPTED
     * - StatusCodes.CREATED
     * - StatusCodes.MULTI_STATUS
     * - StatusCodes.NO_CONTENT
     * - StatusCodes.NON_AUTHORITATIVE_INFORMATION
     * - StatusCodes.OK
     * - StatusCodes.PARTIAL_CONTENT
     * - StatusCodes.RESET_CONTENT
     */
    export namespace Successful {
        /** List of all codes */
        export const LIST: Number[] = [
            StatusCodes.ACCEPTED,
            StatusCodes.CREATED,
            StatusCodes.MULTI_STATUS,
            StatusCodes.NO_CONTENT,
            StatusCodes.NON_AUTHORITATIVE_INFORMATION,
            StatusCodes.OK,
            StatusCodes.PARTIAL_CONTENT,
            StatusCodes.RESET_CONTENT
            ];
    }

    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4
     *
     * Union of all status codes between 300 and 399:
     * - StatusCodes.MOVED_PERMANENTLY
     * - StatusCodes.MOVED_TEMPORARILY
     * - StatusCodes.MULTIPLE_CHOICES
     * - StatusCodes.NOT_MODIFIED
     * - StatusCodes.PERMANENT_REDIRECT
     * - StatusCodes.SEE_OTHER
     * - StatusCodes.TEMPORARY_REDIRECT
     * - StatusCodes.USE_PROXY
     */
    export namespace Redirection {
        /** List of all codes */
        export const LIST: Number[] = [
            StatusCodes.MOVED_PERMANENTLY,
            StatusCodes.MOVED_TEMPORARILY,
            StatusCodes.MULTIPLE_CHOICES,
            StatusCodes.NOT_MODIFIED,
            StatusCodes.PERMANENT_REDIRECT,
            StatusCodes.SEE_OTHER,
            StatusCodes.TEMPORARY_REDIRECT,
            StatusCodes.USE_PROXY
            ];
    }

    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5
     *
     * Union of all status codes between 400 and 499:
     * - StatusCodes.BAD_REQUEST
     * - StatusCodes.CONFLICT
     * - StatusCodes.EXPECTATION_FAILED
     * - StatusCodes.FAILED_DEPENDENCY
     * - StatusCodes.FORBIDDEN
     * - StatusCodes.GONE
     * - StatusCodes.IM_A_TEAPOT
     * - StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE
     * - StatusCodes.LENGTH_REQUIRED
     * - StatusCodes.LOCKED
     * - StatusCodes.METHOD_FAILURE
     * - StatusCodes.METHOD_NOT_ALLOWED
     * - StatusCodes.NOT_ACCEPTABLE
     * - StatusCodes.NOT_FOUND
     * - StatusCodes.PAYMENT_REQUIRED
     * - StatusCodes.PRECONDITION_FAILED
     * - StatusCodes.PRECONDITION_REQUIRED
     * - StatusCodes.PROXY_AUTHENTICATION_REQUIRED
     * - StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE
     * - StatusCodes.REQUEST_TIMEOUT
     * - StatusCodes.REQUEST_TOO_LONG
     * - StatusCodes.REQUEST_URI_TOO_LONG
     * - StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE
     * - StatusCodes.TOO_MANY_REQUESTS
     * - StatusCodes.UNAUTHORIZED
     * - StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS
     * - StatusCodes.UNPROCESSABLE_ENTITY
     * - StatusCodes.UNSUPPORTED_MEDIA_TYPE
     * - StatusCodes.MISDIRECTED_REQUEST
     */
    export namespace ClientError {
        /** List of all codes */
        export const LIST: Number[] = [
            StatusCodes.BAD_REQUEST,
            StatusCodes.CONFLICT,
            StatusCodes.EXPECTATION_FAILED,
            StatusCodes.FAILED_DEPENDENCY,
            StatusCodes.FORBIDDEN,
            StatusCodes.GONE,
            StatusCodes.IM_A_TEAPOT,
            StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE,
            StatusCodes.LENGTH_REQUIRED,
            StatusCodes.LOCKED,
            StatusCodes.METHOD_FAILURE,
            StatusCodes.METHOD_NOT_ALLOWED,
            StatusCodes.NOT_ACCEPTABLE,
            StatusCodes.NOT_FOUND,
            StatusCodes.PAYMENT_REQUIRED,
            StatusCodes.PRECONDITION_FAILED,
            StatusCodes.PRECONDITION_REQUIRED,
            StatusCodes.PROXY_AUTHENTICATION_REQUIRED,
            StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE,
            StatusCodes.REQUEST_TIMEOUT,
            StatusCodes.REQUEST_TOO_LONG,
            StatusCodes.REQUEST_URI_TOO_LONG,
            StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE,
            StatusCodes.TOO_MANY_REQUESTS,
            StatusCodes.UNAUTHORIZED,
            StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS,
            StatusCodes.UNPROCESSABLE_ENTITY,
            StatusCodes.UNSUPPORTED_MEDIA_TYPE,
            StatusCodes.MISDIRECTED_REQUEST
            ];
    }

    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6
     *
     * Union of all status codes between 500 and 599:
     * - StatusCodes.BAD_GATEWAY
     * - StatusCodes.GATEWAY_TIMEOUT
     * - StatusCodes.HTTP_VERSION_NOT_SUPPORTED
     * - StatusCodes.INSUFFICIENT_STORAGE
     * - StatusCodes.INTERNAL_SERVER_ERROR
     * - StatusCodes.NETWORK_AUTHENTICATION_REQUIRED
     * - StatusCodes.NOT_IMPLEMENTED
     * - StatusCodes.SERVICE_UNAVAILABLE
     */
    export namespace ServerError {
        /** List of all codes */
        export const LIST: Number[] = [
            StatusCodes.BAD_GATEWAY,
            StatusCodes.GATEWAY_TIMEOUT,
            StatusCodes.HTTP_VERSION_NOT_SUPPORTED,
            StatusCodes.INSUFFICIENT_STORAGE,
            StatusCodes.INTERNAL_SERVER_ERROR,
            StatusCodes.NETWORK_AUTHENTICATION_REQUIRED,
            StatusCodes.NOT_IMPLEMENTED,
            StatusCodes.SERVICE_UNAVAILABLE
            ];
    }
}
