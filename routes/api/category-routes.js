// Mini project api routes used as example to get all location, single location, or to create a location.
const router = require('express').Router();
const {Category, Product} = require('../../models');

// The '/api/categories' endpoint

// Get request for all categories
router.get('/', (req, res) => {
    Category.findAll({
      include: [Product],
    })
      .then((categories) => res.json(categories))
      .catch((err) => res.status(500).json(err));
  });
  
  // Find certain categories by ID
  router.get('/:id', (req, res) => {
    Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product],
    })
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err));
  });
  
  // Creates new category for body
  router.post('/', (req, res) => {
    Category.create(req.body)
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  });
  
  // Updates category by ID
  router.put('/:id', (req, res) => {
    Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  });
  
  // Deletes category by id
  router.delete('/:id', (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  });
  
  //Exports for use
  module.exports = router;