
const StudentController=require("../../lib/controller/StudentController");
describe("Tests para StudentController", () => {
    test("Lectura de todos los estudiantes de visualpartner.json", () => {
        const allStudents=StudentController.getAllStudents();
        expect(allStudents.length).toBe(51);
    });
    test("Lectura de los emails de todos los estudiantes de visualpartner.json con certificación", () => {
        const emailStudents=StudentController.getEmailOfCertifiedStudents();
        expect(emailStudents.length).toBe(29);
    });
    test("Lectura de los nombres de todos los estudiantes de visualpartner.json con credits mayor a 500", () => {
        const creditsStudents=StudentController.getAccreditedStudents();
        expect(creditsStudents.length).toBe(27);
    });
});