var mongoose=require('mongoose');
var Schema = mongoose.Schema;
require('dotenv').config();
var con ;
var userSchema= new Schema({
  userid: {type:String, required:true, trim:true,index:true,unique:true},
  chips: {type:Number}
});

var userModel = mongoose.model('users',userSchema);
var alex = new userModel({userid:'Alex',chips:10000,regdate:Date.now});
var cb = function(err){
  if(!err)
    console.log("Connection Opened");
  else
    console.log("Connection Opened Failed");
  };
console.log(process.env.DB_Connection);
console.log('heloooooooo');
mongoose.connect(
    'mongodb+srv://spanwar:Panwar123@cluster0.if6bf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    cb
  );

con = mongoose.connection;
alex.save(function(err,alex){
  if(err){
    console.log(err);
  }else{
    console.log("Document Save Done");
  }

});
