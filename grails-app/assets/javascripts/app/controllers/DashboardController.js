app.controller('DashboardController', ["$scope", "$http", "UserService", "$rootScope", function ($scope, $http, UserService, $rootScope) {


    /*$scope.loggedInEmail = userData ? userData.loggedInEmail : "";
    $scope.loggedInPassword = userData ? userData.loggedInPassword : "";*/

    $scope.userEmail = UserService.getEmail();
    $scope.userPassword = UserService.getPassword();
    $scope.i = 1;


    $scope.init = function () {
        if ($scope.userEmail) {
            $scope.getAllTodos();
        }
    };


    $scope.todoList = [];

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
        $http
            .post("/toDo/save", JSON.stringify(obj))
            .then(function (response) {
                console.log(response);
                if (response.data.success) {
                  /*  $scope.todoList.push({
                        todoText: response.data.data.title,
                        done: false,
                        id: response.data.data.id,
                        priority: response.data.data.priority,
                        password: response.data.data.password
                    });*/

                  UserService.addTodo(response.data.data.title,false,response.data.data.id,
                    response.data.data.priority,response.data.data.password);
                  console.log(UserService.getTodosLength());
                  console.log(UserService.getAllTodos());
                  $scope.todoList = UserService.getAllTodos();
                } else {
                    alert("tech issue")
                }
            });
    };


    $scope.read = false;
    $scope.markRead = function () {

         if($scope.read){
             $http
             .post("/toDo/markRead?title="+$scope.title1+"&&email="+$scope.email+"&&read="+$scope.read)
             .then(function(success) {

             //  alert("success task");
             });  //return successFun(success)
         }
     };

    $scope.getAllTodos = function () {

        if ($scope.userEmail) {
            $http.get("/toDo/getTodoList?email=" + $scope.userEmail)
                .then(function (response) {

                    console.log("loggedinemail-->", $scope.userEmail);
                    console.log("listtttttttttt-->", response.data);
                    //     $scope.i = (response.data.lastPriority<0)?1:response.data.lastPriority;
                    $scope.i = (response.data.lastPriority > 0) ? parseInt(response.data.lastPriority) + 1 : 1;
                    $scope.todoList = [];
                    $.each(response.data.data, function (idx, value) {
                        // $scope.todoList.push({
                        //     todoText: value.title,
                        //     done: false,
                        //     id: value.id,
                        //     priority: value.priority
                        // });

                        UserService.addTodo(value.title,false,value.id,
                            value.priority,$scope.userPassword);
                        $scope.todoList = UserService.getAllTodos();
                    });
                })
        }
    };


    $scope.delete = function (todo) {

     //   $scope.todoList.splice(this.$index, 1);
        console.log(todo);
        $scope.todoList = UserService.removeTodo(todo);
        $http.get("/toDo/delete?id=" + todo.id)
            .then(function (response) {
                console.log(response);
            });
        $.each($scope.todoList, function (idx, val) {
            $http.get("/toDo/updatePriority?id=" + val.id + "&priority=" + (idx + 1))
                .then(function (response) {
                    console.log(response);
                });
        });
    };


    $scope.edit = function (todo) {
        todo.editTask = false;
        console.log('editing todo');
        console.log(todo);
        UserService.editTodos(todo,editTodo);
        $http.get("/toDo/edit?id=" + todo.id+"&text="+todo.todoText)
        .then(function (response) {
            console.log(response);
        });
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
            });
        }
    };

}]);
