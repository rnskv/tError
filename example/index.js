import { TErrorGroup } from '../package/index.js';

const errorsList = {
  PAGE_NOT_FOUND: {
    message: 'Page not found :(', //Message for user
    name: 'REQUEST_ERROR', //name for logging
    code: 404 //HTTP code
  }
};

const params = {
  type: 'SERVER_ERROR'
};


const ServerError = new TErrorGroup(params, errorsList).setLogger(console.error);

try {
  throw ServerError.create('PAGE_NOT_FOUND');
} catch(err) {
  console.log('Catch error:', err)
}

