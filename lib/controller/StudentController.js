const StudentService=require("../services/StudentService")
const Reader=require("../../lib/utils/Reader")
class StudentController{
    static getAllStudents(){
        const students=Reader.readJsonFile("visualpartners.json")
        return StudentService.getAllStudents(students)
    }
    static getEmailOfCertifiedStudents(){
        const students=Reader.readJsonFile("visualpartners.json")
        return StudentService.getEmailOfCertifiedStudents(students)
    }
    static getAccreditedStudents(){
        const students=Reader.readJsonFile("visualpartners.json")
        return StudentService.getAccreditedStudents(students)
    }
}
module.exports=StudentController