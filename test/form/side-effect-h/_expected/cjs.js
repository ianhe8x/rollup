'use strict';

function foo ( ok ) {
	if ( !ok ) {
		throw new Error( 'this will be included' );
	}
}

foo();

var main = 42;

module.exports = main;
