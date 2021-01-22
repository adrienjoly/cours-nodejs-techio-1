#!/bin/bash

set -e # stop script on any non-zero exit code

# Hide TECHIO messages to students, from printMessage()
HIDE_TECHIO_MESSAGES=1

cd nodejs-project
CODE_FILE="3-param-get.solution.js" node_modules/mocha/bin/mocha 3-param-get.spec.js
CODE_FILE="4-message-post.solution.js" node_modules/mocha/bin/mocha 4-message-post.spec.js
