var assert = require('assert'),
    countrycoder = require('../index');

assert.equal(countrycoder.getCode('French Guiana'), 'GF');
assert.equal(countrycoder.getName('BF'), 'BURKINA FASO');
assert.equal(countrycoder.getCode('Iran'), countrycoder.getCode('IRAN, ISLAMIC REPUBLIC OF'));
assert.equal(countrycoder.getCode(countrycoder.getName('IO')), 'IO');
assert.ok(countrycoder.getAllCodes() instanceof Array);
assert.ok(countrycoder.getAllNames() instanceof Array);

console.log('Passed successfully.');
