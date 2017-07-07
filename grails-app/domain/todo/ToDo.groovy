package todo


class ToDo {

    String title
    String email
    //User username
    String password
    Integer priority

    static constraints = {

        title blank: false,minSize: 3
        priority nullable:false, default: 0
    }
}
