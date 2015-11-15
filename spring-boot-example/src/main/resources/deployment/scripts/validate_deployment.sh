#!/bin/bash
STATUS=$(curl -X GET http://localhost:8080/health)

if [ "$STATUS" ] && [[ "$STATUS" =~ "UP" ]]; then
  exit 0
else
  exit 1
fi