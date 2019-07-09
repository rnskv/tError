const DEFAULT_PARAMS = {
  name: 'UNEXPECTED_ERROR',
  message: 'Oooops. Something went wrong :/',
  code: 500,
};

export default class TError extends Error {
  constructor(params) {
    if (!params) {
      throw new Error('Params is required in TError constructor');
    }

    if (!params.groupParams) {
      throw new Error('Params.groupParams is required in TError constructor');
    }

    const {
      message = DEFAULT_PARAMS.message,
      code = DEFAULT_PARAMS.code,
      name = DEFAULT_PARAMS.name
    } = params;

    super(message);

    const { logger, ...groupParams} = params.groupParams;

    this.groupParams = groupParams;

    this.message = message;
    this.code = code;
    this.name = name;

    this.callLogger(logger);

    Error.captureStackTrace(this, this.constructor);
  }

  callLogger(logger) {
    if (logger) {
      logger(this);
    }
  }

  get data() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      groupType: this.groupParams.type,
      stack: this.stack
    };
  }
}
