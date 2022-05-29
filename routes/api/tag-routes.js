const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
    Tag.findAll({
      include: [Product],
    })
      .then((categories) => res.json(categories))
      .catch((err) => res.status(500).json(err));
  });

// gets id by single tag
router.get('/:id', (req, res) => {
    Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product],
    })
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err));
  });

// Creates tag
router.post('/', (req, res) => {
    Tag.create(req.body)
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  });

// Update tag's name by value
router.put('/:id', (req, res) => {
    Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  });

// Delete tag by id value
router.delete('/:id', (req, res) => {
    Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  });

module.exports = router;