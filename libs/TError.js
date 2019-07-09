export default class TError extends Error {
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
