export default class TError extends Error {
  constructor(params) {
    if (!params) {
      throw new Error('Params is required in TError constructor');
    }

    if (!params.groupParams) {
      throw new Error('Params.groupParams is required in TError constructor');
    }

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
    if (logger) {
      logger(this);
    }
  }
}
