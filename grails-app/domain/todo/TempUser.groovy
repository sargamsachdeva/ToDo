package todo

class TempUser {

    String email
    Boolean active

    static constraints = {

        email(unique: true, email: true ,blank: false)
    }
}
