app.factory('UserService', [function () {
    var _todos = [];
    this.addTodo = function (todo) {

        return _todos.push(todo);
    };

    return this
}]);