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

    getScientific(exponent)
    getAmericanSimplified(exponent)
    getAmericanSimplifiedWithCaps(exponent)
    getAbbreviated(exponent)
    getNormal(exponent)

**Examples:**

    var NumberNotation = require('number-notations');

    NumberNotation.getNumberNotation(32, 0)  // e32
    NumberNotation.getNumberNotation(32, 1)  // ff
    NumberNotation.getNumberNotation(32, 2)  // ff
    NumberNotation.getNumberNotation(32, 3)  // No
    NumberNotation.getNumberNotation(32, 4)  // nonillion

    NumberNotation.getNumberNotation(110, 0) // e110
    NumberNotation.getNumberNotation(110, 1) // fff
    NumberNotation.getNumberNotation(110, 2) // FF
    NumberNotation.getNumberNotation(110, 3) // Qitg
    NumberNotation.getNumberNotation(110, 4) // quinquatrigintillion

    NumberNotation.getScientific(110)                 // e110
    NumberNotation.getAmericanSimplified(110)         // fff
    NumberNotation.getAmericanSimplifiedWithCaps(110) // FF
    NumberNotation.getAbbreviated(110)                // Qitg
    NumberNotation.getNormal(110)                     // quinquatrigintillion

## Release History

* 0.2.0 Added more readable method names

* 0.1.2 Fixed npm package

* 0.1.1 Normal Number Notation

* 0.1.0 Initial release

## License

See LICENSE.
