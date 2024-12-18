#!/bin/bash

set -e

# Clean Canvas Editor
yarn @taeopia/canvas-editor run clean

# Install Canvas-Editor's node module
yarn @taeopia/canvas-editor install

# Install Canvas-Editor's build
yarn @taeopia/canvas-editor run build

# Clean @vanilla-extract/css 
yarn @taeopia/ui-with-css run clean

# Install @vanilla-extract/css's node module 
yarn @taeopia/ui-with-css install

# Install @vanilla-extract/css's build 
yarn @taeopia/ui-with-css run build


# Clean @taeopia/react-table
yarn @taeopia/react-table run clean


# Install @taeopia/react-table's node modules
yarn @taeopia/react-table Install

# Install @taeopia/react-table's builds
yarn @taeopia/react-table run build


# Clean @taeopia/react-tool's dist and node module...
yarn @taeopia/react-tool run clean

# Install @taeopia/react-tool's node modules...
yarn @taeopia/react-tool install

# Install @taeopia/react-tool's build
yarn @taeopia/react-tool run build


# When workspace finished.!
echo "The package is now installed and ready to run."
