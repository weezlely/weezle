#!/bin/bash

set -euo pipefail

# Color
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
RESET='\033[0m'

echo -e "${YELLOW}Preparing to dev environment for React... ${RESET}"

# Run the React dev environment
if ! yarn @taeopia/react run dev; then
  echo -e "${RED}Failed to launch React dev environment. ${RESET}"
  exit 1  # Exit script with failure status
fi

echo -e "${GREEN}Running a dev environment for React... ${RESET}"
