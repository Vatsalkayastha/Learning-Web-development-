// Inserting data into mongodb

// use vatsal

db.items.insertOne({name:"Samsung S22",price: 20000,rating: 4.5,qty: 233, sold:98})


db.items.insertMany([{name:"Samsun S22",price: 20000,rating: 4.5,qty: 233, sold:98},{name:"Moto S22",price: 22000,rating: 3.5,qty: 133, sold:288}])


// Searching for data in mongo
// THis will return object with price 22000
db.items.find({price: 22000})  


db.items.find({price: {$gte: 20000}})  
db.items.find({price: {$gt: 20000}})  
    db.items.find({price: {$gt: 20000}},{price: 1})  

// And Operator
db.items.find({price: {$gt: 20000},rating :{$gt: 3.5}})  

// Or Operator
db.items.find({$or : [{price: {$gt: 20000}},{rating :{$gt: 3.5}}]})



// Deleting the Object
db.items.deleteOne({price: 22000})  
db.items.deleteMany({price: 22000})  


// Updating the database 

db.items.updateOne({name: "Moto S22"},{$set: {price: 10}})
db.items.updateMany({name: "Samsun S22"},{$set: {price: 30} })