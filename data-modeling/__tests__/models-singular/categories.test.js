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
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can get() all categories', () => {
  });

  it('can update a category', () => {
    let obj = { name: 'Test Category', zoo: true };
    categories.create(obj)
      .then(record => {
        categories.update(record.id, { name: 'New Test Category', id: 55 })
          .then(category => {
            categories.get(55)
              .then(zz => {
                expect(zz.name).toEqual('New Test Category');
              }).catch(err => console.error);
          });
      })
      .catch(err => console.error);
  });

  it('can delete() a category', () => {
    let obj = { name: 'Test Category' };
    categories.create(obj)
      .then(record => {
        return categories.delete(record._id)
          .then(category => {
            expect(categories.get(record._id).name).toBeFalsy();
          });
      })
      .catch(err => console.error);
  });


});