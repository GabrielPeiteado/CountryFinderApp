const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
      it('shouldn´t work when there is no subregion, area or population data', () => {
        Country.create({ subregion: '', area:'', population:'' });
      });
      it('should throw an error if id have more than 3 characters or is null', () => {
        Country.create({id:'ESPA', name:'Spain'})
        .then(() => done(new Error('The country ID is invalid')))
        Country.create({id:'', name:'Spain'})
        .then(() => done(new Error('The country ID is invalid')))
      });
    });
  });
});
