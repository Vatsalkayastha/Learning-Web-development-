const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/vatsal');
    console.log("We are Connected")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const kittySchema = new mongoose.Schema({
  name: String
});

// const Kitten = mongoose.model('Kitten', kittySchema);
kittySchema.methods.speak = function speak() {
  const greeting = "My name is "+this.name;
  console.log(greeting);
};
const Kitten = mongoose.model('Kitten', kittySchema);


const harrykitty = new Kitten({ name: 'harrykitty' });
console.log(harrykitty.name); 
const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak();

harrykitty.save();
fluffy.save();