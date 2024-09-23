#!/bin/bash

set -e


yarn @taeopia/canvas-editor clean

yarn @taeopia/canvas-editor install

yarn @taeopia/canvas-editor build

yarn @taeopia/ui-with-css clean

yarn @taeopia/ui-with-css install

yarn @taeopia/ui-with-css build

yarn exam-react clean

yarn exam-react install


echo "The package is now installed and ready to run."
