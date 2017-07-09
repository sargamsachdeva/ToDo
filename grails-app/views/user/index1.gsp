<!DOCTYPE html>
<html lang="en" ng-app="toDoApp">
<head>
    <meta charset="UTF-8">
    <title>TODO App</title>
    <asset:stylesheet href="bootstrap.css"/>
    <asset:stylesheet href="bootstrap-theme.min.css"/>
    <asset:stylesheet href="font-awesome.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <asset:stylesheet href="style.css"/>
    <asset:javascript src="jquery-2.2.0.min.js"/>
    <asset:javascript src="angular.min.js"/>
    <asset:javascript src="app/app.js"/>
    <asset:javascript src="bootstrap.js"/>
    <asset:javascript src="app/controllers/UserController.js"/>
    <asset:javascript src="app/controllers/LoginController.js"/>
    <asset:javascript src="app/controllers/DashboardController.js"/>
    <asset:javascript src="app/service/UserService.js"/>
    <asset:javascript src="app/service/ToDoService.js"/>
    <asset:javascript src="app/service/LoginService.js"/>
    <asset:javascript src="app/angular-ui-router.js"/>
    <asset:javascript src="app/angular-ui-router.min.js"/>
    <asset:javascript src="app/sortable.js"/>
    <asset:javascript src="app/angular-resource.js"/>
    <asset:javascript src="app/angular-resource.min.js"/>
    <script
            src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"
            integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E="
            crossorigin="anonymous"></script>

    <script>

    var userData = {
        loggedInEmail: "${raw(loggedInEmail)}"
    }

</script>
</head>
<body>

    <nav class="navbar navbar-inverse" role="navigation">
        <div class="navbar-header">
            <a class="navbar-brand" ui-sref="#">TODO Application</a>
            <a class="navbar-brand pull-right" ui-sref="login1">Login</a>
        </div>
    </nav>

<div class="container">
%{--content injected here--}%
    <div class="jumbotron todo-header" style="background-color: #1b6d85">
        <h1 style="margin-left: 250px">ToDo App</h1>
    </div>

  %{--  <div>
        ${(loggedInEmail)}
    </div>--}%

    <ui-view></ui-view>
