# pro-validator

better enterprise validator framworks

## Base on validator.js

Secondary development based on [validator.js](https://www.npmjs.com/package/validator). 

So, this package supports most capabilities of [validator.js](https://www.npmjs.com/package/validator) .

## Why

First of all, let me explain why I created this package. Please think about this question: '**What scenarios do you use validator for?**'

> The first thing that comes to mind must be **form**.

However, when we use validator in form, we alse need a error messgae in validator callback. Just like:

> Please enter a legitimate email address.

And when we implement a form, we always use some ui component libraries. just like: [Ant Design](https://www.antdv.com/components/form). In the process of using it, we will find: 

> There are differences in the definition of validator between the UI component library and the validator library. 

Validator  libraries export               | UI components need
----------------------------------------  | ------------------------------------
validator.isXXX: return true or false     | validator.XXX: return error messgae 

So, this package born. By this package, we provide a '**judger**' libarary to determine if a string is compliant and a '**generator**' to custom judger and validator needed for ui components.

## How to use

### Judger

have access to methods starting with 'is' in [validator.js](https://www.npmjs.com/package/validator).

extra methods:
- isLatitude(str)
- isLongitude(str)
- isName(str, options)

options of isName:
name            | desc             | default value
--------------- | ---------------- | ----------------
min             | min length       | 0
max             | max length       | Infinity
white           | white list       | []
black           | black list       | []
caital          | A-Z              | true
lowercase       | a-z              | true
number          | 0-9              | true
chinese         | Chinese characters：\\u4e00\-\\u9fa5 | true

```javascript
import { judger } from 'pro-validator';
judger.isEmail('1234567890'); // false
```

### Generator

Use as follows：
```javascript
import { judger, generator } from 'pro-validator';
const configs = {
  judger: [{
    name: 'isName8To64',
    func: (str) => judger.isName(str, { min: 8, max: 64 })
  }
  }],
  validator: [{
    name: 'name8To64',
    judgers: ['isName8To64'], // Support for multiple judgers
    messages: ['Please try again!'] // Support for multiple error messages, Need to correspond with judgers One by one
  }]
};
const { judger, validator } = generator(configs);
```