/**
 * ProductController
 *
 * @description :: Server-side logic for managing Products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getProducts: function(req, res) {
    ProductService.getProducts(function(todos) {
      res.json(todos)
    })
  },
  addProduct: function(req, res) {
    console.log(req.body);
    var product = (req.body.data) ? req.body.data : undefined;
    var id = (req.body.id) ? req.body.id : undefined;
    ProductService.addProduct(product, id, function(err, success) {
      if(err) res.json(err);
      res.json(success)
    })
  },
  removeProduct: function(req, res) {
    var todoVal = (req.body.value) ? req.body.value : undefined;
    ProductService.removeProduct(todoVal, function(success) {
      res.json(success)
    })
  },

};

