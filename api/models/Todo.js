/**
 * Todo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    description: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    phone: {
      type: 'integer'
    },
    email: {
      type: 'string'
    },
    website: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    country: {
      type: 'string'
    }

  }
};

