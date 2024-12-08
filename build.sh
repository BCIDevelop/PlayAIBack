#!/bin/bash
set -e
npm install
tsc
npm prune --production
