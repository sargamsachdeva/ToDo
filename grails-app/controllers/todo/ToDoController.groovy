package todo

import grails.converters.JSON

class ToDoController {

    def index(){

        println("todo index")
        render "hello"
    }
;
    def save(String title,String email,Integer priority){

        println("title->"+title)
        println("email->"+email)

        ToDo toDo = new ToDo(title: title,email:session.email,priority: priority)

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
        ToDo todo = ToDo.get(id)
        todo.priority = priority
        todo.save(flush: true)
        render(["success": true] as JSON)
    }

    def getTodoList(String email){

        List<ToDo> list =ToDo.findAllByEmail(email, [sort: 'priority', order: 'asc'])

        println("email-->"+email)
        println("list-->"+list)

//        def priorityCounter = ToDo.createCriteria().list {
//            eq("email", email)
//            order("priority", "desc")
//            maxResults(1)
//        }
        def priorityCounter = ToDo.where{email == email}.list(sort: 'priority', order: 'desc', max: 1, offset: 0).priority
        def res = [
                "lastPriority": priorityCounter,
                "data": list
        ]
        render res as JSON
    }

   /* def markRead(String title,String email,Boolean read){

        println("in markRead")
        println("title->"+title)
        println("email->"+email)
        println("read-->"+read)

        ToDo toDo = ToDo.findByEmailAndTitle(session.email, title)

        if(toDo) {
            toDo.read = true
            toDo.save(flush:true)
        }
        render(["success": true ] as JSON)
    }*/
//
//    def increment(){
//
//        def list = ToDo.listOrderByTitle(max: 1)[0]
//        def title1=list.title
//        Integer i = list.priority
//        i++
//        list.priority=i
//        return title1 + sprintf('%03d', i)
//    }
}
