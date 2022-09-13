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
* `fname(str: string)`
    > Breaks fullname into 3 parts (firstname, middlename, lastname). Returns an object with keys (first, middle, last). Automatically removes all extra spaces and converts all letters to lowercase.
    ```js
    const fullname = ' Mike  John  Doe   Ali  ';
    const output = fname(fullname);
    console.log(output) 
    // output ⬇️
    {
        first: 'mike',
        middle: 'john doe',
        last: 'ali'
    }
