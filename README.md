# number-notations #

Generate a string of a number with appended notation of choice

## Install

For Node.js, the library is available from the npm registry:

    $ npm install number-notations

## Use

Exponent has to be an integer.

**Available methods:**

    getNumberNotation(exponent, method)

    0 - Scientific Notation
    1 - American Simplified Notation
    2 - American Simplified Notation With Capital Letters
    3 - Abbreviated Number Notation

**Examples:**

    getNumberNotation(32, 0)  // e32
    getNumberNotation(32, 1)  // ff
    getNumberNotation(32, 2)  // ff
    getNumberNotation(32, 3)  // No

    getNumberNotation(110, 0) // e110
    getNumberNotation(110, 1) // fff
    getNumberNotation(110, 2) // FF
    getNumberNotation(110, 3) // Qitg

## License

See LICENSE.
