app.factory('ToDoService',function ($resource) {

   return {
       Delete: $resource("/toDo/delete/:id",{id:"@id"}),
       Edit:$resource("/toDo/edit/:id/:text",{id:"@id",title:"@title"}),

  //     UpdatePriority:("/toDo/updatePriority/:id/:priority",{id:"@id",priority:"@priority"})
};

});
