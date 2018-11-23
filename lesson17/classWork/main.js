const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

const prod1 = {
    name: "apple",
    price: 2323
};

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    dbo.createCollection("products", (err, res) => {
        if (err) throw err;
        console.log("Collection created!");
        dbo.collection('products').insertOne(prod1, (err, res) => {
            if (err) throw err;
            console.log("1 document inserted");
            // console.log(dbo.collection('products'));
            console.log(res);
            db.close();
        });
    });


});

