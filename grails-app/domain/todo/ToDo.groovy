package todo


class ToDo {

    String title
 //   String email
    User createdBy
  //  String password
    Integer priority

    static constraints = {

        title blank: false,minSize: 3
        priority nullable:false, default: 0
    }

    static belongsTo = [createdBy:User]
}
