//Connections file.

var mongoose = require('mongoose');
mongoose.connect('localhost:9001');

//Mongoose Schema
const User = {
    name: String,
    email: String,
    password: String,
    oAuth: String,
    visited: Array,
    traits: {
        food: Array,
        entertainment: Array,
        outdoorsy: Number,
        exploration: Number,
        wealth: Number
    },
    travellerPoints: Number
};

//User table schema
const userTableSchema = mongoose.model('User', User);

const addUser = function(user, email, password, oAuth) {
    const info = {
        user,
        email,
        password,
        oAuth,
        tp: 0
    };
    //Create new user object
    var newUser = new userTableSchema(
        {
            name: info.user,
            email: info.email,
            password: info.password,
            oAuth: info.oAuth,
            tp: info.tp
        });
    //Save to database
    newUser.save(function (err) {
        if (err) {
            console.log(err);
        }
        console.log('success');
    });
};

const addTraits = function(name, newTraits){

    userTableSchema.findOneAndUpdate({name: name}, {name: 'Test'}, {upsert:true}, function(err, person){
        try{
            console.log('%s was found and updated', person.name);
        }
        catch(err){
            console.log('User not updated');
        }
    });
};

const returnUser = function(name){
  userTableSchema.findOne({name: name}, 'name email visited traits travellerPoints', function(err, person){
     if(err){
         console.log('User not found');
     }
     console.log(person);
  });
};

addUser('Alex', 'alex@alexwiley.co.uk', 'testpassword', 123456);
// returnUser('Test');