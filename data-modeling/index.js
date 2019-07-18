'use strict';

const mongoose = require('mongoose');
const Categories = require('./data-modeling/models-modular/categories/catgeories')

// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect
mongoose.connect(MONGOOSE_URI);
let food = new Categories ();
food.create({name: 'chicken', description: 'fruit'})
  .then(foodItem => console.log(foodItem))
  .catch(err);
  
// Do some work

// Disconnect
mongoose.disconnect();