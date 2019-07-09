import TErrorCurrying from './TErrorCurrying';
import DefaultErrorsList from './DefaultErrorsList';

export default class TErrorGroup {
  constructor(params, errorsList) {
    this.type = params.type || 'GLOBAL_ERROR';
    this.errorsList = {...errorsList, ...DefaultErrorsList} || DefaultErrorsList;
    this.logger = null;
  }

  setLogger(fn) {
    this.logger = fn;
    return this;
  }

  create(errorType = 'UNKNOWN_ERROR') {
    const { logger, type, errorsList } = this;

    const groupParams = {
      type, logger
    };

    const errorParams = errorsList[errorType];

    if (!errorParams) {
      throw new Error(`Error ${errorType} is missing in errors list.`)
    }

    return TErrorCurrying(groupParams, errorsList[errorType])
  }
}


//ERROR_GROUP INTERFACE
/*
type - ТИП ГРУППЫ ОШИБОК (Прим. GLOBAL_ERROR, CLIENT_ERROR, SERVE_ERROR, и т.д)
logger функция принимающая параметром ошибку.
errorsList - белый список ошибок

 */
