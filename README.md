[![Build Status](https://travis-ci.org/wrousseau/relationfix.svg?branch=master)](https://travis-ci.org/wrousseau/relationfix)[![Code Climate](https://codeclimate.com/github/wrousseau/relationfix/badges/gpa.svg)](https://codeclimate.com/github/wrousseau/relationfix)[![Test Coverage](https://codeclimate.com/github/wrousseau/relationfix/badges/coverage.svg)](https://codeclimate.com/github/wrousseau/relationfix)

RelationFix
===============

Loopback application, currently in development.
Fix your poor relationship by distributing tasks and chores through a marketplace !

## Dependencies

npm is obviously needed, so that the following dependencies can be installed globally

    npm install -g bower gulp strongloop

## Installing

The following commands are required to install the application

    npm install
    bower install
    gulp install

The `gulpfile.js` will soon include tasks for those to be performed with a single command.

### Running the server locally

To run the server, then accessible (by default) on [127.0.0.1:2015/](http://127.0.0.1:2015/), run the following command

    slc run

### Test suite

A test suite is in progress and can be performed by running the following command (which keeps the karma test runner running so that it watches the file changes). Best for TDD.

    gulp test

To run the tests once, the following command can be used. Used for CI.

    gulp karma

Running the test suite also generates coverage reports (both formats html and lcov are included in the `coverage` directory).
