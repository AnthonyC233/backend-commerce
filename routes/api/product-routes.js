const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// Pulls all products
router.get('/', (req, res) => {
  Product.findAll({
    include: [Product],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});
  
  // get one product
  router.get('/:id', (req, res) => {
    Product.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product],
    })
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err));
  });
  
  router.post('/', (req, res) => {
    Product.create(req.body)
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  });
  
   router.put('/:id', (req, res) => {
    Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  });
  
  router.delete('/:id', (req, res) => {
    router.delete('/:id', (req, res) => {
      Product.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then((category) => res.status(200).json(category))
        .catch((err) => res.status(400).json(err));
    });  });
  
  module.exports = router;