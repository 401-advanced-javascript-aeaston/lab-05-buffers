const Products = require('../../models-singular/products.js');
let products = new Products();

const supergoose = require('../supergoose.js');

describe('Products Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new product', () => {
    let obj = { name: 'Mouse', price: 9.99, description: 'works good', category: 'electronics' };
      return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a product', () => {
    let obj = { name: 'Mouse', price: 9.99, description: 'works good', category: 'electronics' };
      return products.create(obj)
      .then(record => {
        return products.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key => {
              expect(product[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can get() all products', () => {
  });

  it('can update() a product', () => {
  });

  it('can delete() a product', () => {
  });

});