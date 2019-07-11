import { TError } from '../libs';
import { TErrorGroup } from '../libs';


it('TErrorGroup generate error correctly with params', () => {
  const errorsList = {
    PAGE_NOT_FOUND: {
      message: 'Page not found :(', //Message for user
      status: 'REQUEST_ERROR', //Status for logging
      code: 404 //HTTP code
    }
  };

  const params = {
    type: 'SERVER_ERROR'
  };

  const error = new TErrorGroup(params, errorsList);

  expect(error.create).toThrow()
});

it('TErrorGroup generate error with true params', () => {
  const errorsList = {
    PAGE_NOT_FOUND: {
      message: 'Page not found :(', //Message for user
      name: 'REQUEST_ERROR', //Status for logging
      code: 404 //HTTP code
    }
  };

  const params = {
    type: 'SERVER_ERROR'
  };

  const error = new TErrorGroup(params, errorsList);
  const result = error.create('PAGE_NOT_FOUND');

  expect(result.message).toBe(errorsList.PAGE_NOT_FOUND.message);
  expect(result.name).toBe(errorsList.PAGE_NOT_FOUND.name);
  expect(result.code).toBe(errorsList.PAGE_NOT_FOUND.code);
});

it('TErrorGroup generate error correctly without params', () => {
  const error = new TErrorGroup();

  expect(error.create).toThrow()
});


it('TErrorGroup error with undefined name', () => {
  const error = new TErrorGroup();
  const errorType = 'ABCD';

  const create = function() {
    error.create(errorType);
  };

  expect(create).toThrow(new Error(`Error ${errorType} is missing in errors list.`))
});

it('TErrorGroup must set logger', () => {
  const error = new TErrorGroup();
  const fn = () => {};
  error.setLogger(fn);

  expect(error.logger).toEqual(fn)
});

it('TErrorGroup must set handler', () => {
  const error = new TErrorGroup();
  const fn = () => {};
  error.setHandler(fn);

  expect(error.handler).toEqual(fn)
});
