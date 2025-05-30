/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isArray = require( '@stdlib/assert-is-array' );
var add = require( '@stdlib/number-float64-base-add' );
var naryFunction = require( '@stdlib/utils-nary-function' );
var zeros = require( '@stdlib/array-base-zeros' );
var pkg = require( './../package.json' ).name;
var reduce2d = require( './../lib' );


// MAIN //

bench( pkg+':size=10000', function benchmark( b ) {
	var initial;
	var clbk;
	var out;
	var arr;
	var tmp;
	var i;
	var j;

	arr = [];
	for ( i = 0; i < 100; i++ ) {
		tmp = [];
		for ( j = 0; j < 100; j++ ) {
			tmp.push( j );
		}
		arr.push( tmp );
	}
	initial = zeros( arr.length );
	clbk = naryFunction( add, 2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = reduce2d( arr, initial, clbk );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
