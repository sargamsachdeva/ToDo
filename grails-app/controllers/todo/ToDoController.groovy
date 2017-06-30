package todo

import grails.converters.JSON

class ToDoController {

    def index(){

        println("todo index")
//        render (view:'dashboard')
        render "hello"
    }

    def save(String title,String email){


        println("title->"+title)
        println("email->"+email)

      /*  def list=ToDo.list().priority

        Integer i
        for(i=1;i<10;i++)


        println("list of priority----->"+list)
*/
       // Integer i=0
        ToDo toDo = new ToDo(title: title,email:session.email)

        if(toDo.validate()){

            toDo.save(flush:true)
        }

        render(["success": true ] as JSON)


    }

    def getTodoList(String email){

        List<ToDo> list =ToDo.findAllByEmail(email)

        println("email-->"+email)
        println("list-->"+list)
        render list as JSON
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
