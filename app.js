const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

//middleware for adding logics to the post ==>also used for auth
// app.use('/post', () =>{
//   console.log('ths is middleware');
// });
//Route
app.get('/', (req, res) => {
  res.send('we are at home');
});

app.get('/post', (req, res) =>{
  res.send('this is post');
});
console.log(process.env.DB_Connection);
//connect to the db
mongoose.connect(
  process.env.DB_Connection,
  ()=>console.log('connected to the db!')
);


//Listen to the port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`port is listining to ${port}`));
