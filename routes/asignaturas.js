const express = require("express");
const router = express.Router();
const controladorAsignaturas = require("../controladores/asignaturas");

router.get("/", controladorAsignaturas.getAllSubjects);
router.get("/:id", controladorAsignaturas.getSubjectById);
router.post("/", controladorAsignaturas.createSubject);
router.put("/:id", controladorAsignaturas.updateSubject);
router.patch("/:id", controladorAsignaturas.patchSubject);
router.delete("/:id", controladorAsignaturas.deleteSubject);

module.exports = router;