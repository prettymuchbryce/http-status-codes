import legacyCodes from './legacy';

import {
  getStatusCode,
  getStatusText,
} from './utils-functions';

import * as _StatusCodes from './status-codes';
import * as _ReasonPhrases from './reason-phrases';

export {
  getStatusCode,
  getReasonPhrase,
  getStatusText,
} from './utils-functions';

export const StatusCodes = _StatusCodes;
export type StatusCodes = typeof StatusCodes[keyof typeof StatusCodes];
export const ReasonPhrases = _ReasonPhrases;
export type ReasonPhrases = typeof ReasonPhrases[keyof typeof ReasonPhrases];

export * from './legacy';

export default {
  ...legacyCodes,
  getStatusCode,
  getStatusText,
};
