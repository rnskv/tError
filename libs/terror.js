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
  constructor(params) {
    this.type = params.type || 'GLOBAL_ERROR';
    this.logger = null;
  }

  setLogger(fn) {
    this.logger = fn;
    return this;
  }

  create(params) {
    const { logger, type } = this;

    const groupParams = {
      type, logger
    };

    return TErrorCurrying(groupParams, params)
  }
}

export default TErrorGroup;
