app.controller('LoginController', ["$scope", "$http", "UserService", "$location", "$rootScope","LoginService","ToDoService", function ($scope, $http, UserService, $location, $rootScope,LoginService,ToDoService) {

    $scope.userEmail = UserService.getEmail();
    $scope.userPassword = UserService.getPassword();
    $scope.todoList = [];
    $scope.email = "";
    $scope.password = "";
    $scope.login = function () {

       LoginService.POST({email:$scope.email,password:$scope.password},function (response) {

           console.log("email-->login", response);
           $scope.userEmail = response.email;
           $scope.userPassword = response.password;
           $scope.loggedInEmail = response.email;
           $scope.loggedInPassword = response.password;
       });
    };// iska ui kaha h?

    $scope.logout = function () {
       /* if(!$rootScope.loggedInEmail){
            $location.path("/user/login1");
        }*/
        $http
            .post("/user/logout?email=" + $scope.email)
            .then(function (response) {

                //  alert("success logout")
                $scope.userEmail = response.email;
                console.log("email-->logout", response.email);
                //alert("success logout")

            }).catch(function (e) {
            console.log('Error: ', e);

        });
    };

  


}]);