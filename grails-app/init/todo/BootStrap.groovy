package todo

class BootStrap {

    def init = { servletContext ->

        List<User> userList = createUser()

    }
    def destroy = {
    }

    List<User> createUser() {

        List<User> users = []

        User normalUser = new User(email: "sargam.sachdeva@tothenew.com",active: true)
        Integer countUsers = User.count()

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
            users = User.findAll("from User")
        }
        return users
    }

}
