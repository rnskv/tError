import { TErrorGroup } from '../libs/terror';

const PAGE_NOT_FOUND = {
  message: 'Page not found :(', //Message for user
  status: 'REQUEST_ERROR', //Status for logging
  code: 404 //HTTP code
};

const errorsList = {
  PAGE_NOT_FOUND
};

const defaultParams = {
  type: 'CLIENT_ERROR'
};

const logger = (err) => {
  console.log('Log:  Find error in group:', err.groupParams.type, err.stack)
};










const ClientError = new TErrorGroup(defaultParams, errorsList).setLogger(logger);



try {
  throw ClientError.create('PAGE_NOT_FOUND');
} catch(err) {
  console.log('Catch error:', err)
}

