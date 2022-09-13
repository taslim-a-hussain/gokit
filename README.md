# gokit
Handy functions

## Import 
### CJS
```JS
// Default import
const gokit = require('gokit');

// Named import
const {cap} = require('gokit');
```
### ESM
```JS
// Default import
import gokit from 'gokit';

// Named import
import {cap} from 'gokit';
```

## Functions
* `cap(str:string)`
    > Converts first letter to uppercase
    ```js
    const str = 'some string';
    const output = cap(str);
    console.log(output); // Some string
    ```
* `ftrim(str: string)`
    > Removes all extra spaces
    ```js
    const str = '  some     string   ';
    const output = ftrim(str);
    console.log(output); // some string
    ```
* `fcap(str: string)`
    > Automatically removes all extra spaces and converts first letter of each string to uppercase
    ```js
    const str = '  some     string   ';
    const output = ftrim(str);
    console.log(output); // Some String
    ```
