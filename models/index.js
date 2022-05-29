// Import the models
const Product = require('./Product');
const Category = require('./Catergory');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Act 21 product belongs to Category.
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Category has many products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Act 23, These products belong to many Tags
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// These tags belong to many products
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});


module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };