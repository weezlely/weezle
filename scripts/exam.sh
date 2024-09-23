#!/bin/bash

set -e

echo "Run test environment in react..."

yarn exam-react dev || {  echo "Test run failed, Installing package...";   yarn exam-react install && yarn exam-react dev; }

echo "The test is running....."