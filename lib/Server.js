const StudentController=require("./controller/StudentController")
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Bienvenidos a Api de estudiantes de VPS!"});
});
app.listen(port, () => {
    console.log(`Api de estudiantes de VPS:${port}`);
});

app.get("/v1/students", (request, response) => {
    const students = StudentController.getAllStudents()
    response.json(students);
});