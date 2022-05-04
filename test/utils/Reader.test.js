const Reader=require("../../lib/utils/Reader")
describe("Tests para Reader", () => {
    test("Lectura de visualpartner.json", () => {
        const vpsStudents=Reader.readJsonFile("visualpartners.json")
        expect(vpsStudents.length).toBe(51);
    });
})