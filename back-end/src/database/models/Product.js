module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', { 
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING
  }, {
    tablename: 'products',
    timestamps: false,
  });
  return Product;
};
