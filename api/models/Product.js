/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    detail: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    min: {
      type:'integer'
    },
    max: {
      type:'integer'
    },
    // This defines one-half of our association between idea and
    //  user.  This is the 'one' side of the 'one-to-many'
    //  relationship.  An idea will be associated with only one user.
    userId: {
      model: 'todo'
    }
  }
};

