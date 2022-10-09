var assert = require('assert'),
    countryencoder = require('../index');

assert.equal(countryencoder.getCode('French Guiana'), 'GF');
assert.equal(countryencoder.getName('BF'), 'BURKINA FASO');
assert.equal(countryencoder.getCode('Iran'), countryencoder.getCode('IRAN, ISLAMIC REPUBLIC OF'));
assert.equal(countryencoder.getCode(countryencoder.getName('IO')), 'IO');
assert.ok(countryencoder.getAllCodes() instanceof Array);
assert.ok(countryencoder.getAllNames() instanceof Array);

console.log('Passed successfully.');
