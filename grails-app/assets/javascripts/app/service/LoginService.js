app.factory('LoginService',function ($resource) {

    return $resource("/user/login",{email:"@email",password:"@password"}, {
        POST: {method: 'POST'}
    });
});

