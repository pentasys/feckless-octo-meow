#!/bin/bash
running=$(curl -X GET http://localhost:8080/health)

if [ $running ] && [ $running -eq "ok" ]; then
  exit 0
else
  exit 1
fi
