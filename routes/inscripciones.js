const express = require("express");
const router = express.Router();
const controladorInscripciones = require("../controladores/inscripciones");

router.get("/", controladorInscripciones.getAllInscriptions);
router.get("/:id", controladorInscripciones.getInscriptionById);
router.post("/", controladorInscripciones.createInscription);
router.put("/:id", controladorInscripciones.updateInscription);
router.patch("/:id", controladorInscripciones.patchInscription);
router.delete("/:id", controladorInscripciones.deleteInscription);

module.exports = router;