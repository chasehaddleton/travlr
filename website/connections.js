//Connections file.

var mongoose = require('mongoose');
mongoose.connect('localhost:9001');

var exports = module.exports = {};

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

exports.addUser = function(user, email, password, oAuth) {
    const info = {
        user: user,
        email: user,
        password: user,
        oAuth: user,
        tp: 0
    };
    //Create new user object
    var newUser = new userTableSchema(
        {
            name: info.user,
            email: info.email,
            password: info.password,
            oAuth: info.oAuth,
            visited: [],
            traits: {
                food: [],
                entertainment: [],
                outdoorsy: 0,
                exploration: 0,
                wealth: 0
            },
            travellerPoints: 0
        });
    //Save to database
    newUser.save(function (err) {
        if (err) {
            console.log(err);
        }
        console.log('success');
    });
};

exports.addTraits = function(name, type, value){

    userTableSchema.findOne({name: name}, 'traits.' + type, function(err, newTraits){
        if(err){
            console.log(err);
        }
        else if(newTraits == null){
            console.log('User not found');
        }
        else if(type === ('food' || 'entertainment')){
            newTraits.traits[type].push(value);
        }
        else{
            newTraits.traits[type] = value;
        }
        newTraits.save(function(err){
            if(err){
                console.log(err);
            }
            console.log('Success');
        })
    });
};

exports.returnUser = function(name, done){
    console.log('triggered');
    userTableSchema.findOne({name: name}, 'name email visited traits travellerPoints', function(err, person){
     if(err){
         console.log('User not found');
     }
     done(false, person);
  });
};


