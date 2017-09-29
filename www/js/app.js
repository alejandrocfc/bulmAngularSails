'use strict';

var todoApp = angular.module('todoApp', ['ngFileUpload','ngRoute']);
todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/todo.html',
      controller: 'TodoCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);

todoApp.controller('TodoCtrl', ['$scope', '$rootScope', 'TodoService', 'Upload', function($scope, $rootScope, TodoService, Upload) {
  $scope.formData = {};
  $scope.form = {};
  $scope.todos = [];

  /*TodoService.getTodos().then(function(response) {
    console.log(response);
    $scope.todos = response;
  });*/

  $scope.submit = function () {
    $scope.form.address = document.getElementById('route').value + document.getElementById('street_number').value;
    $scope.form.city = document.getElementById('locality').value;
    $scope.form.state = document.getElementById('state').value;
    $scope.form.country = document.getElementById('country').value;
    //console.log($scope.form);
    if (!($scope.form.description.length > 450)){
      TodoService.addTodo($scope.form).then(function(response) {
        console.log(response);
      })
    }
  };

  $scope.toDB = function (file) {
    $scope.uploading = true;
    console.log("iniciando subida de la imagen");
    if (!file) return;

    // usamos el motodo guid para evitar tener nombres de imagenes repetidos
    console.log(file);
    console.log("Terminando la subida de la imagen");

    /*var upload = Upload.upload({
      url: '/todo/uploadImage',
      file: file
    });

    upload.then(function (data) {
      console.log('DATA');
      console.log(data);
    }, function (resp) {
      console.log('Error status: ' + resp.status);
    }, function (evt) {
      var progressPercentage = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    });*/
    Upload.upload({
      url: '/todo/uploadImage',
      data: {file: file, id: 'asd'}
    }).then(function (resp) {
      console.log('Success uploaded. Response: ');
      console.log(resp.data);
    }, function (resp) {
      console.log('Error status: ' + resp.status);
    }, function (evt) {
      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
      console.log('progress: ' + progressPercentage + '% ');
    });
  };

  $scope.removeTodo = function(todo) {
    console.log(todo);
    TodoService.removeTodo(todo).then(function(response) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1)
      console.log(response);
    })
  }

  $scope.upload = function (files) {

    if (!files || files[0] === undefined) return;

    $scope.file = files[0];
  };

}])
