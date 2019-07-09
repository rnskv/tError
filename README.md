[![Build Status](https://travis-ci.org/rnskv/tError.svg?branch=master)](https://travis-ci.org/rnskv/tError)
<h1>tError</h1>

Extended from common error, class TError allows create and cofigurate custom errors. Error's configuration allow using logging, user alert, debugging simple and fast.

<h1>Why?</h1>

Because i want unify work with errors. Make it simple and clean.
<h1>Installing</h1>
  <h3>In terminal:</h3>
  <code>
   $ npm install @rnskv/terror
  </code>
  <h3>In code:</h3>
  
  ```
  import { TErrorGroup } from '@rnskv/terror';
  ```
  
<h1>Setup</h1>
  <h3>For working with errors you must did next steps:</h3>
  
  * Create errors white list;
  * Create Errors Groups, using list from 1 step;
  * Generate new errors in your code :).
  
  <h3>First</h3>
 <p>For example, create list with 404 and 500 errors codes. It's object where key is error's name, value - object with next fields: message, status, code.</p>
 
  ```
  const errorsList = {
    PAGE_NOT_FOUND: {
      message: 'Page not found :(', //Message for user
      name: 'REQUEST_ERROR', //Name for logging
      code: 404 //HTTP code
    },
    INTERNAL_SERVER_ERROR: {
      message: 'Internal Server Error', //Message for user
      name: 'RESPONSE_ERROR', //Name for logging
      code: 500 //HTTP code
    }
  };
  ```
  <h3>Second</h3>
  <p>Next create new Errors Group. You must specify type!</p>
  
  ```
  const params = {
    type: 'SERVER_ERROR'
  };
  
  const ServerErrors = new TErrorGroup(params, errorsList)
  ```
  <p>Great! Now you have new Errors Group and you can generate new errors.</p>
  
  <h3>Third</h3>
  <p>It's simple :)</p>
  
  ```
    try {
      throw ServerErrors.create('PAGE_NOT_FOUND');
      // Or
      throw ServerErrors.create('INTERNAL_SERVER_ERROR');
    } catch(error) {
      console.log('Catch error:', error)
    }
  ```
  
  <h1>Logging</h1>
  
  <p>You can connect your logger function to Errors Group. For example, use console.error. Connect it to ServerErrors.</p>
  
  ```
  ServerErrors.setLogger(console.error);
  ```
  <p>Now every errors throw in this group will call console.error.</p>

