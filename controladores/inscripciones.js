const { Inscripcion } = require("../models");

exports.getAllInscriptions = async (req, res) => {
  try {
    const inscripciones = await Inscripcion.findAll();
    res.json(inscripciones);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener las inscripciones",
      details: error.message
    });
  }
};

exports.getInscriptionById = async (req, res) => {
  try {
    const inscripcion = await Inscripcion.findByPk(req.params.id);
    if (!inscripcion) {
      return res.status(404).json({ message: "Inscripción no encontrada" });
    }
    res.json(inscripcion);
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar la inscripción",
      details: error.message
    });
  }
};

exports.createInscription = async (req, res) => {
  try {
    const { id, semestre, calificacion } = req.body;
    const nuevaInscripcion = await Inscripcion.create({
      id,
      semestre,
      calificacion
    });
    res.status(201).json(nuevaInscripcion);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear la inscripción",
      details: error.message
    });
  }
};

exports.updateInscription = async (req, res) => {
  try {
    const { id, semestre, calificacion } = req.body;
    const inscripcion = await Inscripcion.findByPk(req.params.id);
    if (!inscripcion) {
      return res.status(404).json({ message: "Inscripción no encontrada" });
    }

    await inscripcion.update({ id, semestre, calificacion });
    res.json(inscripcion);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar la inscripción",
      details: error.message
    });
  }
};

exports.patchInscription = async (req, res) => {
  try {
    const inscripcion = await Inscripcion.findByPk(req.params.id);
    if (!inscripcion) {
      return res.status(404).json({ message: "Inscripción no encontrada" });
    }

    await inscripcion.update(req.body);
    res.json(inscripcion);
  } catch (error) {
    res.status(500).json({
      error: "Error al modificar parcialmente la inscripción",
      details: error.message
    });
  }
};

exports.deleteInscription = async (req, res) => {
  try {
    const inscripcion = await Inscripcion.findByPk(req.params.id);
    if (!inscripcion) {
      return res.status(404).json({ message: "Inscripción no encontrada" });
    }

    await inscripcion.destroy();
    res.json({ message: "Inscripción eliminada correctamente" });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar la inscripción",
      details: error.message
    });
  }
};
