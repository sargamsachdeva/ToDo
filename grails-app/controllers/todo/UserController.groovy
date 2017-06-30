package todo

import grails.converters.JSON

class UserController {

    def index() {

        println("in index-->"+session.email)
        /*if (session.email) {

            render(view: 'index1', model: [loggedInEmail: session.email])

        } else {
           // render(view: 'index1')
        }*/

        if(session.user){

        }

        else{
            render(view: 'index1', model: [loggedInEmail: session.email])
        }
    }

    def login(String email){

        println("email:-"+email)
        println("---------------")

        session.email = email

       // response.sendError(500)

        render(["success": true, email: email ] as JSON)

        //response<<"success"
        //forward(controller: 'toDo', action: 'index',params:[email:email])
    }


    def logout(String email){

        println("logoutt")

        println("!email--->"+!email)
        session.email = null
        render(["success": true,email: session.email] as JSON)
    }

   def trying(String email){

       email=session.email
      def u= ToDo.findByEmail(email).email

       println("in trying-->"+u)

       render ([u:u] as JSON)
   }
}
