package todo


class ToDo {

    String title
    String email
  //  Integer priority
 //   Boolean read=false

    static constraints = {

        title blank: false,minSize: 3
    }
}
