/**
 * TodoController
 *
 * @description :: Server-side logic for managing Todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getTodos: function(req, res) {
    TodoService.getTodos(function(todos) {
      res.json(todos)
    })
  },
  addTodo: function(req, res) {
    console.log(req.body);
    var todoVal = (req.body) ? req.body : undefined;
    TodoService.addTodo(todoVal, function(success) {
      res.json(success)
    })
  },
  removeTodo: function(req, res) {
    var todoVal = (req.body.value) ? req.body.value : undefined;
    TodoService.removeTodo(todoVal, function(success) {
      res.json(success)
    })
  },
  uploadImage: function (req, res) {
    req.file('file').upload({
      adapter: require('skipper-gridfs'),
      uri: 'mongodb://localhost:27017/partner.images'
    }, function (err, uploadedImages) {
      if (err) return res.negotiate(err);
      return res.ok({
        files: uploadedImages,
        textParams: req.params.all()
      });
    });
    /*req.file('file').upload(function (err, files) {
      if (err)
        return res.serverError(err);

      return res.json({
        message: files.length + ' file(s) uploaded successfully!',
        files: files
      });
    });*/
  }
};

