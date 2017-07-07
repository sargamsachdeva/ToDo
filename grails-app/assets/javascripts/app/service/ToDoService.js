app.factory('ToDoService',function ($resource) {
   return {
       Delete: $resource("/toDo/delete/:id",{id:"@id"}),
       Edit:$resource("/toDo/edit/:id/:text",{id:"@id",title:"@title"}),

       Add:$resource("/toDo/save",{title:"@title",email:"@email",priority:"@priority",password:"@password"}, {
           POST: {method: 'POST'}
       }),

       updatePriority: $resource("/toDo/updatePriority?id=:key&priority=:priority",{key:"@id",priority:"@priority"}),

//       updatePriority: $resource("/toDo/updatePriority?id=:id&priority=:priority",{key:"@id",priority:"@priority"}),

       GetToDoList: $resource("/toDo/getTodoList?email=:email",{email:"@email"})


};
});
