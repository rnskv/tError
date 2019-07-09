[![Build Status](https://travis-ci.org/rnskv/tError.svg?branch=master)](https://travis-ci.org/rnskv/tError)
# tError

Extended from common error, class TError allows create and cofigurate custom errors. Error's configuration allow using logging, user alert, debugging simple and fast.

# Why?

Because i want unify work with errors. Make it simple and clean.
# Installing
  <h3>In terminal:</h3>
  <code>
   $ npm install @rnskv/terror
  </code>
  <h3>In code:</h3>
  
  ```
  import { TErrorGroup } from '@rnskv/terror';
  ```
  
# Setup #
  ### For working with errors you must did next steps: ###
  * Create errors white list;
  * Create Errors Groups, using list from 1 step;
  * Generate new errors in your code :).
  
  ### First ###
 <p>For example, create list with 404 error. It's object where key is error's name, value - object with next fields: message, status, code.</p>
 
  ```
  const errorsList = {
    PAGE_NOT_FOUND: {
      message: 'Page not found :(', //Message for user
      status: 'REQUEST_ERROR', //Status for logging
      code: 404 //HTTP code
    }
  };
  ```
  ### Second ###
  <p>Next create new Errors Group. You must specify type!</p>
  
  ```
  const params = {
    type: 'SERVER_ERROR'
  };
  
  const ServerErrors = new TErrorGroup(params, errorsList)
  ```
  <p>Great! Now you have new Errors Group and you can generate new errors.</p>
  
  ### Third ###
  <p>It's simple :)</p>
  
  ```
    try {
      throw ServerErrors.create('PAGE_NOT_FOUND');
    } catch(err) {
      console.log('Catch error:', err)
    }
  ```
  
  # Logging
  <p>You can connect your logger function to Errors Group. For example, use console.error. Connect it to ServerErrors.</p>
  
  ```
  ServerError.setLogger(console.error);
  ```
  <p>Now every errors throw in this group will call console.error.</p>

