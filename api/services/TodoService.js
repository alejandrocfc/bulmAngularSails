
module.exports = {
  getTodos: function(next) {
    Todo.find().exec(function(err, todos) {
      if(err) throw err;
      next(todos);
    })
  },
  addTodo: function(todoVal, next) {
    console.log(todoVal);
    /*var query = {
      description : todoVal.description,
      name : todoVal.name,
      phone : todoVal.phone,
      email : todoVal.email,
      website : todoVal.website,
      address : todoVal.address,
      city : todoVal.city,
      state : todoVal.state,
      country : todoVal.country
    };*/
    Todo.create({
      description : todoVal.description,
      name : todoVal.name,
      phone : todoVal.phone,
      email : todoVal.email,
      website : todoVal.website,
      address : todoVal.address,
      city : todoVal.city,
      state : todoVal.state,
      country : todoVal.country
    }).exec(function(err, todo) {
      if(err) throw err;
      next(todo);
    })
  },
  removeTodo: function(todoVal, next) {
    Todo.destroy({value: todoVal}).exec(function(err, todo) {
      if(err) throw err;
      next(todo);
    })
  }
}
