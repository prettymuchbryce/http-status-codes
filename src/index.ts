import {
  StatusCodes, ReasonPhrases, reasonPhraseToStatusCode, statusCodeToReasonPhrase,
} from './codes';

/**
 * Returns the reason phrase for the given status code.
 * If the given status code does not exist, undefined is returned.
 *
 * @param {number|string} statusCode The HTTP status code
 * @returns {string|undefined} The associated reason phrase (e.g. "Bad Request", "OK")
 * */
export function getReasonPhrase(statusCode: (number | string)): (string|undefined) {
  return statusCodeToReasonPhrase[statusCode.toString()];
}

/**
 * Returns the reason phrase for the given status code.
 * If the given reason phrase does not exist, undefined is returned.
 *
 * @param {string} reasonPhrase The HTTP reason phrase (e.g. "Bad Request", "OK")
 * @returns {string|undefined} The associated status code
 * */
export function getStatusCode(reasonPhrase: string): (number|undefined) {
  return reasonPhraseToStatusCode[reasonPhrase];
}

export {
  StatusCodes,
  ReasonPhrases,
};

// Default exports are deprecated, but maintained for v1 compatability
const defaultExports:Record<string, any> = {};

// Exporting constant to code directly to maintain compatability with v1
Object.entries(StatusCodes).forEach(([key, value]) => {
  defaultExports[key] = value;
});

// Exporting getStatusText and getStatusCode directly to maintain compatability with v1
defaultExports.getStatusText = getReasonPhrase;
defaultExports.getStatusCode = getStatusCode;

export default defaultExports;
