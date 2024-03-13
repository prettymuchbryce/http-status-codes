import legacyCodes from './legacy';

import {
  getStatusCode,
  getStatusText,
  validateStatusCode,
} from './utils-functions';

export {
  getStatusCode,
  getReasonPhrase,
  getStatusText,
  validateStatusCode,
} from './utils-functions';

export {
  StatusCodes,
} from './status-codes';

export {
  ReasonPhrases,
} from './reason-phrases';

export * from './legacy';

export default {
  ...legacyCodes,
  getStatusCode,
  getStatusText,
  validateStatusCode,
};
