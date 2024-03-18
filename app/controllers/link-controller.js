const { Links } = require("../models");

module.exports = {
  async create(req, res) {
    try {
      const { title, name } = req.body;
      const createLink = await Links.create({ title, name });

      res.status(200).json({
        status: "Sukses Membuat Data Link",
        data: {
          id: createLink.id,
          title: createLink.title,
          name: createLink.name
        }
      });
    } catch (err) {
      res.status(400).json({
        status: "FAIL",
        message: err.message
      });
    }
  },

  async get(req, res) {
    try {
      const getAll = await Links.findAll();

      res.status(200).json({
        status: "Sukses Membuat Data Link",
        data: getAll
      });
    } catch (err) {
      res.status(400).json({
        status: "FAIL",
        message: err.message
      });
    }
  },

  async getById(req, res) {
    try {
      const link = await Links.findByPk(req.params.id);
      if (!link) {
        res.status(404).json({
          status: "FAIL",
          message: `Link dengan id ${req.params.id} tidak ditemukan!`
        });
        return;
      }

      res.status(200).json({
        data: link
      });
    } catch (err) {
      res.status(400).json({
        status: "FAIL",
        message: err.message
      });
    }
  },

  async update(req, res) {
    try {
      const { title, name } = req.body;
      const link = await Links.findByPk(req.params.id);
      if (!link) {
        res.status(404).json({
          status: "FAIL",
          message: `Link dengan id ${req.params.id} tidak ditemukan!`
        });
        return;
      }

      await Links.update(
        { title, name },
        {
          where: {
            id: req.params.id
          }
        }
      );
      res.status(200).json({
        status: "OK",
        message: `Link dengan id ${req.params.id} telah diperbarui.`
      });
    } catch (err) {
      res.status(400).json({
        status: "FAIL",
        message: err.message
      });
    }
  },

  async delete(req, res) {
    try {
      const link = await Links.findByPk(req.params.id);
      if (!link) {
        res.status(404).json({
          status: "FAIL",
          message: `Link dengan id ${req.params.id} tidak ditemukan!`
        });
        return;
      }

      await Links.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json({
        status: "OK",
        message: `Link dengan id ${req.params.id} telah dihapus.`
      });
    } catch (err) {
      res.status(400).json({
        status: "FAIL",
        message: err.message
      });
    }
  }
};
