package todo

import grails.converters.JSON
import grails.plugin.springsecurity.SpringSecurityService
import grails.plugin.springsecurity.annotation.Secured


@Secured('ROLE_USER')
class UserController {

    SpringSecurityService springSecurityService

    def index() {

        if(isLoggedIn()){

            String username= getPrincipal().username
            String password=getAuthenticatedUser().password
            println("username in user index;;;;;;;;;;;;;;"+username)
            println("password in user index;;;;;;;;;"+password)

            render(view: 'index1', model: [loggedInEmail:  getPrincipal().username,loggedInPassword:password,loggedInUserId:getPrincipal().id])
        } else{

            redirect(url: '/login/index');
        }
    }


    def login(){
        def obj = request.JSON
        println("email:-"+obj.email)
        println("---------------")
        println("password:-"+obj.password)

        session.email = obj.email
        session.password=obj.password

        render(["success": true, email: obj.email,password:obj.password] as JSON)
    }


    def logout(String email) {

            println("logoutt")
          //  session.email = null

         redirect(url: '/logout/index')
    }

   def login1(String email){

       if(isLoggedIn()){

           // String email = authenticatedUser.email
           String username= getPrincipal().username
           println("username;;;;;;;;;;;;;;"+username)

           email = getPrincipal().username
                   // session.email = email

           println("password in login1;;;;;;;;;"+getAuthenticatedUser().password)

       render (view:'login1',model: [loggedInEmail: getPrincipal().username,loggedInPassword:getAuthenticatedUser().password])
       }
   }
    def dashboard(){

        render(view:'dashboard')
    }
    def getLoggedInEmail(){

        render([email: getAuthenticatedUser().username?: 'null' ] as JSON)
    }
}
