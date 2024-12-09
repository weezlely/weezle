## @taeopia

> This is packages made by @taeopia - taeo
>
> This package consists of:
>
> 1. UI library based on vanilla-extract - [@taeopia/ui-with-css](https://github.com/weezlely/taeopia/tree/master/packages/ui-with-css)
> 2. Canvas Editor based on fabric.js - [@taeo/canvas-editor](https://github.com/weezlely/taeopia/tree/master/packages/canvas-editor)
> 3. table library based on tanstack/react-table - [@taeopia/react-table](https://github.com/weezlely/taeopia/tree/master/packages/react-table)
> 4. react tool library based on React - [@taeopia/react-tool](https://github.com/weezlely/taeopia/tree/master/packages/react-tools)

- If you would like more information about the package, please click the blue button.

## workspace

```json


"workspaces": {
    "packages": [
      "packages/*",
      "app/*"
    ]
  },
  "scripts": {
    "@taeopia/app-vite": "yarn workspace @taeopia/app-vite",
    "@taeopia/ui-with-css": "yarn workspace @taeopia/ui-with-css",
    "@taeopia/canvas-editor": "yarn workspace @taeopia/canvas-editor",
    "@taeopia/react-table": "yarn workspace @taeopia/react-table",
    "@taeopia/react-tool": "yarn workspace @taeopia/react-tool"
  },



```

## Get Started

- This script have to use in root directory

```bash
# Root Directory

# Install packages
$ yarn run packages


# Run Exam
$ yarn run exam

```

### 1) @taeopia/ui-with-css

- This package is a [vanilla-extract](https://vanilla-extract.style/) based UI library. Please click [here](https://github.com/weezlely/taeopia/tree/master/packages/ui-with-css) for more details.

```bash
# Root Directory

# Install package
$ yarn @taeopia/ui-with-css install


# Build package
$ yarn @taeopia/ui-with-css build
```

### 2) @taeopia/canvas-editor

- This package is a [fabric.js](http://fabricjs.com/) based canvas editing library. Please click [here](https://github.com/weezlely/taeopia/tree/master/packages/canvas-editor) for more details.

```bash
# Root Directory

# Install package
$ yarn @taeopia/canvas-editor install


# Build package
$ yarn @taeopia/canvas-editor build

```
