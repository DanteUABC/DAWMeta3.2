const { Estudiante } = require("../models");

exports.getAllStudents = async (req, res) => {
  try {
    const estudiantes = await Estudiante.findAll();
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener los estudiantes",
      details: error.message
    });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByPk(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ message: "Estudiante no encontrado" });
    }
    res.json(estudiante);
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar el estudiante",
      details: error.message
    });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { matricula, personaId } = req.body;
    const nuevoEstudiante = await Estudiante.create({
      matricula,
      personaId
    });
    res.status(201).json(nuevoEstudiante);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear el estudiante",
      details: error.message
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { matricula, personaId } = req.body;
    const estudiante = await Estudiante.findByPk(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    await estudiante.update({ matricula, personaId });
    res.json(estudiante);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar el estudiante",
      details: error.message
    });
  }
};

exports.patchStudent = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByPk(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    await estudiante.update(req.body);
    res.json(estudiante);
  } catch (error) {
    res.status(500).json({
      error: "Error al modificar parcialmente el estudiante",
      details: error.message
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByPk(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    await estudiante.destroy();
    res.json({ message: "Estudiante eliminado correctamente" });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar el estudiante",
      details: error.message
    });
  }
};