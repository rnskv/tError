import TErrorCurrying from './TErrorCurrying';
import DefaultErrorsList from './DefaultErrorsList';

const DEFAULT_PARAMS = {
  groupType: 'GLOBAL_ERROR',
  errorType: 'UNKNOWN_ERROR'
};


export default class TErrorGroup {
  constructor(params = {}, errorsList = {}) {
    this.type = params.type || DEFAULT_PARAMS.groupType;
    this.errorsList = {...errorsList, ...DefaultErrorsList} || DefaultErrorsList;
    this.logger = null;
    this.handler = null;
  }

  setLogger(fn) {
    this.logger = fn;
    return this;
  }

  setHandler(fn) {
    this.handler = fn;
    return this;
  }

  create(errorType = DEFAULT_PARAMS.errorType) {
    const { logger, handler, type, errorsList } = this;

    const groupParams = {
      type, logger, handler
    };

    const errorParams = errorsList[errorType];

    if (!errorParams) {
      throw new Error(`Error ${errorType} is missing in errors list.`)
    }

    return TErrorCurrying(groupParams, errorsList[errorType])
  }
}
