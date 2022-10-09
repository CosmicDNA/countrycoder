var assert = require('assert'),
    countrycodes = require('../index');

assert.equal(countrycodes.getCode('French Guiana'), 'GF');
assert.equal(countrycodes.getName('BF'), 'BURKINA FASO');
assert.equal(countrycodes.getCode('Iran'), countrycodes.getCode('IRAN, ISLAMIC REPUBLIC OF'));
assert.equal(countrycodes.getCode(countrycodes.getName('IO')), 'IO');
assert.ok(countrycodes.getAllCodes() instanceof Array);
assert.ok(countrycodes.getAllNames() instanceof Array);

console.log('Passed successfully.');
