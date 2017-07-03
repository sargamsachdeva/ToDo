package todo


class ToDo {

    String title
    String email
    Integer priority

    static constraints = {

        title blank: false,minSize: 3
        priority nullable:false, default: 0
    }
}
