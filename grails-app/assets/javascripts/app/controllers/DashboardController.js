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
        console.log("read:----" + priority);
        var obj  = {
            "title": $scope.title1,
            "email": $scope.email,
            "priority" : priority,
            "password": $scope.password
        };
       /* $http
            .post("/toDo/save", JSON.stringify(obj))
            .then(function (response) {
                console.log(response);
                if (response.data.success) {

                  UserService.addTodo(response.data.data.title,false,response.data.data.id,
                    response.data.data.priority,response.data.data.password);
                  console.log(UserService.getTodosLength());
                  console.log(UserService.getAllTodos());
                  $scope.todoList = UserService.getAllTodos();
                } else {
                    alert("tech issue")
                }
            });*/

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
            $http.get("/toDo/getTodoList?email=" + $scope.userEmail)
                .then(function (response) {
         /* console.log("calling get from service-->>",ToDoService.get({email:$scope.userEmail}));
          ToDoService.get({email:$scope.userEmail},function (response) {

         */     console.log("loggedinemail-->", $scope.userEmail);
                console.log("listtttttttttt-->", response.data);
              //     $scope.i = (response.data.lastPriority<0)?1:response.data.lastPriority;
              $scope.i = (response.data.lastPriority > 0) ? parseInt(response.data.lastPriority) + 1 : 1;
              //  $scope.todoList = [];
              $.each(response.data.data, function (idx, value) {

                  UserService.addTodo(value.title,false,value.id,
                      value.priority,$scope.userPassword);
                  $scope.todoList= UserService.getAllTodos();
                  console.log("todolist in getalltodos------->>",$scope.todoList)
             });
              //  })
          });
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
                $http.get("/toDo/updatePriority?id=" + val.id + "&priority=" + (idx + 1))
                    .then(function (response) {
                        console.log(response);
                    });

             /*  console.log("sorting priority-->>", ToDoService.get({id:val.id,priority:idx + 1}))
               ToDoService.get({id:val.id,priority:idx + 1});*/
            });
        }
    };

}]);
