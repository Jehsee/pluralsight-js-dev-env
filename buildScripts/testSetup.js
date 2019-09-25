// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't udnerstand.
require.extensions['.css'] = function() {};
