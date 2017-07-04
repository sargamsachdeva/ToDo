app.factory('UserService', [function () {

    var loggedInEmail = userData ? userData.loggedInEmail : "";
    var loggedInPassword = userData ? userData.loggedInPassword : "";
   // var todoList = [];
    this.todoList=[{
        text1: 'Hello',
        text2: 'world'
    }];

   /* var _todos = [];
    this.addTodo = function (todo) {

        return _todos.push(todo);
    };*/

   this.getEmail = function () {

       console.log("getemail-->"+loggedInEmail);
       return loggedInEmail;
   };

   this.getPassword = function () {

       return loggedInPassword;
   };

  /* this.addTodo = function (todoText,done,id,priority,password) {

       console.log("in service todoText",todoText);
        todoList.push([todoText,done,id,priority,password]);

   };*/

  this.addTodo = function (text) {

        this.todoList.push(text)
    };

   this.removeTodo = function (todo) {

       console.log("removing-->"+todoList.splice(this.$index, 1));
       return todoList.splice(this.$index, 1);
   };

    this.editTodos = function (todo, editTodo) {

       /* console.log("todo title-->>",todo.title);
        console.log("edit todo title-->>",editTodo.title);*/
        todo.title = editTodo.title;
        return todo.title;
    };

    this.getTodosLength = function () {

        console.log("in service todolist length",todoList.length);
        return todoList.length;
    };

    return this
}]);