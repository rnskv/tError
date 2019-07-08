export class TError extends Error {
  constructor(params) {
    const {
      message = `Ooops. It's TError`,
      code = 500,
      status = 'SERVER_ERROR'
    } = params;

    super(message);

    const { logger, ...groupParams} = params.groupParams;

    this.groupParams = groupParams;

    this.message = message;
    this.code = code;
    this.status = status;

    this.callLogger(logger);

    Error.captureStackTrace(this, TError);
  }

  callLogger(logger) {
    logger(this);
  }
}

const TErrorCurrying = (groupParams, params) => {
  return new TError({
    groupParams,
    ...params
  }) ;
};


export class TErrorGroup {
  constructor(params, errorsList) {
    this.type = params.type || 'GLOBAL_ERROR';
    this.errorsList = errorsList || {};
    this.logger = null;
  }

  setLogger(fn) {
    this.logger = fn;
    return this;
  }

  create(errorType) {
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

export default TErrorGroup;
