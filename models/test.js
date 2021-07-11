const mongoose = require('mongoose');
require('dotenv/config')

const User_sc = new mongoose.Schema({
  name: String,
});

var User = mongoose.model("User", User_sc)

//connect to the db
mongoose.connect(
  process.env.DB_Connection,
  ()=>console.log('connected to the db!')
);

mongoose.connection.on('error', err => {
      throw 'failed connect to MongoDB';
    });

function createUser(username) {
  return new User({
    username,
  }).save()
};


user = createUser('sagar_panwar');

console.log(user);
