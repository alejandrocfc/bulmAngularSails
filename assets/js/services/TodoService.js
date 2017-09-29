todoApp.service('TodoService', function($http, $q) {
  return {
    'getTodos': function() {
      var defer = $q.defer();
      $http.get('/product/getProducts').then(function(resp){
        defer.resolve(resp);
      }, function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addTodo': function(todo) {
      console.log(todo);
      var defer = $q.defer();
      $http.post('/todo/addTodo', todo).then(function(resp){
        defer.resolve(resp);
      }, function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeTodo': function(todo) {
      console.log(todo);
      var defer = $q.defer();
      $http.post('/todo/removeTodo', todo).then(function(resp){
        defer.resolve(resp);
      }, function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addProduct': function(data, id) {
      console.log(data);
      var defer = $q.defer();
      $http.post('/product/addProduct', {data:data,id:id}).then(function(resp){
        defer.resolve(resp);
      }, function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }})
