# react-native-polyfill

## Overview
Some JS engines that are targeted by React Native, particularly iOS 8 and, to a lesser extent, Android 6, are missing
some of the new ES2015 functions and they may not be polyfilled by a typical build system.

This leads to errors that look like this:
```
Unhandled JS Exception: undefined is not a function (evaluating ‘Number.parseInt’)
```

A lot of these functions are the ones that existed in prior versions of JavaScript
but were added to the Number object to namespace them.  For example,
```
parseInt('20', 10);  // existing JavaScript function
Number.parseInt('20', 10)  // the 'new' way of accessing the same function as of ES2015
```

## Installing
```
npm install --save react-native-polyfill
```

To use the entire package and mutate the base objects, simply import or require the package:
```
import 'react-native-polyfill';
require('react-native-polyfill');
```

If you only want the Array or Number polyfills, you can include just one:
```
import 'react-native-polyfill/src/Array';
require('react-native-polyfill/src/Array');
```

If you just want a single function or you want to limit the number of changes to
the base object, you can access the functions directly:
```
const includes = require('react-native-polyfill/src/Array/includes');
```

## Methodology
Where available, this project has used the MDN polyfills or a close variation.

## Warning
Importing this package into your project will mutate the prototype of JavaScript's
base objects, if those objects do not already support the functionality. The decision
to mutate these base objects in your code base should not be taken lightly. The polyfills
in this package should be relatively low risk as they do not change prototypes in
JavaScript engines that already implement the functions.

## Polyfilled Functions
### Array
includes

### Number
isInteger
isNaN
isSafeInteger
parseFloat
parseInt

### String
codePointAt

## Resources
More information about this topic can be found at:
http://mcculloughwebservices.com/2016/11/29/adding-support-es2015-number-methods/