</div>
    %{--<a ui-sref="login1">Login</a>
    <ui-view></ui-view>
--}%    %{--<ui-view></ui-view>--}%
%{--<div ui-view="dashboard"></div>--}%
   %{-- <div class="jumbotron todo-header">
        <h1>TODO App</h1>
    </div>--}%
  %{--  <div class="col-md-6">
        <div class="panel panel-default">
            <div class="panel-heading todo-heading">
                <span class="panel-title">Login</span>
            </div>
            <div class="panel panel-body todo-body">
                <a ui-sref="dashboard">dashboard</a>
                <form class="form-horizontal" name="todoForm" id="todoForm" >
                    <div class="form-group" ng-class="{ 'has-error' : todoForm.email.$invalid}">
                        <label for="email" class="control-label col-xs-3">Email:-</label>
                        <div class="col-xs-6 col-xs-offset-1">
                            <input type="text" class="form-control" name="email" ng-model="email" id="email"
                                   placeholder="Email" ng-required="true" type="email" ng-hide="loggedInEmail">
                            <p class="form-control-static" ng-show="loggedInEmail">{{loggedInEmail}}</p>
                        </div>
                    </div>
                    <div class="col-xs-offset-4 col-md-6" ng-hide="loggedInEmail">
                        <button class="btn btn-block btn-success" type="submit" ng-click="login()" ui-view="dashboard" ng-disabled="todoForm.$invalid">Login
                        </button>
                    </div>
                    <div class="col-xs-offset-4 col-md-6" ng-show="loggedInEmail">
                        <button class="btn btn-block btn-danger" type="submit" ng-click="logout()" >Logout
                        </button>
                    </div>
                </form>
            </div>
        </div>
--}%



        %{-- <div class="panel panel-default">
             <div class="panel-heading todo-heading">
                 <span class="panel-title">Add ToDo</span>
             </div>
             <div class="panel panel-body todo-body">
                 <form class="form-horizontal" name="todoForm1" id="todoForm1" ng-submit="add()">
                     <div class="form-group"
                          ng-class="{ 'has-error' : todoForm1.title.$invalid}">
                         <label for="title" class="control-label col-xs-3">Title:-</label>
                         <div class="col-xs-6 col-xs-offset-1">
                             <input type="text" class="form-control" name="title" ng-model="title1" id="title"
                                    placeholder="Todo Tasks" ng-minlength="4" ng-required="true">

                             <p ng-show="todoForm1.todo-title.$error.minlength" class="help-block">Todo length is shorter than required</p>
                         </div>
                     </div>
                     <div class="col-xs-offset-4 col-md-6">
                         <button class="btn btn-block btn-success" type="submit" ng-disabled="todoForm1.$invalid">Add
                         </button>
                     </div>
                 </form>
             </div>
         </div>
 --}%
    %{--</div>--}%

   %{-- <div class="todo-wrapper">
        <h2>You've got <span class="emphasis">{{getTotalTodos()}}</span> things to do</h2>
    </div>
--}%

    %{--<div class="col-xs-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <span class="panel-title">My Todos</span>
            </div>
            <div class="panel-body" ui-sortable="sortableOptions" ng-model="todoList">
            <div ng-repeat="todo in todoList track by $index">
       --}%%{-- <input type="checkbox" ng-model="x.done"> <span ng-bind="x.todoText"></span>
            <button ng-click="delete()">x</button>--}%%{--

                <div ng-if="!todo.read">
                <div class="well">
                    <div ng-hide="todo.editTask">
                        <div class="row">
                            <span class="pull-left" ng-bind="todo.todoText"></span>
                            <a ng-click="delete(todo)" class="fa fa-trash pull-right fa-lg"
                               aria-hidden="true"
                               title="Delete"></a>
                        </div>

                        <div class="row">
                            <span ng-hide="todo.read">
                                <a ng-click="todo.read=true" title="UnRead"><span class="fa fa-square-o"></span></a>
                            </span>
                            <span ng-show="todo.read">
                                <a ng-click="todo.read=false" title="Read" ><span class="fa fa-check-square"></span></a>
                            </span>
                            {{title}}

                            <a ng-click="todo.editTask=true" class="fa fa-pencil-square fa-lg pull-right"
                               aria-hidden="true" title="Edit"> </a>
                        </div>

--}%%{--
                        <div class="row" >
                            <span ng-hide="todo.read">
                            <input type="checkbox" ng-model="todo.read.value1" title="UnRead">
                        </span>

                        <span ng-show="todo.read">
                            <input type="checkbox" ng-model="todo.read.value2" title="Read">
                        </span>
                        {{title}}

                        <a ng-click="todo.editTask=true" class="fa fa-pencil-square fa-lg pull-right"
                           aria-hidden="true" title="Edit"> </a>
                    </div>
--}%%{--
                    </div>

                    <div ng-show="todo.editTask">
                        <form ng-submit="todo.editTask = false" name="editTodo" class="editForm form-group">

                            <input type="text" ng-model="title" value={{title1}} placeholder={{title1}}
                                    class="form-control form-group"
                                   ng-required="true"
                                   id="title-todo">
                            <button class="btn btn-success btn-block" type="submit">Edit</button>
                        </form>
                    </div>
                </div>
                    </div>
           </div>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading custom-heading">
                <span class="panel-title">Done Todos</span>
            </div>

            <div class="panel-body custom-body">
                <div ng-repeat="todo in todoList track by $index">

                    <div ng-if="todo.read">

                            <div ng-hide="todo.editTask">
                                <div class="row">
                                    <span class="pull-left" ng-bind="todo.todoText"></span>
                                    <a ng-click="delete(todo)" class="fa fa-trash pull-right fa-lg" aria-hidden="true"
                                       title="Delete"></a>
                                </div>
                                <div class="row">
                                    <span ng-hide="todo.read">
                                        <a ng-click="todo.read=true" ng-model="todo.read" title="UnRead"><span class="fa fa-square-o"></span></a>
                                    </span>
                                    <span ng-show="todo.read">
                                        <a ng-click="todo.read=false" title="Read"><span class="fa fa-check-square"></span></a>
                                    </span>
                                    {{title }}
                                </div>

--}%%{--
                                <div class="row">
                                    <span ng-show="todo.read">
                                        <input type="checkbox"  ng-model="todo.read.value1" title="UnRead">
                                        <span>{{todo.read.value1}}</span>
                                    </span>

                                    <span ng-hide="todo.read">
                                        <input type="checkbox" ng-model="todo.read.value2"
                                               title="Read">
                                    </span>
                                    {{title}}

                                    <a ng-click="todo.editTask=true" class="fa fa-pencil-square fa-lg pull-right"
                                       aria-hidden="true" title="Edit"> </a>
                                </div>
--}%%{--
                            </div>

                    </div>
                </div>
            </div>
        </div>

    </div>--}%

</body>
</html>