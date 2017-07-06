package todo

import grails.converters.JSON

class UserController {

    def index() {

        if(session.user){

        }

        else{
            render(view: 'index1', model: [loggedInEmail: session.email,loggedInPassword:session.password])
        }
    }

    def login(){
        def obj = request.JSON
        println("email:-"+obj.email)
        println("---------------")
        println("password:-"+obj.password)

        session.email = obj.email
        session.password=obj.password

       // response.sendError(500)

        render(["success": true, email: obj.email,password:obj.password] as JSON)

        //response<<"success"
        //forward(controller: 'toDo', action: 'index',params:[email:email])
    }


    def logout(String email){

        println("logoutt")

        println("!email--->"+!email)
        session.email = null
        render(["success": true,email: session.email] as JSON)
    }

   def login1(String email){
       session.email = email

       render (view:'login1',model: [loggedInEmail: session.email])
   }
    def dashboard(){

        render(view:'dashboard')
    }

}
