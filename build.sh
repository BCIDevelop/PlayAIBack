#!/bin/bash
set -e
npm install --include=dev
tsc
npm prune --production