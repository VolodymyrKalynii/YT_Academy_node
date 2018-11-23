const products = [];

module.exports.add = prod => {
    products.push(prod);
    return products;
};
module.exports.findProd = index => products[index];
module.exports.update = (index, newProd) => products[index] = newProd;
module.exports.delete = index => products.splice(index, 1, {});
module.exports.find = () => products;
module.exports.size = products.length;
