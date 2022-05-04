class StudentService {
    static getAllStudents(students){
        return students
    }
    static getEmailOfCertifiedStudents(students){
        const certifiedStudents=students.filter((students)=>students.haveCertification==true)
        const emailStudents=certifiedStudents.map((students)=>students.email)
        return emailStudents
    }
    static getAccreditedStudents(students){
        const accreditedStudents=students.filter((students)=>students.credits>500)
        const nameStudents=accreditedStudents.map((students)=>students.name)
        return nameStudents
    }

}