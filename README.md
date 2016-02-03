# number-notations #

Generate a string of a number with appended notation of choice

## Install

For Node.js, the library is available from the npm registry:

    $ npm install number-notations

## Use

Exponent has to be an integer.

**Available methods:**

    getNumberNotation(exponent, method)

    0 - Scientific Notation - e15, e16, e17
    1 - American Simplified Notation - aa, bb, cc .. aaa, bbb, ccc .. aaaa, bbbb, cccc
    2 - American Simplified Notation With Capital Letters - aa, bb, cc .. AA, BB, CC .. aaa, bbb, ccc
    3 - Abbreviated Number Notation - Qa, Qi, Sx, Sp, Oc, No
    4 - Normal Number Notation - thousand, million, billion, trillion

**Examples:**

    var getNumberNotation = require('number-notations');

    getNumberNotation(32, 0)  // e32
    getNumberNotation(32, 1)  // ff
    getNumberNotation(32, 2)  // ff
    getNumberNotation(32, 3)  // No
    getNumberNotation(32, 3)  // nonillion

    getNumberNotation(110, 0) // e110
    getNumberNotation(110, 1) // fff
    getNumberNotation(110, 2) // FF
    getNumberNotation(110, 3) // Qitg
    getNumberNotation(110, 3) // quinquatrigintillion

## Release History

* 0.1.1 Normal Number Notation

* 0.1.0 Initial release

## License

See LICENSE.
