<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# reduce2d

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Reduce the number of dimensions by one of a two-dimensional nested array by applying a function against an accumulator and each element along the innermost dimension and returning the accumulation results as a one-dimensional array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-reduce2d
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var reduce2d = require( '@stdlib/utils-reduce2d' );
```

#### reduce2d( arr, initial, fcn\[, thisArg] )

Reduces the number of dimensions by one of a two-dimensional nested array by applying a function against an accumulator and each element along the innermost dimension and returning the accumulation results as a one-dimensional array.

```javascript
var naryFunction = require( '@stdlib/utils-nary-function' );
var add = require( '@stdlib/number-float64-base-add' );

var arr = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ]
];

var out = reduce2d( arr, [ 0, 0 ], naryFunction( add, 2 ) );
// returns [ 6, 15 ]
```

The applied function is provided the following arguments:

-   **accumulator**: accumulated value.
-   **value**: array element.
-   **indices**: current array element indices.
-   **arr**: input array.

To set the `this` context when invoking the input function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var add = require( '@stdlib/number-float64-base-add' );

function fcn( acc, v ) {
    this.count += 1;
    return add( acc, v );
}

var arr = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ]
];

var ctx = {
    'count': 0
};

var out = reduce2d( arr, [ 0, 0 ], fcn, ctx );
// returns [ 6, 15 ]

var cnt = ctx.count;
// returns 6
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function **requires** an array-like object containing an `initial` value for the accumulator for each reduction. The number of `initial` values must equal the size of the outermost input array dimension.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledarrayBy = require( '@stdlib/array-filled-by' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var naryFunction = require( '@stdlib/utils-nary-function' );
var add = require( '@stdlib/number-float64-base-add' );
var zeros = require( '@stdlib/array-base-zeros' );
var reduce2d = require( '@stdlib/utils-reduce2d' );

function fill( i ) {
    var rand = discreteUniform( -10*(i+1), 10*(i+1) );
    return filledarrayBy( 10, 'float64', rand );
}

// Create a nested array of arrays:
var x = filledarrayBy( 10, 'generic', fill );

// Create an explicit binary function:
var f = naryFunction( add, 2 );

// Compute the sums along the innermost dimension...
var y = reduce2d( x, zeros( x.length ), f );

console.log( 'x:' );
console.log( x );

console.log( 'y:' );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-map2d`][@stdlib/utils/map2d]</span><span class="delimiter">: </span><span class="description">apply a function to each nested element in an array of arrays and assign the result to a nested element in a new array of arrays.</span>
-   <span class="package-name">[`@stdlib/utils-reduce`][@stdlib/utils/reduce]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in an array and return the accumulated result.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-reduce2d.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-reduce2d

[test-image]: https://github.com/stdlib-js/utils-reduce2d/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-reduce2d/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-reduce2d/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-reduce2d?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-reduce2d.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-reduce2d/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-reduce2d/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-reduce2d/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-reduce2d/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-reduce2d/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-reduce2d/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-reduce2d/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-reduce2d/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-reduce2d/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/map2d]: https://github.com/stdlib-js/utils-map2d

[@stdlib/utils/reduce]: https://github.com/stdlib-js/utils-reduce

<!-- </related-links> -->

</section>

<!-- /.links -->
