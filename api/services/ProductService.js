
module.exports = {
  getProducts: function(next) {
    Product.find()
      .populate('userId')
      .exec(function(err, todos) {
      if(err) throw err;
      next(todos);
    })
  },
  addProduct: function(product, id, next) {
    Product.create({
      detail : product.description,
      name: product.name,
      min: product.min,
      max: product.max,
      type: product.type,
      userId: id
    }).exec(function(err, todo) {
      if(err) throw err;
      next(todo);
    })
  },
  removeProduct: function(todoVal, next) {
    Product.destroy({value: todoVal}).exec(function(err, todo) {
      if(err) throw err;
      next(todo);
    })
  }
}
