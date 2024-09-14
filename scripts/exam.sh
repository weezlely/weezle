#!/bin/bash

set -e

echo "테스트 환경 실행"

cd example/vite || { echo "exmaple 디렉토리 이동 실패"; exit 1; }

echo "현재 경로 : $(pwd)"

# 패키지 실행 
yarn run dev || {   echo "yarn run dev 실패, 패키지 설치 중...";   yarn install && yarn run dev; }

echo "테스트 환경 실행"