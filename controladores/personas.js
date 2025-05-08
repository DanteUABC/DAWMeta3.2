let { Persona } = require("../models");

exports.getAllPersons = async (req, res) => {
  try {
    let personas = await Persona.findAll();
    res.json(personas);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener las personas",
      details: error.message
    });
  }
};

exports.getPersonById = async (req, res) => {
  try {
    let persona = await Persona.findByPk(req.params.id);
    if (!persona) return res.status(404).json({ message: "Persona no encontrada" });
    res.json(persona);
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar la persona",
      details: error.message
    });
  }
};

exports.createPerson = async (req, res) => {
  try {
    let nueva = await Persona.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear la persona",
      details: error.message
    });
  }
};

exports.updatePerson = async (req, res) => {
  try {
    let persona = await Persona.findByPk(req.params.id);
    if (!persona) return res.status(404).json({ message: "Persona no encontrada" });

    await persona.update(req.body);
    res.json(persona);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar la persona",
      details: error.message
    });
  }
};

exports.patchPerson = async (req, res) => {
  try {
    let persona = await Persona.findByPk(req.params.id);
    if (!persona) return res.status(404).json({ message: "Persona no encontrada" });

    await persona.update(req.body);
    res.json(persona);
  } catch (error) {
    res.status(500).json({
      error: "Error al modificar la persona",
      details: error.message
    });
  }
};

exports.deletePerson = async (req, res) => {
  try {
    let persona = await Persona.findByPk(req.params.id);
    if (!persona) return res.status(404).json({ message: "Persona no encontrada" });

    await persona.destroy();
    res.json({ message: "Persona eliminada" });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar la persona",
      details: error.message
    });
  }
};