package todo

class BootStrap {

    def init = { servletContext ->
        def adminRole = new Role(authority: 'ROLE_USER').save()

        def testUser = new User(username: 'sargamsachdeva', password: 'password').save()

       // def todo=new ToDo(title: 'todo1',email: testUser.username,password: testUser.password,priority: 1).save()

        UserRole.create testUser, adminRole

        UserRole.withSession {
            it.flush()
            it.clear()
        }


      //  List<TempUser> userList = createUser()

    }
    def destroy = {
    }
/*

    List<TempUser> createUser() {

        List<TempUser> users = []

        TempUser normalUser = new TempUser(email: "sargam.sachdeva@tothenew.com",active: true)
        Integer countUsers = TempUser.count()

        if (!countUsers) {

            log.info "Creating new users "
            if (normalUser.save(flush: true, failOnError: true)) {

                log.info "${normalUser} saved"
                users.add(normalUser)


            } else {
                log.error "${normalUser} cannot be saved--- ${normalUser.errors.allErrors}"
            }

        } else {
            log.info "Users exists in the system "
            users = TempUser.findAll("from TempUser")
        }
        return users
    }
*/

}
