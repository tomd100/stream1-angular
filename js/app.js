// JavaScript File

angular.module('TodoApp', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage', 'TodoService']); // these are dependencies - adding UserService links the service to the app..?

angular.module('TodoApp')
.config(function ($locationProvider, $routeProvider) {
    
    $locationProvider.html5Mode(true); 

// define routes:
// this is substituting text within the url - making them look more logical and easier to read. 
// the website appears to have a logical structure. 

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .when('/todo',{
            templateUrl: 'templates/todo.html',
            controller: 'TodoController'
        })
        .when('/accounts/register',{
            templateUrl: 'templates/register.html',
            controller: 'RegisterController'
        })
        .when('/todo/edit/:id', {
            templateUrl: 'templates/edit-todo.html',
            controller: 'editTodoController'
        });
// can add extra routes using .when (remember the ;)    
});

