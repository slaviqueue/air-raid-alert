#!/bin/bash

$(dirname "$0")/node_modules/.bin/ts-node . >> ~/logs.txt 2>&1
