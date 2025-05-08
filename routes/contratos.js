const express = require("express");
const router = express.Router();
const controladorContratos = require("../controladores/contratos");

router.get("/", controladorContratos.getAllContracts);
router.get("/:id", controladorContratos.getContractById);
router.post("/", controladorContratos.createContract);
router.put("/:id", controladorContratos.updateContract);
router.patch("/:id", controladorContratos.patchContract);
router.delete("/:id", controladorContratos.deleteContract);

module.exports = router;