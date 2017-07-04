app.controller('LoginController', ["$scope", "$http", "UserService", "$rootScope", function ($scope, $http, UserService, $rootScope) {

    // $scope.loggedInEmail = userData ? userData.loggedInEmail : "";
    $scope.userEmail = UserService.getEmail();
    $scope.userPassword = UserService.getPassword();
    // $scope.loggedInPassword = userData ? userData.loggedInPassword : "";
    $scope.i = 1;


    $scope.login = function () {

        $http
            .post("/user/login?email=" + $scope.email + "&&password=" + $scope.password)
            .then(function (response) {

                $scope.userEmail = response.data.email;
                $scope.userPassword = response.data.password;
                console.log("email-->login", response.data.email);
                console.log("myyyyyemail-->login", $scope.userEmail);
                console.log("password-->login", response.data.password);
    //            $scope.getAllTodos();
            }).catch(function (e) {
            console.log('Error: ', e);


        });
    };

    $scope.logout = function () {

        $http
            .post("/user/logout?email=" + $scope.email)
            .then(function (response) {

                //  alert("success logout")
                $scope.userEmail = response.data.email;
                console.log("email-->logout", response.data.email)
                //alert("success logout")

            }).catch(function (e) {
            console.log('Error: ', e);

        });
    };

}]);