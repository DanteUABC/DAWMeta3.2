const express = require("express");
const router = express.Router();
const controladorEstudiantes = require("../controladores/estudiantes");

router.get("/", controladorEstudiantes.getAllStudents);
router.get("/:id", controladorEstudiantes.getStudentById);
router.post("/", controladorEstudiantes.createStudent);
router.put("/:id", controladorEstudiantes.updateStudent);
router.patch("/:id", controladorEstudiantes.patchStudent);
router.delete("/:id", controladorEstudiantes.deleteStudent);

module.exports = router;