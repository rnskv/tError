# tError

Extended from common error, class TError allows create and cofigurate custom errors. Error's configuration allow using logging, user alert, debugging simple and fast.

# Why?

Because i want unify work with errors. Make it simple and clean.
# Installing
  <h3>In terminal:</h3>
  <code>
    => npm install terror
  </code>
  <h3>In code:</h3>
  
  ```
  import TError from 'terror';

  const CustomError = new TError(/* ERROR_TYPE */)
  ```
  
# Setup

  For working with errors you must create unique error's types for your project.
  <h3>Example:</h3>
  
  <p>src/errors/types.js</p>
  
  ```
  export default const PAGE_NOT_FOUND = {
    message: 'Page not found :(', //Message for user
    status: 'REQUEST_ERROR', //Status for logging
    code: 404 //HTTP code
  }
   ```
   <p>then create your errors group</p>
   
   ``` 
  import { PAGE_NOT_FOUND } from 'src/errors/types;

  loggingHandle = function(error) {
    console.log(`${error.status} - ${Date.now()}; trace: ${error.trace}`)
  };

  allertHandle = function(error) {
    alert(error.message)
  };

  const defaultParams = {
    type: 'CLIENT_ERROR'
  };
    
  const ClientError = new TError(defaultParams);

  ClientError
    .addHandle(loggingHandle)
    .addHandle(allertHandle);

  //or

  ClientError.addHandlers([loggingHandle, allertHandle]); 
   
   ```
   
   
  </code>
  
# Using

<p>
Throwing new error call handlers stack:
</p>

```
/*
  Example with 404.
*/

throw new ClientError(PAGE_NOT_FOUND);
```

