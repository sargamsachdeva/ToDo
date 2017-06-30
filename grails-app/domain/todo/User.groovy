package todo

class User {

    String email
    Boolean active

    static constraints = {

        email(unique: true, email: true ,blank: false)
    }
}
