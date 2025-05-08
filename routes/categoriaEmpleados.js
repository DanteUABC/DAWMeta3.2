const express = require("express");
const router = express.Router();
const controladorCategoriaEmpleados = require("../controladores/categoriaEmpleados");

router.get("/", controladorCategoriaEmpleados.getAllCategories);
router.get("/:id", controladorCategoriaEmpleados.getCategoryById);
router.post("/", controladorCategoriaEmpleados.createCategory);
router.put("/:id", controladorCategoriaEmpleados.updateCategory);
router.patch("/:id", controladorCategoriaEmpleados.patchCategory);
router.delete("/:id", controladorCategoriaEmpleados.deleteCategory);

module.exports = router;