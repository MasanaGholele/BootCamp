"use strict";
const messageModule = require("./messages");
messageModule.messages.forEach(m => console.log(m));

// look for a module called messages.js within your project directory and allows code within printMessages.js
// to use any properties on the exports object in messages.js.