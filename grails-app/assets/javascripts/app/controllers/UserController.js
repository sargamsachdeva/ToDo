app.controller('UserController', ["$scope","$http","UserService",function($scope,$http,UserService) {


 $scope.loggedInEmail = userData ? userData.loggedInEmail: "";
     //$scope.loggedInEmail = $scope.loggedInEmail ? "sargam.sachdeva@tothenew.com": "";


    function successFun(res) {

        console.log(res.data);
        return res.data
    }
    $scope.login=function () {

        $http
            .post("/user/login?email=" + $scope.email)
            .then(function (response) {

                $scope.loggedInEmail = response.data.email
                console.log("email-->login",response.data.email)

            }).catch(function (e) {
            console.log('Error: ', e);

        });
    };

    $scope.logout = function() {

        $http
            .post("/user/logout?email="+$scope.email)
            .then(function (response) {

                //  alert("success logout")
                ($scope.loggedInEmail) =response.data.email
                console.log("email-->logout",response.data.email)

            }).catch(function (e) {
            console.log('Error: ', e);

        });
    };
    $scope.todoList = [];


    // $scope.add = function() {
    //
    //      if($scope.loggedInEmail){
    //     $scope.todoList.push({todoText:$scope.title1, done:false});
    //     console.log($scope.todoList);
    //
    //
    //      $http
    //         .post("/toDo/save?title="+$scope.title1+"&&email="+$scope.email)
    //         .then(function(success) {
    //
    //           //  alert("success task");
    //         });  //return successFun(success)
    //         }
    //     else {
    //         alert("cannot add task when user is logout")
    //     }
    // };


    $scope.add = function() {

        if($scope.loggedInEmail){
            $scope.todoList.push({todoText:$scope.title1, done:false});
            console.log("list:----",$scope.todoList);
            //  console.log("read:----",$scope.read);

            $http
                .post("/toDo/save?title="+$scope.title1+"&&email="+$scope.email)
                .then(function(success) {

                    //  alert("success task");
                });  //return successFun(success)
        }
        else {
            alert("cannot add task when user is logout")
        }
    };

    /*$scope.markRead = function () {

     if($scope.read){

     $http
     .post("/toDo/markRead?title="+$scope.title1+"&&email="+$scope.email+"&&read="+$scope.read)
     .then(function(success) {

     //  alert("success task");
     });  //return successFun(success)
     }
     };
     */
/*
    $http.get("/user/trying?email=" + $scope.email)
        .then(function(response) {

            console.log("hi-->",response.data.email);
            $scope.loggedInEmail = response.data.email;
        });*/
   if($scope.loggedInEmail) {
    $http.get("/toDo/getTodoList?email=" + $scope.loggedInEmail)
         .then(function(response) {

             console.log("loggedinemail-->",$scope.loggedInEmail);
         console.log("listtttttttttt-->",response.data);
         $scope.todoList = response.data;
         })};


    $scope.delete = function(todo) {
            $scope.todoList.splice(this.$index, 1);
        };

        $scope.edit = function (todo, editTodo) {
            todo.title = editTodo.title;
        };

        $scope.getTotalTodos = function () {
            return $scope.todoList.length;
        };

    /*$scope.sortableOptionsA = {
        stop : function(e, ui) {
            var item = ui.$scope.todoList.scope().$scope.todoList;
            var fromIndex = ui.$scope.todoList.sortable.index;
            var toIndex = ui.$scope.todoList.sortable.dropindex;
            console.log('moved', item, fromIndex, toIndex);
        }
    };
    */    /*$scope.try = function () {
         $scope.r = $scope.todo.read;

         console.log("this is working--"+$scope.todo.r);
         };

         $scope.try();
         */
        /*
         if(location.reload()){
         $scope.refresh()
         }*/

        /*
         if (window.performance) {
         console.info("window.performance work's fine on this browser");
         }
         if (performance.navigation.type == 1) {
         console.info( "This page is reloaded" );
         } else {
         console.info( "This page is not reloaded");
         }
         */

    }]);

console.log(app);
