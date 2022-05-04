const Reader=require("../../lib/utils/Reader")
const StudentService=require("../../lib/services/StudentService")
describe("Tests para StudentService", () => {
    test("Lectura de todos los estudiantes de visualpartner.json", () => {
        const vpsStudents=Reader.readJsonFile("visualpartners.json")
        const allStudents=StudentService.getAllStudents(vpsStudents)
        expect(allStudents.length).toBe(51);
    });
    test("Lectura de los emails de todos los estudiantes de visualpartner.json con certificación", () => {
        const vpsStudents=Reader.readJsonFile("visualpartners.json")
        const emailStudents=StudentService.getEmailOfCertifiedStudents(vpsStudents)
        expect(emailStudents.length).toBe(29);
    });
    test("Lectura de los nombres de todos los estudiantes de visualpartner.json con credits mayor a 500", () => {
        const vpsStudents=Reader.readJsonFile("visualpartners.json")
        const creditsStudents=StudentService.getAccreditedStudents(vpsStudents)
        expect(creditsStudents.length).toBe(29);
    });
})