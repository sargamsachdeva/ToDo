<!DOCTYPE html>
<html lang="en" ng-app="toDoApp">
<head>
    <meta charset="UTF-8">
    <title>TODO App</title>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="grails-app/assets/stylesheets/todo.css">
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script
            src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"
            integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E="
            crossorigin="anonymous"></script>
    <script src="node_modules/angular/angular.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <asset:javascript src="app/app.js"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<div class="container" ng-controller="ToDoController">
    <div class="jumbotron todo-header">
        <h1>TODO App</h1>
    </div>
    <div class="col-md-6">
        <div class="panel panel-default">
            <div class="panel-heading todo-heading">
                <span class="panel-title">Login</span>
            </div>
            <div class="panel panel-body todo-body">
                <form class="form-horizontal" name="todoForm" id="todoForm">
                    <div class="form-group"
                         ng-class="{ 'has-error' : todoForm.todo.$invalid}">
                        <label for="todo" class="control-label col-xs-3">Email:-</label>
                        <div class="col-xs-6 col-xs-offset-1">
                            <input type="text" class="form-control" name="todo" ng-model="todo.email" id="todo"
                                   placeholder="Email" ng-required="true" type="email">
                        </div>
                    </div>
                    <div class="col-xs-offset-4 col-md-6">
                        <button class="btn btn-block btn-success" type="submit" ng-disabled="todoForm.$invalid">Login
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading todo-heading">
                <span class="panel-title">Add ToDo</span>
            </div>
            <div class="panel panel-body todo-body">
                <form class="form-horizontal" name="todoForm">
                    <div class="form-group"
                         ng-class="{ 'has-error' : todoForm.todo.$invalid}">
                        <label for="todo" class="control-label col-xs-3">Title:-</label>
                        <div class="col-xs-6 col-xs-offset-1">
                            <input type="text" class="form-control" name="todo-title" ng-model="todo.title" id="todo-title"
                                   placeholder="Todo Tasks" ng-minlength="3" ng-required="true">
                            <p ng-show="todoForm.todo-title.$error.minlength" class="help-block">Todo length is too short.</p>
                        </div>
                    </div>
                    <div class="col-xs-offset-4 col-md-6">
                        <button class="btn btn-block btn-success" type="submit" ng-disabled="todoForm.$invalid">Add
                        </button>
                    </div>
                </form>
            </div>
        </div>



    </div>

</div>
</body>
</html>