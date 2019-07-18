const Categories = require('../../models-singular/categories.js');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    let obj = {name: 'Stuff', description: 'things'};
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a category', () => {
    let obj = { name: 'Stuff', description: 'things' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key => {
              expect(product[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can get() all categories', () => {
  });

  it('can update() a category', () => {
  });

  it('can delete() a category', () => {
  });

});