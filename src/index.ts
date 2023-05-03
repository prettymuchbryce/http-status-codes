import legacyCodes from './legacy';

import {
  getStatusCode,
  getStatusText,
} from './utils-functions';

export {
  getStatusCode,
  getReasonPhrase,
  getStatusText,
} from './utils-functions';

export {
  StatusCodes,
} from './status-codes';

export {
  StatusClasses,
} from './status-classes';

export {
  ReasonPhrases,
} from './reason-phrases';

export * from './legacy';

export default {
  ...legacyCodes,
  getStatusCode,
  getStatusText,
};
