const router = require('express').Router();
const res = require('express/lib/response');
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req,res) => {
    Tag.findAll({
        include: [
            {
            model: Product,
            through: ProductTag,
            }
        ]
    })
});

// gets id by single tag
router.get('/:id', (req,res) => {

});

// Creates tag
router.post('/', (req, res) => {
});

// Update tag's name by value
router.put('/:id', (req, res) => {
  });

// Delete tag by id value
router.delete('/:id', (req, res) => {
});

module.exports = router;