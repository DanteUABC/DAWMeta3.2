const express = require("express");
const router = express.Router();
const controladorDocentes = require("../controladores/docentes");

router.get("/", controladorDocentes.getAllTeachers);
router.get("/:id", controladorDocentes.getTeacherById);
router.post("/", controladorDocentes.createTeacher);
router.put("/:id", controladorDocentes.updateTeacher);
router.patch("/:id", controladorDocentes.patchTeacher);
router.delete("/:id", controladorDocentes.deleteTeacher);

module.exports = router;