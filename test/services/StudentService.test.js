const Reader=require("../../lib/utils/Reader")
const StudentService=require("../../lib/services/StudentService")
describe("Tests para StudentService", () => {
    test("Lectura de todos los estudiantes de visualpartner.json", () => {
        const vpsStudents=Reader.readJsonFile("visualpartners.json")
        const allStudents=StudentService.getAllStudents(vpsStudents)
        expect(allStudents.length).toBe(50);
    });
})