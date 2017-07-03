app.controller('UserController', ["$scope","$http","UserService","$rootScope",function($scope,$http,UserService,$rootScope) {


 $scope.loggedInEmail = userData ? userData.loggedInEmail: "";
 $scope.i = 1;


    $scope.init = function(){
        if($scope.loggedInEmail) {
            $scope.getAllTodos();
        }
    };

    $scope.login=function () {

        $http
            .post("/user/login?email=" + $scope.email)
            .then(function (response) {

                $scope.loggedInEmail = response.data.email;
                console.log("email-->login",response.data.email);
                $scope.getAllTodos();
            }).catch(function (e) {
            console.log('Error: ', e);


        });
    };

    $scope.logout = function() {

        $http
            .post("/user/logout?email="+$scope.email)
            .then(function (response) {

                //  alert("success logout")
                ($scope.loggedInEmail) =response.data.email;
                console.log("email-->logout",response.data.email)

            }).catch(function (e) {
            console.log('Error: ', e);

        });
    };
    $scope.todoList = [];

    $scope.add = function() {

            if($scope.loggedInEmail) {
                var priority = $scope.i++;

                console.log("list:----", $scope.todoList);
                 console.log("read:----"+priority);
                $http
                    .post("/toDo/save?title=" + $scope.title1 + "&&email=" + $scope.email + "&&priority=" + (priority))
                    .then(function (response) {
                        console.log(response);
                        if (response.data.success) {
                            $scope.todoList.push({
                                todoText: response.data.data.title,
                                done: false,
                                id: response.data.data.id,
                                priority: response.data.data.priority
                            });
                        } else {
                            alert("tech issue")
                        }
                    });
            } else {
                alert("cannot add task when user is logout");
            }
        };  //return successFun(success)

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

    $scope.getAllTodos = function(){

        if($scope.loggedInEmail) {
            $http.get("/toDo/getTodoList?email=" + $scope.loggedInEmail)
                .then(function(response) {

                    console.log("loggedinemail-->",$scope.loggedInEmail);
                    console.log("listtttttttttt-->",response.data);
               //     $scope.i = (response.data.lastPriority<0)?1:response.data.lastPriority;
                 $scope.i=(response.data.lastPriority>0)?parseInt(response.data.lastPriority)+1:1;
                    $scope.todoList = [];
                    $.each(response.data.data, function(idx, value){
                        $scope.todoList.push({todoText:value.title, done:false, id: value.id, priority: value.priority});
                    });
                })
        }
    };


    $scope.delete = function(todo) {
            $scope.todoList.splice(this.$index, 1);
        };

        $scope.edit = function (todo, editTodo) {
            todo.title = editTodo.title;
        };

        $scope.getTotalTodos = function () {
            return $scope.todoList.length;
        };

        $scope.sortableOptions = {
            stop : function(e, ui) {
                // var item = ui.todo.$scope.todoList.scope().$scope.todoList;
                // var fromIndex = ui.$scope.todoList.sortable.index;
                // var toIndex = ui.$scope.todoList.sortable.dropindex;
            //    var item = ui.item.scope().todo;
               /* var item = ui.item.scope().todo;
                var toIndex = ui.item.sortable.index;
                var fromIndex = ui.item.sortable.dropindex;
                console.log('moved', item, fromIndex, toIndex);*/
                $.each($scope.todoList, function(idx, val){
                    $http.get("/toDo/updatePriority?id=" + val.id+"&priority="+(idx+1))
                        .then(function(response) {
                            console.log(response);
                        });
                });
            }
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