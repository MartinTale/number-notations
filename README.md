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

The MIT License (MIT)

Copyright (c) 2016 Martin Tale, http://martintale.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
