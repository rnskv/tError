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

it('TErrorGroup generate error correctly without params', () => {
  const error = new TErrorGroup();

  expect(error.create).toThrow()
});

it('TErrorGroup error with undefined name', () => {
  const error = new TErrorGroup();
  const errorType = 'ABCD';

  function create() {
    error.create(errorType);
  }

  expect(create).toThrow(new Error(`Error ${errorType} is missing in errors list.`))
});
