# msg-generator
Randomly generate a legitimate message based on a given type. 

We need the your *collaborative effort*  in order to improve this. So, please do **contribute** to this project by adding your best messages to `messages/[anytype].js`. ([details about contributing](#contributing))

## Install
```bash
npm install msg-generator --save
```

## Usage
```js
var msg_generate = require('msg-generator');
// msg_generate(type1, type2, type3...)
console.log( msg_generate('success') );
// Output: Oh baby, you made it.
console.log( msg_generate('success', 'failure_offensive') );
// Output: Are you fucking idiot sandwich? It fails again! It's fucking raw!
```

### List of types (please contribute)
All types are listed in `types.json` and refer to the corresponding message file `messages/[type].js`. 
- success
  - success_formal
  - success_troll
- failure
  - failure_formal
  - failure_troll
  - failure_offensive

## Contributing
This is probably the easiest project that you can ever contribute to. 

### Adding new messages
1. Be creative think of some messages.
2. Add your message to `messages/[type].js`.
3. Submit your pull request.

***The only rule***:
*Messages must deliver the intended meaning ***clearly*** based on the type.*

### Adding new type
1. Add your type to `types.json`.
2. Add `messages/[type].js` which specifies the messages.
  Example `messages/[type].js`:
  ```
  module.exports = [ 
    "Example message 1.",
    "Usually a message with a period(full stop)."
  ];
  ```
3. Submit your pull request.

### Testing
```bash
npm run test
```

### License
MIT
