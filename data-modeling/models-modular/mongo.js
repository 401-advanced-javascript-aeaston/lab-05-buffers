'use strict';

// Class representing a generic mongo model
class Model {
  constructor() {
    
  }

  // retrieves one or more models
  get(_id) {
    if (_id) {
      return this.schema.findOne({_id});
    }
    else {
      return this.schema.find({});
    }
  }

  // creates a new record
  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  // replaces a record in the database
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, {new: true});
  }

  // Deletes a record in the model
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = Model;
