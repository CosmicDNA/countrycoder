# ISO 3166 Country Name / Code Mapper in Javascript

Uses the data in http://www.iso.org/iso/country_names_and_code_elements_txt to map from
country codes to country names and vice versa. Also provides lists of all names and codes.

## Installation
```
npm install countryencoder
```

## Tests
```
npm test
```

## API Overview

  - [countryencoder.getCode()](#exportsgetcodeenglishstring)
  - [countryencoder.getName()](#exportsgetnametwoletterstring)
  - [countryencoder.getAllCodes()](#exportsgetallcodes)
  - [countryencoder.getAllNames()](#exportsgetallnames)

## countryencoder.getCode(English:String)

  Get a country code for a country name. Case-insensitive.

## Usage
```js
import * as countryencoder from "countryencoder"
// Returns 'CH'
countryencoder.getCode('Switzerland')
// Returns 'BB'
countryencoder.getCode('BarbaDOS')
```

## countryencoder.getName(Two-letter:String)

  Get a country name for a country code. Case-insensitive.

  Examples:

```js
// Returns 'TONGA'
countryencoder.getName('TO')
// Returns 'RÉUNION'
countryencoder.getName('re')
```

## countryencoder.getAllCodes()

  Get a country name for a country code. Case-insensitive.

  Example:

```js
// Returns an array ["AD", ... "ZW"]
countryencoder.getAllCodes();
```

## countryencoder.getAllNames()

  Get a country name for a country code. Case-insensitive.

  Example:

```js
// Returns an array ["AFGHANISTAN", ... "ZIMBABWE", "ÅLAND ISLANDS"]
countryencoder.getAllNames();
```

## License
MIT
