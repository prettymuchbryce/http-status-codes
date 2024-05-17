import {
  statusCodeToReasonPhrase,
  reasonPhraseToStatusCode,
} from './utils';

const getDefaultFallback = (message: string) => <T>(param?: T): any => {
  if (!param) {
    throw new Error(`${message} ${param}`);
  }

  return param;
}

const defaultReasonPhraseFallback = getDefaultFallback(`Status code does not exist:`);

const defaultStatusCodeFallback = getDefaultFallback(`Reason phrase does not exist:`);

/**
 * Returns the reason phrase for the given status code.
 * If the given status code does not exist, a fallback function is called passing the status code provided,
 * which by default throws an error indicating that the status code it's missing.
 *
 * @param {number|string} statusCode The HTTP status code
 * @param {function} [fallback] Optional fallback function that it's called if the status code is missing 
 * @returns {string} The associated reason phrase (e.g. "Bad Request", "OK")
 * */
export function getReasonPhrase(statusCode: (number | string), fallback = defaultReasonPhraseFallback): (string) {
  const result = statusCodeToReasonPhrase[statusCode.toString()];

  return result ? result : fallback(statusCode);
}

/**
 * Returns the status code for the given reason phrase.
 * If the given reason phrase does not exist, a fallback function is called passing the reason phrase provided,
 * which by default throws an error indicating that the reason code it's missing.
 *
 * @param {string} reasonPhrase The HTTP reason phrase (e.g. "Bad Request", "OK")
 * @param {function} [fallback] Optional fallback function that it's called if the reason phrase is missing
 * @returns {string} The associated status code
 * */
export function getStatusCode(reasonPhrase: string, fallback = defaultStatusCodeFallback): (number) {
  const result = reasonPhraseToStatusCode[reasonPhrase];

  return result ? result : fallback(reasonPhrase);
}

/**
 * @deprecated
 *
 * Returns the reason phrase for the given status code.
 * If the given status code does not exist, undefined is returned.
 *
 * Deprecated in favor of getReasonPhrase
 *
 * @param {number|string} statusCode The HTTP status code
 * @returns {string|undefined} The associated reason phrase (e.g. "Bad Request", "OK")
 * */
export const getStatusText = getReasonPhrase;
