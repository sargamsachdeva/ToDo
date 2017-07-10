package todo

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured

@Secured('ROLE_USER')
class ToDoController {

    def index(){

        println("todo index")
        render "hello"
    }

    def save() {
        def obj = request.JSON
        println("object----->"+obj.title)
        println("email->"+obj.email)
        println("password is---->>"+getAuthenticatedUser().password)

        ToDo toDo = new ToDo(title: obj.title,email:getPrincipal().username,priority: obj.priority,password: getAuthenticatedUser().password)

        println("tood object------>>>>>"+toDo)
        if(toDo.validate()){

            if(toDo.save(flush:true)){
                render(["success": true, data: toDo ] as JSON)
            } else{
                render(["success": false, data: null ] as JSON)
            }
        } else{
            render(["success": false, data: null ] as JSON)
        }
    }

    def updatePriority(int id, int priority){

        println("id in update---->>>>"+id)
        println("priority in update---->>>>"+priority)
        ToDo todo = ToDo.get(id)
        todo.priority = priority
        todo.save(flush: true)
        render(["success": true] as JSON)
    }

    def getTodoList(String email){

        List<ToDo> list =ToDo.findAllByEmail(email, [sort: 'priority', order: 'asc'])

        println("email-->"+email)
        println("list-->"+list)

        def priorityCounter = ToDo.where{email == email}.list(sort: 'priority', order: 'desc', max: 1, offset: 0).priority
        def res = [
                "lastPriority": priorityCounter,
                "data": list
        ]
        render res as JSON
    }

    def delete(int id) {

        ToDo toDo = ToDo.get(id)

        if(toDo) {
            toDo.delete(flush: true)
            render(["success": true,data:toDo] as JSON)
        }
        else{
            render(["success": false,data:null ] as JSON)
        }
    }
    def edit(int id, String title) {

        ToDo toDo = ToDo.get(id)

        if(toDo) {
            toDo.title = title
            toDo.save(flush: true)
            render(["success": true,data:toDo] as JSON)
        }
        else{
            render(["success": false,data:null ] as JSON)
        }
    }
}
