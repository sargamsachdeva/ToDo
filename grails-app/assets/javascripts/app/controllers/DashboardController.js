app.controller('DashboardController', ["$scope", "$http", "UserService", "$rootScope","ToDoService", function ($scope, $http, UserService, $rootScope,ToDoService) {


    $scope.userEmail = UserService.getEmail();
    $scope.userPassword = UserService.getPassword();
    $scope.i = 1;
    $scope.todoList = [];
    $scope.read= false;

    $scope.init = function () {
        if ($scope.userEmail) {
            $scope.getAllTodos();
        }
    };

    $scope.add = function () {

        // if($scope.loggedInEmail) {
        var priority = $scope.i++;

        console.log("list:----", $scope.todoList);
        console.log("read:----;;;;;;;;;;;;   " + priority);
        var obj  = {
            "title": $scope.title1,
            "email": $scope.userEmail,
            "priority" : priority,
            "password": $scope.userPassword
        };

        console.log("obj is======= ",obj);

        ToDoService.Add.POST(obj,function (response) {

            console.log("email-->login", response);

            UserService.addTodo(response.data.title,false,response.data.id,
                response.data.priority,response.data.password);
            console.log(UserService.getTodosLength());
            console.log(UserService.getAllTodos());
            $scope.todoList = UserService.getAllTodos();
        });
    };

    $scope.getAllTodos = function () {

        if ($scope.userEmail) {

            ToDoService.GetToDoList.get({email:$scope.userEmail},function (response) {
                console.log("loggedinemail-->", $scope.userEmail);
                console.log("listtttttttttt-->", response);
                $scope.i = (response.data.lastPriority > 0) ? parseInt(response.data.lastPriority) + 1 : 1;
                //  $scope.todoList = [];
                $.each(response.data, function (idx, value) {

                    UserService.addTodo(value.title,false,value.id,
                        value.priority,$scope.userPassword);
                    $scope.todoList= UserService.getAllTodos();
                    console.log("todolist in getalltodos------->>",$scope.todoList)
                });
                //  })

            })
        }
    };

    $scope.delete = function (todo) {

        console.log(todo);
        $scope.todoList = UserService.removeTodo(todo);

        ToDoService.Delete.delete({id:todo.id});
    };


    $scope.edit = function (todo) {
        todo.editTask = false;
        console.log('editing todo');
        console.log(todo);
        UserService.editTodos(todo,editTodo);

        ToDoService.Edit.get({id:todo.id,title:todo.todoText});
    };

    $scope.getTotalTodos = function () {

       // UserService.getTodosLength();
        return ($scope.todoList)?$scope.todoList.length: UserService.getTodosLength();
    };

    $scope.sortableOptions = {
        stop: function (e, ui) {

            $.each($scope.todoList, function (idx, val) {

                var payload={
                    id:val.id,
                    priority:(idx + 1)
                };
                ToDoService.updatePriority.get({}, payload, function (response) {
               // ToDoService.updatePriority.get({key: val.id, priority: (idx + 1)}, function (response) {
                        console.log(response);
                    });
            });
        }
    };

}]);
