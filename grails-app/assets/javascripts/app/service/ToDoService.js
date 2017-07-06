app.factory('ToDoService',function ($resource) {
   return {
       Delete: $resource("/toDo/delete/:id",{id:"@id"}),
       Edit:$resource("/toDo/edit/:id/:text",{id:"@id",title:"@title"}),

      Add:$resource("/toDo/save",{title:"@title",email:"@email",priority:"@priority",password:"@password"}, {
        POST: {method: 'POST'}
    })
  //     UpdatePriority:("/toDo/updatePriority/:id/:priority",{id:"@id",priority:"@priority"})
};
    /*return $resource("/toDo/save",{title:"@title",email:"@email",priority:"@priority",password:"@password"}, {
        POST: {method: 'POST'}
    });*/
});
