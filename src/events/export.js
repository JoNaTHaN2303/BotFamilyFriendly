const Ready = require('./ready');
const Welcome = require('./welcome-message')
const Logging = require('./logging/export')

module.exports = {
  events: {
    Ready,
    Welcome,
    Logging,
  },
};
