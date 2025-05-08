const express = require("express");
const router = express.Router();
const controladorPersonas = require("../controladores/personas");

router.get("/", controladorPersonas.getAllPersons);
router.get("/:id", controladorPersonas.getPersonById);
router.post("/", controladorPersonas.createPerson);
router.put("/:id", controladorPersonas.updatePerson);
router.patch("/:id", controladorPersonas.patchPerson);
router.delete("/:id", controladorPersonas.deletePerson);

module.exports = router;