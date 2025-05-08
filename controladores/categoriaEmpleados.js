const { CategoriaEmpleado } = require("../models");

exports.getAllCategories = async (req, res) => {
  try {
    const categoriaEmpleados = await CategoriaEmpleado.findAll();
    res.json(categoriaEmpleados);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener las categorías de emppleado",
      details: error.message
    });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const categoriaEmpleado = await CategoriaEmpleado.findByPk(req.params.id);
    if (!categoriaEmpleado) {
      return res.status(404).json({ message: "Estudiante no encontrado" });
    }
    res.json(categoriaEmpleado);
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar la categoría de empleado",
      details: error.message
    });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { clave, nombre } = req.body;
    const nuevoCategoriaEmpleado = await CategoriaEmpleado.create({
      clave,
      nombre
    });
    res.status(201).json(nuevoCategoriaEmpleado);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear la categoría de empleado",
      details: error.message
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { clave, nombre } = req.body;
    const categoriaEmpleado = await CategoriaEmpleado.findByPk(req.params.id);
    if (!categoriaEmpleado) {
      return res.status(404).json({ message: "Categoria de empleado no encontrado" });
    }

    await categoriaEmpleado.update({ clave, nombre });
    res.json(categoriaEmpleado);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar la categoría de empleado",
      details: error.message
    });
  }
};

exports.patchCategory = async (req, res) => {
  try {
    const categoriaEmpleado = await CategoriaEmpleado.findByPk(req.params.id);
    if (!categoriaEmpleado) {
      return res.status(404).json({ message: "Categoría de empleado no encontrada" });
    }

    await categoriaEmpleado.update(req.body);
    res.json(categoriaEmpleado);
  } catch (error) {
    res.status(500).json({
      error: "Error al modificar parcialmente la categoría de empleado",
      details: error.message
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const categoriaEmpleado = await CategoriaEmpleado.findByPk(req.params.id);
    if (!categoriaEmpleado) {
      return res.status(404).json({ message: "Categoría de empleado no encontrada" });
    }

    await categoriaEmpleado.destroy();
    res.json({ message: "Categoría de empleado eliminada correctamente" });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar la categoría de empleado",
      details: error.message
    });
  }
};