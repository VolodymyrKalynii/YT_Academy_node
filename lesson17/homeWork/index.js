const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
const objectId = require("mongodb").ObjectID;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/products", (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;

        const dbo = db.db('mydb');
        dbo.collection('products').find({}).toArray((err, result) => {
            if (err) throw err;

            // console.log(result);
            res.send(result);
            db.close();
        });
    });
});

app.get("/products/:id", (req, res) => {
    const id = new objectId(req.params.id);

    MongoClient.connect(url, (err, db) => {
        if (err) throw err;

        const dbo = db.db('mydb');
        dbo.collection('products').findOne({ _id: id }, (err, result) => {
            if (err) throw err;

            // console.log(result);
            res.send(result);
            db.close();
        });
    });
});

app.post('/products', (req, res) => {
    const prod = {
        name: req.body.name,
        price: req.body.price
    };

    MongoClient.connect(url, (err, db) => {
        if (err) throw err;

        const dbo = db.db('mydb');
        dbo.collection('products').insertOne(prod, (err, data) => {
            // console.log(data);
            res.send(prod);
            db.close();
        });
    });
});

app.put('/products', (req, res) => {
    const id = new objectId(req.body.id);
    const name = req.body.name;
    const price = req.body.price;

    MongoClient.connect(url, (err, db) => {
        if (err) throw err;

        const dbo = db.db('mydb');
        const newValues = {
            $set: {
                name: name,
                price: price
            }
        };
        dbo.collection('products').findOneAndUpdate({ _id: id }, newValues,
            { returnOriginal: false }, (err, result) => {
                if (err) throw err;

                // console.log('1 document updated');
                const product = result.value;
                res.send(product);
                db.close();
            });
    });
});

app.delete("/products/:id", (req, res) => {
    const id = new objectId(req.params.id);

    MongoClient.connect(url, (err, db) => {
        if (err) throw err;

        const dbo = db.db('mydb');
        dbo.collection('products').findOneAndDelete({ _id: id }, (err, obj) => {
            if (err) throw err;

            // console.log('1 document deleted');
            const product = obj.value;
            res.send(product);
            db.close();
        });
    });
});

http.listen(port, () => {
    console.log('start listen ' + port)
});