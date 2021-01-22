#!/bin/bash

set -e # stop script on any non-zero exit code

function test {
  # Hide TECHIO messages to students, from printMessage()
  HIDE_TECHIO_MESSAGES=1 \
  CODE_FILE="$2" \
  node_modules/mocha/bin/mocha "$1"
}

cd nodejs-project
test "3-param-get.spec.js" "3-param-get.solution.js"
test "4-message-post.spec.js" "4-message-post.solution.js"
