/* Copyright © 2024 Seneca Project Contributors, MIT License. */

const docs = {
  messages: {
    msgGetVal: {
      desc: 'Get a config value by key.'
    },

    msgSetVal: {
      desc: 'Set a config value by key (must exist).'
    },

    msgInitVal: {
      desc: 'Initialise a config value by key (must not exist).'
    },

    msgListVal: {
      desc: 'List config values by query.'
    },

    msgMapVal: {
      desc: 'Get a map of config values by key prefix (dot separated).'
    },
  }
}

export default docs

if ('undefined' !== typeof module) {
  module.exports = docs
}
