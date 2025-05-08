const { Asignatura } = require("../models");

exports.getAllSubjects = async (req, res) => {
  try {
    const asignaturas = await Asignatura.findAll();
    res.json(asignaturas);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener las asignaturas",
      details: error.message
    });
  }
};

exports.getSubjectById = async (req, res) => {
  try {
    const asignatura = await Asignatura.findByPk(req.params.id);
    if (!asignatura) {
      return res.status(404).json({ message: "Asignatura no encontrada" });
    }
    res.json(asignatura);
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar la asignatura",
      details: error.message
    });
  }
};

exports.createSubject = async (req, res) => {
  try {
    const { clave, nombre, creditos } = req.body;
    const nuevaAsignatura = await Asignatura.create({
      clave,
      nombre,
      creditos
    });
    res.status(201).json(nuevaAsignatura);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear la asignatura",
      details: error.message
    });
  }
};

exports.updateSubject = async (req, res) => {
  try {
    const { clave, nombre, creditos } = req.body;
    const asignatura = await Asignatura.findByPk(req.params.id);
    if (!asignatura) {
      return res.status(404).json({ message: "Asignatura no encontrada" });
    }

    await asignatura.update({ clave, nombre, creditos });
    res.json(asignatura);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar la asignatura",
      details: error.message
    });
  }
};

exports.patchSubject = async (req, res) => {
  try {
    const asignatura = await Asignatura.findByPk(req.params.id);
    if (!asignatura) {
      return res.status(404).json({ message: "Asignatura no encontrada" });
    }

    await asignatura.update(req.body);
    res.json(asignatura);
  } catch (error) {
    res.status(500).json({
      error: "Error al modificar parcialmente la asignatura",
      details: error.message
    });
  }
};

exports.deleteSubject = async (req, res) => {
  try {
    const asignatura = await Asignatura.findByPk(req.params.id);
    if (!asignatura) {
      return res.status(404).json({ message: "Asignatura no encontrada" });
    }

    await asignatura.destroy();
    res.json({ message: "Asignatura eliminada correctamente" });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar la asignatura",
      details: error.message
    });
  }
};