#!/bin/bash

set -e

echo "Run test environment in react..."

yarn @taeopia/react run dev || {  echo "Test run failed, Installing package...";   yarn @taeopia/app-vite install && yarn @taeopia/app-vite dev; }

echo "The test is running....."