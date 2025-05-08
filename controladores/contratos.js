const { Contrato } = require("../models");

exports.getAllContracts = async (req, res) => {
  try {
    const contratos = await Contrato.findAll();
    res.json(contratos);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener los contratos",
      details: error.message
    });
  }
};

exports.getContractById = async (req, res) => {
  try {
    const contrato = await Contrato.findByPk(req.params.id);
    if (!contrato) {
      return res.status(404).json({ message: "Contrato no encontrado" });
    }
    res.json(contrato);
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar el contrato",
      details: error.message
    });
  }
};

exports.createContract = async (req, res) => {
  try {
    const { docenteId, asignaturaId } = req.body;
    const nuevoContrato = await Contrato.create({
      docenteId,
      asignaturaId
    });
    res.status(201).json(nuevoContrato);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear el contrato",
      details: error.message
    });
  }
};

exports.updateContract = async (req, res) => {
  try {
    const { docenteId, asignaturaId } = req.body;
    const contrato = await Contrato.findByPk(req.params.id);
    if (!contrato) {
      return res.status(404).json({ message: "Contrato no encontrado" });
    }

    await contrato.update({ docenteId, asignaturaId });
    res.json(contrato);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar el contrato",
      details: error.message
    });
  }
};

exports.patchContract = async (req, res) => {
  try {
    const contrato = await Contrato.findByPk(req.params.id);
    if (!contrato) {
      return res.status(404).json({ message: "Contrato no encontrado" });
    }

    await contrato.update(req.body);
    res.json(contrato);
  } catch (error) {
    res.status(500).json({
      error: "Error al modificar parcialmente el contrato",
      details: error.message
    });
  }
};

exports.deleteContract = async (req, res) => {
  try {
    const contrato = await Contrato.findByPk(req.params.id);
    if (!contrato) {
      return res.status(404).json({ message: "Contrato no encontrado" });
    }

    await contrato.destroy();
    res.json({ message: "Contrato eliminado correctamente" });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar el contrato",
      details: error.message
    });
  }
};