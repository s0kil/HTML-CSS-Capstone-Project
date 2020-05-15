#!/usr/bin/env sh

JS_FILE_PATH=$(find dist/ -type f -name "source.*.js")
JS_FILE=$(basename $JS_FILE_PATH)

SERVER_PUSH_HEADERS="
/\n
 Link: </$JS_FILE>; rel=preload; as=script
"

echo $SERVER_PUSH_HEADERS >dist/_headers
