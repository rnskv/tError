import { TErrorGroup } from '../libs/terror';

const PAGE_NOT_FOUND = {
  message: 'Page not found :(', //Message for user
  status: 'REQUEST_ERROR', //Status for logging
  code: 404 //HTTP code
};

const defaultParams = {
  type: 'CLIENT_ERROR'
};

const ClientError = new TErrorGroup(defaultParams).setLogger((err) => { console.log('Log: ', err) });

try {
  throw ClientError.create(PAGE_NOT_FOUND);
} catch(err) {
  console.log('Мирно говорим пользователю что произошла ошибка', err)
}

