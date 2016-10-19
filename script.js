var MyStudents = 
{
    "students" : [
        {
        "firstName" : "Lois", 
        "lastName" : "Griffin", 
        "Age" : 35,
        "Major" : "Psychotherapy"
        },
        {
        "firstName" : "Peter", 
        "lastName" : "Griffin", 
        "Age" : 40,
        "Major" : "Political Science"
        },
        {
        "firstName" : "Stewie", 
        "lastName" : "Griffin", 
        "Age" : 5,
        "Major" : "Biotechnology"
        }
        
    ],
    "classroom" : 104,
    "instructorName" : "Brian Griffin"

}

$( document ).ready(function() {
    var stringBuilder = "We have the following students in the class:<br>";
    for (var i = 0; i < MyStudents.students.length;i++) {
        stringBuilder += MyStudents.students[i].firstName + " " + MyStudents.students[i].lastName + " is " + MyStudents.students[i].Age + " years old and studies "+ MyStudents.students[i].Major + "<br>";
    }
    stringBuilder += "There is a total of " + MyStudents.students.length + " students.<br>";
    stringBuilder += "The class takes places in classroom number " + MyStudents.classroom + " and the instructor name is " + MyStudents.instructorName + ".";
    $("#demo").html(stringBuilder);
});

