const express = require('express');
const bodyParse = require('body-parser');
const Shop = require('./modules/Shop');
const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));

// console.log(Shop.Shop.getDepartment('fruits and vegs'));
//
// department = [
//     {
//         name: 'Meat',
//         cases: [
//             {
//                 id: 1,
//                 products: [
//                     {
//                         name: 'мясо',
//                         titles: [
//                             {
//                                 name: 'мясо',
//                                 units: 'kg',
//                                 quantity: 30,
//                                 price: 80
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// ];
//
// Shop.Shop.addDepartment(department);
// console.log('________');
// console.log(Shop.Shop.getShop());
//
// Shop.Shop.deleteDepartment('fruits and vegs');
// console.log('________');
// console.log(Shop.Shop.getShop());
//
// Shop.Shop.changeDepartment('fish', department);
// console.log('________');
// console.log(Shop.Shop.getShop());
//

// console.log(Shop.Shop.getCase('fruits and vegs', 1));
//
newCase = {
    id: 1,
    products: [
        {
            name: 'мясо',
            titles: [
                {
                    name: 'мясо',
                    units: 'kg',
                    quantity: 30,
                    price: 80
                }
            ]
        }
    ]
};
//
// Shop.Shop.addCase('fruits and vegs', newCase);
//
// console.log(Shop.Shop.getCase('fruits and vegs', 3));

// Shop.Shop.deleteCase('fruits and vegs', 1);
// Shop.Shop.changeCase('fruits and vegs', 1, newCase);

// console.log(Shop.Shop.getDepartment('fruits and vegs'));
// console.log(Shop.Shop.getProduct('fruits and vegs', 1, 'яблоки'));

// console.log(Shop.Shop.getCase('fruits and vegs', 1));


newProduct = {
    name: 'мясоjjjj',
    titles: [
        {
            name: 'мясо',
            units: 'kg',
            quantity: 30,
            price: 80
        }
    ]
};

Shop.Shop.addProduct('fruits and vegs', 1, newProduct);

// console.log(Shop.Shop.getCase('fruits and vegs', 1));

// Shop.Shop.deleteProduct('fruits and vegs', 1, 'яблоки');

Shop.Shop.changeProduct('fruits and vegs', 1, 'яблоки', newProduct);

// console.log(Shop.Shop.getCase('fruits and vegs', 1));

// app.get('/products', function (req, res) {
//     res.send(Shop.Shop.getShop());
// });
//
app.get('/products/:name', function (req, res) {
    res.send(Shop.Shop.getDepartment(req.params.name));
});

app.get('/products/:name/:id', function (req, res) {
    res.send(Shop.Shop.getCase(req.params.name, req.params.id));
});

// app.get('/products', function (req, res) {
//     // res.send(Shop.Shop.getCase(req.params.name));
//     console.log(req.params);
//     // res.send(req.params);
//     res.end();
// });
//
// app.get('/products/:id', function (req, res) {
//     const myProd =  products.find(function (product) {
//        return product.id === +req.params.id;
//     });
//
//     res.send(myProd);
// });
//
// app.post('/products/', function (req, res) {
//     const product = {
//         id: Date.now(),
//         name:req.body.name,
//         price:req.body.price,
//     };
//
//     products.push(product);
//     res.send(products);
// });
//
// app.put('/products/:id', function (req, res) {
//     products.find(function (product) {
//         if (product.id === +req.params.id) {
//             const {name, price} = req.body;
//
//             product.name = name;
//             product.price = price;
//         }
//     });
//
//     res.send(products);
// });
//
// app.delete('/products/:id', function (req, res) {
//     products.find(function (product) {
//         if (product.id === +req.params.id) {
//             products.splice(products.indexOf(product), 1);
//             return true;
//         }
//     });
//
//     res.send(products);
// });
//
app.listen(3000, function () {
   console.log('start')
});