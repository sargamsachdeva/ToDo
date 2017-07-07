app.factory('UserService', [function () {

//    var loggedInEmail = "";
  //  var loggedInPassword = "";
    var loggedInEmail = userData ? userData.loggedInEmail : "";
    var loggedInPassword = userData ? userData.loggedInPassword : "";
    var todoList = [];

   this.getEmail = function () {

       console.log("getemail-->"+loggedInEmail);
       return loggedInEmail;
   };

   this.getPassword = function () {

       return loggedInPassword;
   };

   this.setEmail = function (email) {

       console.log("getemail-->"+email);
       loggedInEmail=email;
   };

   this.setPassword = function (password) {

       loggedInPassword=password;
   };

   this.addTodo = function (todoText,done,id,priority,password) {

       console.log("in service todoText",todoText);
       var obj = {todoText:todoText,done:done,id:id,priority:priority,password:password};
        todoList.push(obj);
        console.log("in service todolist-->>",todoList)
   };

   this.removeTodo = function (todo) {
       console.log("todo in remove-->>",todo);
       console.log("todolist in remove-->>",todoList);
       for(var i =0;i<todoList.length; i++){
           if(todoList[i].id==todo.id){
               todoList.splice(i, 1);
               return todoList;
           }
       }

       //todoList.splice(todoList.indexOf(todo), 1);
   };

    this.editTodos = function (todo, editTodo) {

        $.each(todoList, function(idx, val){
            if(val.todoText==todo.todoText){
                return todo.title = editTodo.title;
            }
        })
    };

    this.getTodosLength = function () {

        console.log("in service todolist length",todoList.length);
        return todoList.length;
    };

    this.getAllTodos = function(){
        return todoList;
    };

    return this
}]);