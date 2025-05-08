const { Docente } = require("../models");

exports.getAllTeachers = async (req, res) => {
  try {
    const docentes = await Docente.findAll();
    res.json(docentes);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener los docentes",
      details: error.message
    });
  }
};

exports.getTeacherById = async (req, res) => {
  try {
    const docente = await Docente.findByPk(req.params.id);
    if (!docente) {
      return res.status(404).json({ message: "Docente no encontrado" });
    }
    res.json(docente);
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar el docente",
      details: error.message
    });
  }
};

exports.createTeacher = async (req, res) => {
  try {
    const { categoriaEmpleadoId, personaId, numEmpleado } = req.body;
    const nuevoDocente = await Docente.create({
      categoriaEmpleadoId,
      personaId,
      numEmpleado
    });
    res.status(201).json(nuevoDocente);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear el docente",
      details: error.message
    });
  }
};

exports.updateTeacher = async (req, res) => {
  try {
    const { categoriaEmpleadoId, personaId } = req.body;
    const docente = await Docente.findByPk(req.params.id);
    if (!docente) {
      return res.status(404).json({ message: "Docente no encontrado" });
    }

    await docente.update({ categoriaEmpleadoId, personaId });
    res.json(docente);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar el docente",
      details: error.message
    });
  }
};

exports.patchTeacher = async (req, res) => {
  try {
    const docente = await Docente.findByPk(req.params.id);
    if (!docente) {
      return res.status(404).json({ message: "Docente no encontrado" });
    }

    await docente.update(req.body);
    res.json(docente);
  } catch (error) {
    res.status(500).json({
      error: "Error al modificar parcialmente el docente",
      details: error.message
    });
  }
};

exports.deleteTeacher = async (req, res) => {
  try {
    const docente = await Docente.findByPk(req.params.id);
    if (!docente) {
      return res.status(404).json({ message: "Docente no encontrado" });
    }

    await docente.destroy();
    res.json({ message: "Docente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar el docente",
      details: error.message
    });
  }
};